Page({
  data:{
    
  },
  跳转1:function(event)
  {
     wx.navigateTo({
       url: '../../pages/year/yearcircle/yearcircle',
     })

  },
  跳转2:function(event)
  {
     wx.navigateTo({
       url: '../../pages/month/monthcircle/monthcircle',
     })

  },
  跳转3:function(event)
  {
     wx.navigateTo({
       url: '../../pages/day/daycircle/daycircle',
     })

  }
})