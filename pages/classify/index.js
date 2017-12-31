var app = getApp();
var classData = require('../../utils/product_class.js');
var productData =require('../../utils/product_list.js');
var brandData = require('../../utils/brand_list.js');

var classList = classData.Data().instrument_list;
var productList = productData.listData();
var brandList= brandData.listData();
var curId='',curIndex=0;

Page({
  data: {
    navLeftItems: [],
    navRightItems: [],
    child_class:[],
    hotbrand:[],
    mainCheckId:'',
    curId: '',
    curIndex: 0,
    single: '',
    all: '',
    thisItem:'',
  },
  onLoad: function () {
    this.setData({
      navLeftItems: classList,
      navRightItems: classList[0].lt_class,
      child_class: [],
      mainCheckId:'c1',
      curId: '1',
      curIndex: 0,
      single: false,
      all: true,
      thisItem: classList[0].lt_class[0]
    })

  },
  //切换右边子类导航
  showRightNav: function (e) {
    curIndex = e.target.dataset.index;
    curId = e.target.dataset.id;
    console.log(curIndex);
    console.log(curId);
    this.setData({
      navRightItems: classList[curIndex].lt_class,
      curId: curId,
      curIndex:curIndex,
      single: false,
      all: true,
      thisItem: classList[curIndex].lt_class[0]
    })
  },
  //更多分类
  findMore:function (e){
      this.setData({
        all:true,
        single:false
      })
  },
  //选择分类
  chooseClass:function(e){
    var i=e.currentTarget.dataset.index;
    var j=e.currentTarget.dataset.id;
    console.log(j);
    console.log(i);
    this.setData({
      all:false,
      single:true,
      thisItem: classList[curIndex].lt_class[i],
      child_class: productList[j],
      hotbrand:brandList[j]
    })
  },
  //选择仪器或服务
  shiftIt:function(e){
    if(e.target.dataset.id =='c1'){
      classList = classData.Data().instrument_list;
      this.setData({
        navLeftItems: classList,
        navRightItems: classList[0].lt_class,
        curId: '1',
        curIndex: 0,
        mainCheckId: 'c1',
        single: false,
        all: true,
        thisItem: classList[0].lt_class[0]
      })
    }else if(e.target.dataset.id == 'c2'){
      classList = classData.Data().service_list;
      this.setData({
        navLeftItems: classList,
        navRightItems: classList[0].lt_class,
        curId: '31',
        curIndex: 0,
        mainCheckId: 'c2',
        single: false,
        all: true,
        thisItem: classList[0].lt_class[0]
      })
    }
    
  }

})