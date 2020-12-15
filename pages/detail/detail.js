Page({
  download1:
  
// 下载文件并预览

 function(e) {
  console.log(e);
 

  wx.downloadFile({
      url: "https://7465-test-8gtn9z056019b680-1303839203.tcb.qcloud.la/%E3%80%8A%E5%A4%A7%E5%AD%A6%E7%89%A9%E7%90%86%E5%AD%A6%20%E4%B8%8A%E3%80%8B%E5%90%B4%E7%99%BE%E8%AF%97%E4%B8%BB%E7%BC%96%20%E7%AC%AC%E4%B8%80%E7%89%88.pdf?sign=7ae16250a0069a0705cf266a570519a6&t=1606349935",
      header: {},
      success: function(res) {
          var filePath = res.tempFilePath;
          console.log(filePath);
          wx.openDocument({
              filePath: filePath,
              success: function(res) {
                  console.log('打开文档成功')
              },
              fail: function(res) {
                  console.log(res);
              },
              complete: function(res) {
                  console.log(res);
              }
          })
      },
      fail: function(res) {
          console.log('文件下载失败');
      },
      complete: function(res) {},
  })
},//1end
  download2:
// 下载文件并预览

function(e) {
  console.log(e);
 

  wx.downloadFile({
      url: "https://7465-test-8gtn9z056019b680-1303839203.tcb.qcloud.la/%E3%80%8A%E5%A4%A7%E5%AD%A6%E7%89%A9%E7%90%86%E5%AD%A6%20%E4%B8%8B%E3%80%8B%E5%90%B4%E7%99%BE%E8%AF%97%E4%B8%BB%E7%BC%96%20%E7%AC%AC%E4%B8%80%E7%89%88.pdf?sign=95f5ecfa98bf714457fdf144df696e8e&t=1606350606",
      header: {},
      success: function(res) {
          var filePath = res.tempFilePath;
          console.log(filePath);
          wx.openDocument({
              filePath: filePath,
              success: function(res) {
                  console.log('打开文档成功')
              },
              fail: function(res) {
                  console.log(res);
              },
              complete: function(res) {
                  console.log(res);
              }
          })
      },
      fail: function(res) {
          console.log('文件下载失败');
      },
      complete: function(res) {},
  })
},//1end
  download3:
  // 下载文件并预览

 function(e) {
  console.log(e);
 

  wx.downloadFile({
      url: "https://7465-test-8gtn9z056019b680-1303839203.tcb.qcloud.la/%E3%80%8A%E5%A4%A7%E5%AD%A6%E7%89%A9%E7%90%86%E5%AD%A6%20%E4%B8%AD%E3%80%8B%E5%90%B4%E7%99%BE%E8%AF%97%E4%B8%BB%E7%BC%96%20%E7%AC%AC%E4%B8%80%E7%89%88.pdf?sign=9f08b7564be80eeaf7af47f5e5e84756&t=1606350648",
      header: {},
      success: function(res) {
          var filePath = res.tempFilePath;
          console.log(filePath);
          wx.openDocument({
              filePath: filePath,
              success: function(res) {
                  console.log('打开文档成功')
              },
              fail: function(res) {
                  console.log(res);
              },
              complete: function(res) {
                  console.log(res);
              }
          })
      },
      fail: function(res) {
          console.log('文件下载失败');
      },
      complete: function(res) {},
  })
},//1end
  download4:
  // 下载文件并预览

 function(e) {
  console.log(e);
 

  wx.downloadFile({
      url: "https://7465-test-8gtn9z056019b680-1303839203.tcb.qcloud.la/%E5%B7%A5%E7%A7%91%E6%95%B0%E5%AD%A6%E5%88%86%E6%9E%90%E5%9F%BA%E7%A1%80%20%E4%B8%8A%E5%86%8C-%E9%A9%AC%E7%9F%A5%E6%81%A9%E7%AD%89%E4%B8%BB%E7%BC%96-%E9%AB%98%E7%AD%89%E6%95%99%E8%82%B2%E5%87%BA%E7%89%88%E7%A4%BE-1998.pdf?sign=1b1af3dedc024e5d28fba640d51a9dba&t=1606350691",
      header: {},
      success: function(res) {
          var filePath = res.tempFilePath;
          console.log(filePath);
          wx.openDocument({
              filePath: filePath,
              success: function(res) {
                  console.log('打开文档成功')
              },
              fail: function(res) {
                  console.log(res);
              },
              complete: function(res) {
                  console.log(res);
              }
          })
      },
      fail: function(res) {
          console.log('文件下载失败');
      },
      complete: function(res) {},
  })
},//1end
  download5:
  // 下载文件并预览

 function(e) {
  console.log(e);
 

  wx.downloadFile({
      url: "https://7465-test-8gtn9z056019b680-1303839203.tcb.qcloud.la/%E5%B7%A5%E7%A7%91%E6%95%B0%E5%AD%A6%E5%88%86%E6%9E%90%E5%9F%BA%E7%A1%80%20%E4%B8%8B%E5%86%8C-%E9%A9%AC%E7%9F%A5%E6%81%A9%E7%AD%89%E4%B8%BB%E7%BC%96-%E9%AB%98%E7%AD%89%E6%95%99%E8%82%B2%E5%87%BA%E7%89%88%E7%A4%BE-1998.pdf?sign=5a56741636485414d3f5edf5f21ff949&t=1606350733",
      header: {},
      success: function(res) {
          var filePath = res.tempFilePath;
          console.log(filePath);
          wx.openDocument({
              filePath: filePath,
              success: function(res) {
                  console.log('打开文档成功')
              },
              fail: function(res) {
                  console.log(res);
              },
              complete: function(res) {
                  console.log(res);
              }
          })
      },
      fail: function(res) {
          console.log('文件下载失败');
      },
      complete: function(res) {},
  })
},//1end
  download6:
  // 下载文件并预览

 function(e) {
  console.log(e);
 

  wx.downloadFile({
      url: "https://7465-test-8gtn9z056019b680-1303839203.tcb.qcloud.la/%E9%AB%98%E7%AD%89%E6%95%B0%E5%AD%A6%20%20%E5%8C%97%E9%82%AE%E7%AC%AC2%E7%89%88%20%E4%B8%8A.pdf?sign=eb814fd70a9a7396ddfa5e1a5360bb31&t=1606350760",
      header: {},
      success: function(res) {
          var filePath = res.tempFilePath;
          console.log(filePath);
          wx.openDocument({
              filePath: filePath,
              success: function(res) {
                  console.log('打开文档成功')
              },
              fail: function(res) {
                  console.log(res);
              },
              complete: function(res) {
                  console.log(res);
              }
          })
      },
      fail: function(res) {
          console.log('文件下载失败');
      },
      complete: function(res) {},
  })
},//1end
  download7:

 function(e) 
 {
  console.log(e);
 

  wx.downloadFile
 ({
      url: "https://7465-test-8gtn9z056019b680-1303839203.tcb.qcloud.la/%E9%AB%98%E7%AD%89%E6%95%B0%E5%AD%A6%20%20%E5%8C%97%E9%82%AE%E7%AC%AC2%E7%89%88%20%E4%B8%8B.pdf?sign=0b827971e0ce500e27a94befb3087645&t=1606350806",
      header: {},
      success: function(res) {
          var filePath = res.tempFilePath;
          console.log(filePath);
          wx.openDocument({
              filePath: filePath,
              success: function(res) {
                  console.log('打开文档成功')
              },
              fail: function(res) {
                  console.log(res);
              },
              complete: function(res) {
                  console.log(res);
              }
          })
      },
      fail: function(res) {
          console.log('文件下载失败');
      },
      complete: function(res) {},
  })
}
})