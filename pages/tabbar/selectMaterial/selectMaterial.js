// pages/tabbar/selectMaterial/selectMaterial.js


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
    firstType_id: 1, // 一级分类id
    firstTypePicsInfo: [], //一级分类信息
    firstTypeInfo: [], //一级分类轮播图信息
    twoTypeInfo: [], //二级分类（包含三级分类）
    windowHeight: app.globalData.windowHeight-45
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function(options) {
    // 查询一级分类接口
    this.getFirstProductType()
    // 查询二级分类接口
    this.getTwoProductType(1)
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


  /**
   * 方法
   */

  // 更换一级菜单
  selectFirstClasify(event) {
    // console.log(event)
    let id = event.currentTarget.dataset.id
    this.setData({
      firstType_id: id
    })
    //查询二级分类
    this.getTwoProductType(id)
  },

  //跳转到产品列表页面
  jumpToProduct(event) {
    console.log(event)
    const id = event.currentTarget.dataset.id
    wx.navigateTo({
      url: '/pages/sub_details/pages/product/product?id=' + id,
    })
  },

  /**
   * 网络请求
   */

  // 查询一级分类接口
  getFirstProductType() {
    http.request({
        url: config.API_INDEXFIRSTPRODUCTTYPE,
        data: {
          show: 'all'
        }
      })
      .then(res => {
        console.log('-------------获取到一级分类信息了------------')
        console.log(res)
        this.setData({
          firstTypeInfo: res.data
        })
      })
  },

  // 查询二级分类接口
  getTwoProductType(id) {
    http.request({
        url: config.API_SELECTTWOPRODUCTTYPE,
        data: {
          firstType_id: id ? id : this.data.firstType_id
        }
      })
      .then(res => {
        console.log('-------------获取到二级分类信息了------------')
        console.log(res)
        this.setData({
          twoTypeInfo: res.data.twoTypeInfo,
          firstTypePicsInfo: res.data.firstTypePicsInfo
        })
      })
  }
})