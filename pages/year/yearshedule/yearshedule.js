var common = require('../../../utils/util.js');
/*每个元素都有特定的id和index包括已删除的，修改删除等操作需要遍历当前点击的index值与缓存内的id值匹配之后执行对应操作*/
var page_app = getApp();
var myDate = new Date();
var month = myDate.getMonth();
var year = myDate.getFullYear();
var day=myDate.getDate();
Page({
  data: {
    hasEmptyGrid: false,
    dayHide: true,
    TaskItems: wx.getStorageSync('tasksData') || [],
    
    
    newTask: '',
    focus: false,
    day: '暂未设置'
  },



//common设置
  onShareAppMessage() {
    return {
      title: '小程序任务提醒',
      desc: '任务列表',
      path: 'pages/index/index'
    }
  },
  onLoad: function (options) {
    // 初始化选择的日期
    wx.setStorageSync('selecttime',(month+1)+'月' + day+"日")
    //当小程序初始化完成时，会触发 onLaunch（全局只触发一次）
  },
  onShow:function(){//页面加载
    this.setData({
      day : wx.getStorageSync('selecttime'),
      TaskItems: wx.getStorageSync('tasksData') || []
    })
    //当小程序启动，或从后台进入前台显示，会触发 onShow
  },






//勾选checkbox，改变完成状态
  changeStatus: function (e) {
    let _this = this,
      AllDatas = _this.data.TaskItems;//所有设置的任务

    let nowIndex = e.target.dataset.index;//当前点击的index

    AllDatas.map(function (obj) {
      if (obj.id == nowIndex) {
        obj.finshed = !obj.finshed;//改变当前数据的完成状态
      }
    })

    _this.setData({
      TaskItems: AllDatas
    })
    wx.setStorageSync('tasksData', AllDatas);

  },






//解决长按删除组件
  mytouchstart: function (e) {
    let that = this;
    that.setData({
      touch_start: e.timeStamp
    })
  },
  mytouchend: function (e) {
    let that = this;
    that.setData({
      touch_end: e.timeStamp
    })
  },
  taskDetail: function (e) {//页面跳转
    let _this = this;
    //触摸时间距离页面打开的毫秒数  
    var touchTime = _this.data.touch_end - _this.data.touch_start;
    //长按则删除 
    if (touchTime > 350) {

      let AllDatas = _this.data.TaskItems;//所有设置的任务
      let newData = AllDatas.concat();
      let nowID = e.target.dataset.index;//当前点击的index

      wx.showModal({
        title: '提示',
        content: '是否删除',
        success: function (res) {
          if (res.confirm) {
            AllDatas.map(function (data, _index) {///删除对应的数据
              if (data.id == nowID) {
                AllDatas.splice(_index, 1);
              }
            })

            // AllDatas[e.target.dataset.index].finshed = !AllDatas[e.target.dataset.index].finshed;//改变当前数据的完成状态
            _this.setData({
              TaskItems: AllDatas
            })
            wx.showToast({
              title: '删除成功',
              icon: 'success',
              duration: 1000
            })
            wx.setStorageSync('tasksData', AllDatas);
          }
        }
      })
    } 
    else    //短按则进入detail页面
    {
      let id = e.target.dataset.index;
      (id == 0 || id) && wx.navigateTo({
        url: '../yearlist/yearlist?id=' + id
      })
    }
  },







//键入任务
  getInputTask: function(e){//新建任务1 获取值
    this.setData({
      newTask: e.detail.value
    })
  },




//确认任务写入
  newTask: function(e){//新建任务2 设置值
    var newStr = this.data.newTask;
    var _this = this
    if(!newStr){
      wx.showModal({
        title: '未填写内容',
        showCancel: false,
        success: function(res) {
          if (res.confirm) {
            _this.setData({
              focus: true
            })
          }
        }
      })
      return;
    }
    console
    var dataID = wx.getStorageSync('dataID', AllDatas) || 0;//任务id  每次改变需要写入缓存
    console.log(dataID)
    let AllDatas = this.data.TaskItems;//所有设置的任务
    let newDatas = {value: this.data.newTask, finshed: false, id : dataID, time: common.formatTime(new Date()), day: this.data.day};
    this.data.newTask = "";

    dataID++;//设置ID并写入缓存
    wx.setStorageSync('dataID', dataID);
    
    AllDatas.push(newDatas)

    this.setData({
      TaskItems: AllDatas,
      newTask: ""
    })
    wx.setStorageSync('tasksData', AllDatas);
  },





//获取系统信息
  getSystemInfo() {
    try {
      const res = wx.getSystemInfoSync();
      this.setData({
        scrollViewHeight: res.windowHeight * res.pixelRatio || 667
      });
    } catch (e) {
      console.log(e);
    }
  },





//选择日期
  bindDateChange: function (e) {
    let that=e.detail.value;
    if(that[5]==0){
      var month=that[6];
    }else{
      month=that[5]+that[6];
    }
    if(that[8]==0){
      var day2=that[9];
    }else{
      day2=that[8]+that[9];
    }
    this.setData({
      day: month+"月"+day2+"日"
    })
  }

})
