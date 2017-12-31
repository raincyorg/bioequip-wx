//index.js
//获取应用实例
var app = getApp();
var data = require('../../utils/index_info.js');
var saleList = data.mtData().sales_list;
var newPrudList = data.mtData().newPrud_list;
var exhibitionList = data.mtData().exhibition_list;
var lectureList = data.mtData().lecture_list;
var movieList = data.mtData().movie_list;
var employList = data.mtData().employ_list;

var touchDot=0;
var touchMove=0;
var H=0;

Page({
  data: {
    logoStyle:'',
    shownlist:newPrudList,
    viewHeight:0,
    showpanel:true,
    curTitleId:0,
    navlist: [
      { id: 0, title: '新品' }, 
      { id: 1, title: '促销' }, 
      { id: 2, title: '讲座' }, 
      { id: 3, title: '会展' }, 
      { id: 4, title: '招聘' }, 
      { id: 5, title: '视频' }]
  },
  onLoad:function(){
    var that=this;
    // 获取系统信息
    wx.getSystemInfo({
      success: function (res) {
        console.log(res);
        H = res.windowHeight-190;
        that.setData({viewHeight: H});
      }
    })
  },
  // 触摸开始事件 
  touchStart: function (e) {
    touchDot = e.touches[0].pageY; // 获取触摸时的原点 
  },
  // 触摸移动事件 
  touchMove: function (e) {
    touchMove = e.touches[0].pageY;
    console.log("touchMove:" + touchMove + " touchDot:" + touchDot + " diff:" + (touchMove - touchDot));
    var updistance =touchMove-touchDot;
    // 向上滑动  
    if (touchMove - touchDot <= -10) {
      if (touchMove - touchDot >= -40 && touchMove - touchDot<=-10){
       this.setData({ logoStyle: 'height:' + (101 + updistance) + 'px', viewHeight: H + 100 });
      }else if (touchMove - touchDot< -40){
        this.setData({ logoStyle: 'height: 0px', showpanel: false, viewHeight: H + 100 });
        }
    }
    // 向下滑动 
    if (touchMove - touchDot >= 40) {
      this.setData({ logoStyle:'height:101px',showpanel: true,viewHeight:H});
    }
  },
  // 点击title
  chooseTitle:function(e){
    var thisId = e.target.dataset.id;
    switch(thisId){
      case 0: this.setData({ curTitleId: thisId, shownlist: newPrudList});break;
      case 1: this.setData({ curTitleId: thisId, shownlist: saleList }); break;
      case 2: this.setData({ curTitleId: thisId, shownlist: lectureList }); break;
      case 3: this.setData({ curTitleId: thisId, shownlist: exhibitionList}); break;
      case 4: this.setData({ curTitleId: thisId, shownlist: employList }); break;
      case 5: this.setData({ curTitleId: thisId, shownlist: movieList }); break;
    }
  }
})