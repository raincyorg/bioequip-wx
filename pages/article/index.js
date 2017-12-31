var app = getApp();
var article_data = require('../../utils/article_info.js');
var WxParse = require('../../wxParse/wxParse.js');

var thisArticle = {};
var saved = 'false';
var H =0;
var num='';

Page({
  data: {
    articleImg:'',
    articleTitle:'',
    manuId:'',
    viewHeight:H
  },
  onLoad: function (options) {
    var that =this;    
    // 获取高度
    wx.getSystemInfo({
      success: function (res) {
        H = res.windowHeight - 40;
        that.setData({viewHeight: H });
      }
    });
    // 获取参数
    if (options.kind) {
      thisArticle = article_data.articleData();
      that.setData({articleTitle:thisArticle.articleTitle,articleImg:thisArticle.pic});
    }
    // 电话
    num = thisArticle.num;
    // html格式转义
    var article = thisArticle.articleContent;
    WxParse.wxParse('article', 'html', article, that, 5);
  
  },
  chooseSave: function (e) {
    if (saved == 'false') {
      saved = "true";
      this.setData({
        saveClass: 1
      })
    } else if (saved == "true") {
      saved = "false";
      this.setData({
        saveClass: 0
      })
    }
  },
  calling: function () {
    wx.makePhoneCall({
      phoneNumber: num
    })
  },
  onShareAppMessage: function () {
    return {
      title: thisArticle.articleTitle,
      imageUrl: thisArticle.pic,
      path: '/page/user?id=123'
    }
  }

})


