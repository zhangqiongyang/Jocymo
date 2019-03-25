// pages/tabbar/index/index.js

import {
  HTTP
} from '../../../utils/http-p.js'
let http = new HTTP()

import {
  config
} from '../../../config.js'

var app = getApp()
Page({

  /**
   * 页面的初始数据
   */
  data: {
    indexPicInfo: [], //轮播图
    newsinfo: [], //新闻列表
    firstTypeInfo: [], //厂商汇集
    caseInfo: [], //热案推荐
    productInfo: [], //优材推荐
    platform: app.globalData.platform, //设备信息
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function(options) {
    // 获取首页轮播图信息
    this.getIndexSwiperInfo()
    // 获取首页新闻信息接口
    this.getIndexNewsInfo()
    // 获取首页厂商信息
    this.getIndexBussinessInfo()
    // 获取首页案例信息接口
    this.getIndexCaseInfo()
    // 获取首页优材信息接口
    this.getIndexProductInfo()
  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function() {

  },

  /**
   * 生命周期函数--监听页面显示
   */
  onShow: function() {

  },

  /**
   * 生命周期函数--监听页面隐藏
   */
  onHide: function() {

  },

  /**
   * 生命周期函数--监听页面卸载
   */
  onUnload: function() {

  },

  /**
   * 页面相关事件处理函数--监听用户下拉动作
   */
  onPullDownRefresh: function() {

  },

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom: function() {

  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function() {

  },
  //方法
  //跳转到所有新闻
  jumpToAllNews() {
    wx.navigateTo({
      url: '/pages/sub_newsSearch/pages/allNews/allNews',
    })
  },
  //跳转到所有厂商
  jumpToAllBusiness() {
    wx.navigateTo({
      url: '/pages/sub_details/pages/business/business',
    })
  },
  //跳转到所有案例
  jumpToAllCase() {
    wx.switchTab({
      url: '/pages/tabbar/case/case',
    })
  },
  //跳转到所有产品
  jumpToAllProduct() {
    wx.navigateTo({
      url: '/pages/sub_details/pages/product/product',
    })
  },
  //跳转到新闻详情
  jumpToNews(event) {
    console.log(event)
    const news_id = event.currentTarget.dataset.news_id
    wx.navigateTo({
      url: '/pages/sub_newsSearch/pages/newsDetails/newsDetails?id=' + news_id,
    })
  },
  //跳转到相应商家列表页面
  jumpToBusiness(event) {
    console.log(event)
    const id= event.currentTarget.dataset.id
    wx.navigateTo({
      url: '/pages/sub_details/pages/business/business?id='+id,
    })
  },


  // 网络请求

  // 获取首页轮播图信息接口
  getIndexSwiperInfo() {
    http.request({
        url: config.API_INDEXSWIPER,
      })
      .then(res => {
        console.log('------------获取到首页轮播图信息了------------')
        //kkkk()
        console.log(res)
        this.setData({
          indexPicInfo: res.data
        })
      })
      .catch(err => {
        console.log(err)
      })
  },

  // 获取首页新闻信息接口
  getIndexNewsInfo() {
    http.request({
        url: config.API_INDEXNEWS,
        data: {
          source: 'xcx',
          show: 'index'
        }
      })
      .then(res => {
        console.log('------------获取到首页新闻信息了------------')
        console.log(res)
        this.setData({
          newsinfo: res.data
        })
      })
      .catch(err => {
        console.log(err)
      })
  },

  // 获取首页厂商信息接口
  getIndexBussinessInfo() {
    http.request({
        url: config.API_INDEXFIRSTPRODUCTTYPE,
        data: {
          show: 'index'
        },
      })
      .then(res => {
        console.log('------------获取到首页厂商信息了------------')
        console.log(res)
        this.setData({
          firstTypeInfo: res.data
        })
      })
  },

  // 获取首页案例信息接口
  getIndexCaseInfo() {
    http.request({
        url: config.API_INDEXCASE,
        data: {
          source: 'xcx',
          show: 'index',
          login_id: wx.getStorageSync('login_id')
        },
      })
      .then(res => {
        console.log('------------获取到首页案例信息了------------')
        console.log(res)
        this.setData({
          caseInfo: res.data
        })
      })
  },

  // 获取首页优材信息接口
  getIndexProductInfo() {
    http.request({
        url: config.API_INDEXPRODUCT,
        data: {
          source: 'xcx',
          show: 'index',
          login_id: wx.getStorageSync('login_id')
        },
      })
      .then(res => {
        console.log('------------获取到首页优材信息了------------')
        console.log(res)
        this.setData({
          productInfo: res.data
        })
      })
  },
})