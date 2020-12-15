//关键功能是api和html转换
const app = getApp()
var WxParse = require('../../wxParse/wxParse.js');
Page({

  data: {
    tmp:'1',
    abc: null,
    title: 1,
    motto: '资讯信息'
  },
  abc: function (e) {
    this.setData({
      abc: e.detail.value
    })
    console.log(this.data.abc)
  },
  //调用api
  send: function () {
    var that = this;
    var name = this.data.abc;
    wx.request({
      url: 'https://api.jisuapi.com/iqa/query?appkey=5b74e73c24f30cba&question=' + name ,
      method: 'GET',
      success: function (res)   {
        console.log(res)
        var article = res.data.result.content;
        //html转换
        WxParse.wxParse('article', 'html', article, that, 5);
        that.setData({
          motto: '',
          title: 0
        })
      }
    })
  },
  onLoad: function () {
    this.setData({
      motto: '资讯信息'
    })
  }

})