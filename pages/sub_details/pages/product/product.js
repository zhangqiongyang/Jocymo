// pages/sub_details/pages/product/product.js


import {
  HTTP
} from '../../../../utils/http-p.js'
let http = new HTTP()

import {
  config
} from '../../../../config.js'

Page({

  /**
   * 页面的初始数据
   */
  data: {
    bannerPicsInfo: [], //轮播图
    productInfo: [],
    order_sort: 2, //1综合排序(暂不可用) 2评论排序 3发布时间排序
    address:'',
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function(options) {
    if (options.id) {
      this.setData({
        threeType_id: options.id
      })
      // 通过三级分类查询相应的产品
      this.getThreeTypeProductInfo()
    } else {
      // 查询全部产品信息
      this.getProductInfo()
    }


    // 查询产品轮播图信息
    this.getSwiperInfo()

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

  // 改变排序方式
  changeOrder(event) {
    console.log(event)
    const order_sort = event.detail.order_sort
    this.setData({
      order_sort: order_sort
    })
    if (this.data.threeType_id) {
      // 通过三级分类查询相应的产品
      this.getThreeTypeProductInfo()
    } else {
      // 查询全部产品信息
      this.getProductInfo()
    }
  },

  // 改变地区
  changeAddress(event) {
    console.log(event)
    const address = event.detail.address

    this.setData({
      address: address
    })

    if (this.data.threeType_id) {
      // 通过三级分类查询相应的产品
      this.getThreeTypeProductInfo()
    } else {
      // 查询全部产品信息
      this.getProductInfo()
    }
  },


  /**
   * 网络请求
   */

  // 查询产品轮播图信息
  getSwiperInfo() {
    http.request({
        url: config.API_SELECTSWIPERINFO,
        data: {
          type_id: 2, //type_id  参数值  2产品 3案例 4需求
        }
      })
      .then(res => {
        console.log('--------获取到产品轮播图信息了-----------')
        console.log(res)
        this.setData({
          bannerPicsInfo: res.data
        })
      })
  },

  // 查询全部产品信息
  getProductInfo() {
    http.request({
        url: config.API_PRODUCTLIST,
        data: {
          source: 'xcx',
          show: 'all',
          login_id: wx.getStorageSync('login_id'),
          order_sort: this.data.order_sort, //1综合排序(暂不可用) 2评论排序 3发布时间排序
          show_type: 1, //1倒序 2正序
          address: this.data.address, //按地区筛选，不选则不传
        }
      })
      .then(res => {
        console.log('--------获取到全部产品信息了-----------')
        console.log(res)
        this.setData({
          productInfo: res.data.productInfo
        })
      })
  },


  // 通过三级分类查询相应的产品
  getThreeTypeProductInfo() {
    http.request({
        url: config.API_THREETYPEPRODUCTLIST,
        data: {
          source: 'xcx',
          login_id: wx.getStorageSync('login_id'),
          order_sort: this.data.order_sort, //1综合排序(暂不可用) 2评论排序 3发布时间排序
          show_type: 1, //1倒序 2正序
          address: this.data.address, //按地区筛选，不选则不传
          threeType_id: this.data.threeType_id
        }
      })
      .then(res => {
        console.log('--------获取到产品信息了-----------')
        console.log(res)
        this.setData({
          productInfo: res.data.productInfo
        })
      })
  },

})