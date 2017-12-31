var app = getApp();
var data = require('../../utils/product_info.js');
var pdData=data.productData();
var saved='false';
var num='';

Page({
  data: {
    pdTitle:'',
    pdType:'',
    pdBrand:'',
    pdOrg:'',
    pdManu:'',
    imgUrls: [],
    saveClass:0
  },
  onLoad:function(){
    var that=this;
    num = pdData.num;
    that.setData({
      pdTitle: pdData.pdTitle,
      pdType: pdData.pdType,
      pdBrand: pdData.pdBrand,
      pdOrg: pdData.pdOrg,
      pdManu: pdData.pdManu,
      imgUrls: pdData.pdPic,
    });
  },
  chooseSave:function(e){
    if(saved=='false'){
      saved="true";
      this.setData({
        saveClass: 1
      })
    }else if(saved=="true"){
      saved="false";
      this.setData({
        saveClass: 0
      })
    }
  },
  calling:function(){
    wx.makePhoneCall({
      phoneNumber: num
    })
  },
  onShareAppMessage: function () {
    return {
      title: pdData.pdBrand + pdData.pdTitle + pdData.pdType,
      imageUrl: pdData.pdPic[0],
      path: '/page/user?id=123'
    }
  }
})