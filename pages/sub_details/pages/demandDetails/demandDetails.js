// pages/sub_details/pages/demandDetails/demandDetails.js


import {
  HTTP
} from '../../../../utils/http-p.js'
let http = new HTTP()

import {
  config
} from '../../../../config.js'

var app = getApp()


Page({

  /**
   * 页面的初始数据
   */
  data: {
    demand_id: 1, //需求id
    isSelected: false, //是否勾选免责声明
    isBuy: false, //是否弹出购买框
    demand_picsInfo: [], //轮播图
    demandShowInfo: [],
    guestbookinfo: [],
    platform: app.globalData.platform,
    isHavePhone: app.globalData.isHavePhone
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function(options) {
    this.setData({
      demand_id: options.id
    })
    // 获取需求详情
    this.getDemandInfo()


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

  //弹出购买窗
  toBuy() {
    this.setData({
      isBuy: true
    })
  },
  //选择免责声明
  selectStatement() {
    this.setData({
      isSelected: !this.data.isSelected
    })
  },
  //跳转到免责声明页面
  toDisclaimer() {
    wx.navigateTo({
      url: '/pages/sub_details/pages/disclaimer/disclaimer',
    })
  },
  //购买
  buy() {
    if (app.globalData.isHavePhone) {
      // 生成订单
      this.createOrder()
    } else {
      wx.showModal({
        title: '未绑定手机号',
        content: '请绑定手机号后再进行操作',
        success: res => {
          if (res.confirm) {
            console.log('用户点击确定')
            wx.navigateTo({
              url: '/pages/phone/phone',
            })
          } else if (res.cancel) {
            console.log('用户点击取消')
          }
        }
      })
    }

  },
  //取消
  cancelBuy() {
    this.setData({
      isBuy: false
    })
  },



  /**
   *网络请求
   */

  // 获取需求详情
  getDemandInfo() {
    http.request({
        url: config.API_DEMANDINFO,
        data: {
          source: 'xcx',
          show_type: 1, //1需求详情 2需求修改详情
          demand_id: this.data.demand_id,
          login_id: wx.getStorageSync('login_id')
        }
      })
      .then(res => {
        console.log('----------获取到需求详情了-----------')
        console.log(res)
        this.setData({
          demandShowInfo: res.data,
          'demandShowInfo.demand_budget': res.data.demand_budget.split(","),
          demand_picsInfo: res.data.demand_picsInfo,
          phone: res.data.merchant_mobile == '' ? res.data.merchant_mobile : res.data.mobile,
          is_buy: res.data.is_buy == '1' ? true : false
        })
      })
  },

  //获取留言信息
  getMsg() {
    http.request({
        url: config.API_SELECTMSG,
        data: {
          data_id: this.data.demand_id, //产品id/案例id/需求id/商家id/新闻id
          type_id: 4, //2产品/3案例/4需求/5商家/6新闻
        }
      })
      .then(res => {
        console.log('----------获取到留言了-----------')
        console.log(res)
        this.setData({
          guestbookinfo: res.data
        })
      })
  },



  // 生成订单
  createOrder() {
    http.request({
        url: config.API_CREATEORDER,
        data: {
          login_id: wx.getStorageSync('login_id'),
          data_id: this.data.demand_id,
          type_id: 4,
          order_name: this.data.demandShowInfo.demand_name,
          source: 'xcx',
          original_price: 9.9,
          order_price: 0.99,
        }
      })
      .then(res => {
        console.log('-----------成功生成订单了-----------')
        console.log(res)
        this.wxPay(res.data.nonceStr, res.data.package, res.data.paySign, res.data.signType, res.data.timeStamp)
      })
  },


  // 微信支付
  wxPay(nonceStr, package1, paySign, signType, timeStamp) {
    wx.requestPayment({
      timeStamp: timeStamp,
      nonceStr: nonceStr,
      package: package1,
      signType: signType,
      paySign: paySign,
      success: res => {
        console.log('--------微信支付成功----------')
        console.log(res)
        wx.showToast({
          title: '购买成功',
          icon: 'success',
          success:res=>{
            this.setData({
              isBuy: false,
              is_buy: true
            })
            wx.makePhoneCall({
              phoneNumber: this.data.phone
            })
          }
        })
        
      }
    })
  }

})