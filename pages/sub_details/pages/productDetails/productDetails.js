// pages/sub_details/pages/productDetails/productDetails.js

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
    product_id: 1,
    productItem: 1, //产品描述项 1代表产品描述，2代表产品参数
    guestbookinfo: []
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function(options) {
    console.log(options)
    this.setData({
      product_id: options.id
    })
    // 获取案例详情
    this.getProductInfo()
    //获取留言信息
    this.getMsg()
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

  //改变产品描述项
  changeProductItem(event) {
    // console.log(event)
    let productItem = event.currentTarget.dataset.productitem
    console.log(productItem)
    this.setData({
      productItem: productItem
    })
  },


  /**
   * 网络请求
   */

  // 获取产品详情
  getProductInfo() {
    http.request({
        url: config.API_PRODUCTINFO,
        data: {
          product_id: this.data.product_id,
          source: 'xcx',
          login_id: wx.getStorageSync('login_id'),
          show_type: 1, //1产品详情 2修改产品详情
        }
      })
      .then(res => {
        console.log('----------获取到产品详情了-----------')
        console.log(res)
        this.setData({
          product_pic: res.data.product_pic,
          product_desc: res.data.product_desc,
          product_name: res.data.product_name,
          product_other: res.data.product_other,
          product_price: res.data.product_price,
          product_type: res.data.product_type,

          merchantInfo: {
            logo_url: res.data.logo_url,
            merchant_address: res.data.merchant_address,
            merchant_mobile: res.data.merchant_mobile,
            merchant_name: res.data.merchant_name,
            merchant_operation: res.data.merchant_operation,
          }
        })
      })
  },


  //获取留言信息
  getMsg() {
    http.request({
        url: config.API_SELECTMSG,
        data: {
          data_id: this.data.product_id, //产品id/案例id/需求id/商家id/新闻id
          type_id: 2, //2产品/3案例/4需求/5商家/6新闻
        }
      })
      .then(res => {
        console.log('----------获取到留言了-----------')
        console.log(res)
        this.setData({
          guestbookinfo: res.data
        })
      })
  }
})