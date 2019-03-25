// pages/sub_details/pages/caseDetails/caseDetails.js

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
    case_id: 1, //案例id
    indexpicinfo: [], //轮播图
    guestbookinfo: []
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function(options) {
    this.setData({
      case_id:options.id
    })
    // 获取案例详情
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

  //

  /**
   * 网络请求
   */

  // 获取案例详情
  getDemandInfo() {
    http.request({
        url: config.API_CASEINFO,
        data: {
          case_id: this.data.case_id,
          source:'xcx',
          show_type: 1,//1案例详情 2修改案例详情
          login_id:wx.getStorageSync('login_id')
        }
      })
      .then(res => {
        console.log('----------获取到案例详情了-----------')
        console.log(res)
        this.setData({
          // banner_picsInfo: res.pic_url,
          caseShowInfo: res.caseShowInfo,
          merchantInfo: {
            logo_url: res.caseShowInfo.logo_url,
            merchant_address: res.caseShowInfo.merchant_address,
            merchant_mobile: res.caseShowInfo.merchant_mobile,
            merchant_name: res.caseShowInfo.merchant_name,
            merchant_operation: res.caseShowInfo.merchant_operation,
          }
        })
      })
  },


  //获取留言信息
  getMsg() {
    http.request({
      url: config.API_SELECTMSG,
      data: {
        data_id: this.data.case_id, //产品id/案例id/需求id/商家id/新闻id
        type_id: 3, //2产品/3案例/4需求/5商家/6新闻
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