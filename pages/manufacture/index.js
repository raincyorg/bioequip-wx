// pages/brand/index.js
var WxParse = require('../../wxParse/wxParse.js');

var app = getApp();
var manuData = require('../../utils/manu_info.js');
var saleList = manuData.manuData().sales_list;
var PrudList = manuData.manuData().Prud_list;
var lectureList = manuData.manuData().lecture_list;
var movieList = manuData.manuData().movie_list;
var employList = manuData.manuData().employ_list;
var num = manuData.manuData().manu_num;

var categoryData = require('../../utils/product_class.js');
var instrumentList = categoryData.Data().instrument_list;
var serviceList = categoryData.Data().service_list;
var totalList =instrumentList.concat(serviceList);//全部大分类对象
var totaldetailList = [];//全部的小分类对象列表
var curdetailIdList = [];//当前厂商的产品小分类id列表
var curdetailList = [];//当前厂商产品小分类对象列表

var H=0;
var shown='false';
var intro='false';
//数据展示域
Page({
  data: {
    manuUrl: manuData.manuData().manu_logo,
    manuName: manuData.manuData().manu_title,
    manuNav:['产品','促销','讲座','招聘','视频'],
    prudCategory:[],
    curIndex:0,
    viewHeight: 0,
    shownlist:PrudList,
    showCategory:0,
    showManuInfo:0
  },
  //页面初始化
  onLoad:function(){
    var that = this;
    //加载产品分类
    for (var i = 0; i < totalList.length; i++) {
      totaldetailList = totaldetailList.concat(totalList[i].lt_class);
    }
    for (var j = 0; j < PrudList.length; j++) {
      if (curdetailIdList.indexOf(PrudList[j].category) == -1) {
        curdetailIdList.push(PrudList[j].category);
        for (var k = 0; k < totaldetailList.length; k++) {
          if (PrudList[j].category == totaldetailList[k].id) {
            curdetailList.push(totaldetailList[k]);
          }
        }
      }
    }
    //加载厂商介绍html
    var article = manuData.manuData().manu_intro;
    WxParse.wxParse('article', 'html', article, that, 5);

    // 获取系统信息
    wx.getSystemInfo({
      success: function (res) {
        H = res.windowHeight - 190;
        that.setData({ viewHeight: H });
      }
    })
  },
  // 点击title
  chooseTitle: function (e) {
    var thisIndex = e.target.dataset.index;
    switch (thisIndex) {
      case 0: this.setData({ curIndex: thisIndex, shownlist: PrudList }); break;
      case 1: this.setData({ curIndex: thisIndex,  shownlist: saleList }); break;
      case 2: this.setData({ curIndex: thisIndex, shownlist: lectureList }); break;
      case 3: this.setData({ curIndex: thisIndex, shownlist: employList }); break;
      case 4: this.setData({ curIndex: thisIndex,  shownlist: movieList }); break;
    }
  },
  //显示产品分类
  showCategory:function(){
    if(shown=='false'){
      shown='true';
      this.setData({ prudCategory:curdetailList,showCategory:1});
    }else if(shown=='true'){
      shown='false';
      this.setData({ showCategory:0});
    }
  },
  // 点击产品分类
  chooseCategory:function(e){
    var thisId = e.currentTarget.dataset.id;
    var smallCategory=[];
    for(var i=0;i<PrudList.length;i++){
      if(thisId==PrudList[i].category){
        smallCategory.push(PrudList[i]);
      }
    }
    this.setData({ shownlist: smallCategory, curIndex: 0});
  },
  // 点击电话
  calling: function () {
    wx.makePhoneCall({
      phoneNumber: num
    })
  },
  //点击厂商信息
  showManuInfo:function(){
    if (intro == 'false') {
      intro = 'true';
      this.setData({ prudCategory: curdetailList, showManuInfo: 1 });
    } else if (intro == 'true') {
      intro = 'false';
      this.setData({ showManuInfo: 0 });
    }
  },
  onShareAppMessage: function () {
    return {
      title: manuData.manuData().manu_title,
      imageUrl: manuData.manuData().manu_logo,
      path: '/page/user?id=123'
    }
  }




 
})