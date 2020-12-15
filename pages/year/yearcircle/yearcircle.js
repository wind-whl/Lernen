//index.js
//获取应用实例

var app = getApp()





Page({
  data: {
    motto: 'Hello World',
    userInfo: {},
    year: null,
    log: null,
    fillerData: 'none',
    textGray: 0
  },



  //页面跳转到to do list
  bindViewTap: function () {
    wx.navigateTo({
      url: '../yearshedule/yearshedule'
    })
  },




  onLoad: function () {
    console.log('onLoad')
    var that = this
    //调用应用实例的方法获取全局数据

    var time = new Date();
    var yearStart = new Date(time.getFullYear() + "/01/01 00:00:00");   
    var nextYear = new Date((time.getFullYear() + 1) + "/01/01 00:00:00");
    var fullHours = Math.floor((nextYear.getTime() - yearStart.getTime()) / (3600 * 1000));
    var throughHours = Math.floor((time.getTime() - yearStart.getTime()) / (3600 * 1000));
    var per = throughHours / fullHours;
    that.setData({
      year: time.getFullYear(),
      per: Math.floor(per * 100),
      textGray: per,
      textSpeed: per * 2,
    })
    if (per <= 0.5) {
      that.setData({
        spinerTrans: - per * 360,
        spinerSpeed: per * 2,
      })
    } else {
      that.setData({
        spinerTrans: - 180,
        spinerSpeed: 1,
      })
      setTimeout(function () {
        that.setData({
          fillerData: 'block',
        })
        setTimeout(function () {
          that.setData({
            fillerTrans: - (per - 0.5) * 360,
            fillerSpeed: per * 2 - 1,
          })
        }, 50)
      }, 1000)
    }
    //微信、百度等小程序参考代码，和 Jquery发送ajax请求是一样的
wx.request({
  url: "https://api.tianapi.com/txapi/mingyan/index?key=b334ccfe86ec143653db79f4e1c1bef3&keyword=天才&page=1&rows=5", 
  success: function (res) {
    console.log(res)
    if(res.data.code == 200){
    that.setData({
      content: res.data.newslist[0].content,
      author: res.data.newslist[0].author,
    })
  }else{
      that.setData({
        content: res.data.msg,
        author : res.data.msg 
      }) 
  }
  },
  fail: function (err) {
    console.log(err)
  }
})
  },
  
})
