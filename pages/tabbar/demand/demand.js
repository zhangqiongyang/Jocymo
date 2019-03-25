// pages/tabbar/demand/demand.js


import {
  HTTP
} from '../../../utils/http-p.js'
let http = new HTTP()

import {
  config
} from '../../../config.js'

Page({

  /**
   * 页面的初始数据
   */
  data: {
    order_sort: 1, //1综合排序(暂不可用) 2评论排序 3发布时间排序
    address: '', //地区
    bannerPicsInfo: [], //轮播图
    demandInfo: [] //需求列表
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function(options) {
    // 查询需求轮播图信息
    this.getSwiperInfo()
    // 查询全部需求信息
    this.getDemandInfo()
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
    // 查询全部案例信息
    this.getDemandInfo()
  },

  // 改变地区
  changeAddress(event) {
    console.log(event)
    const address = event.detail.address

    this.setData({
      address: address
    })

    // 查询全部需求信息
    this.getDemandInfo()

  },


  /**
   * 网络请求
   */

  // 查询需求轮播图信息
  getSwiperInfo() {
    http.request({
        url: config.API_SELECTSWIPERINFO,
        data: {
          type_id: 4, //type_id  参数值  2产品 3案例 4需求
        }
      })
      .then(res => {
        console.log('--------获取到需求轮播图信息了-----------')
        console.log(res)
        this.setData({
          bannerPicsInfo: res.data
        })
      })
  },


  // 查询全部需求信息
  getDemandInfo() {
    http.request({
        url: config.API_DEMANDLIST,
        data: {
          // source: 'xcx',
          // show: 'all',
          order_sort: this.data.order_sort, //1综合排序(暂不可用) 2评论排序 3发布时间排序
          show_type: 1, //1倒序 2正序
          address: this.data.address, //按地区筛选，不选则不传
        }
      })
      .then(res => {
        console.log('--------获取到全部需求信息了-----------')
        console.log(res)

        for (let i = 0; i < res.data.length; i++) {
          if (res.data[i].demand_budget == '面议') {
            // this.setData({
            //   isDiscussPersonally: true
            // })
          } else {
            res.data[i].demand_budget = res.data[i].demand_budget.split(",")
          }
        }
        this.setData({
          demandInfo: res.data
        })
      })
  },

})