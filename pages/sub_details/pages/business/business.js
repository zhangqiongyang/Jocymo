// pages/sub_details/pages/business/business.js

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
    order_sort: 1, //1综合 2评论 3时间
    region: '',
    indexpicinfo: [], //轮播图
    businessList: []
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function(options) {
    // 查询商家轮播图信息
    this.getSwiperInfo()
    if (options.id) {
      this.setData({
        firstType_id: options.id
      })
      //根据一级分类查询商家
      this.getFirstTypeBussinessInfo()
    } else {
      // 查询全部商家信息
      this.getBussinessInfo()
    }

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
  //跳转到厂商详情
  jumpToBusiness(event) {
    console.log(event)
    let id = event.currentTarget.dataset.id
    wx.navigateTo({
      url: '/pages/sub_details/pages/businessDetails/businessDetails?id=' + id,
    })
  },

  // 改变排序方式
  changeOrder(event) {
    console.log(event)
    const order_sort = event.detail.order_sort
    this.setData({
      order_sort: order_sort
    })

    if (this.data.firstType_id) {
      //根据一级分类查询商家
      getFirstTypeBussinessInfo()
    } else {
      // 查询全部商家信息
      this.getBussinessInfo()
    }

  },

  // 改变地区
  changeAddress(event) {
    console.log(event)
    const address = event.detail.address

    this.setData({
      address: address
    })
    if (this.data.firstType_id) {
      //根据一级分类查询商家
      getFirstTypeBussinessInfo()
    } else {
      // 查询全部商家信息
      this.getBussinessInfo()
    }
  },


  /**
   * 网络请求
   */

  // 查询商家轮播图信息
  getSwiperInfo() {
    http.request({
        url: config.API_SELECTSWIPERINFO,
        data: {
          type_id: 5, //type_id  参数值  2产品 3案例 4需求 5商家 6新闻
        }
      })
      .then(res => {
        console.log('--------获取到商家轮播图信息了-----------')
        console.log(res)
        this.setData({
          bannerPicsInfo: res.data
        })
      })
  },


  //查询所有商家
  getBussinessInfo() {
    http.request({
        url: config.API_BUSSINESSLIST,
        data: {
          source: 'xcx',
          order_sort: this.data.order_sort, //1综合 2评论 3时间
          address: this.data.region
        }
      })
      .then(res => {
        console.log('---------获取到所有商家的信息了--------')
        console.log(res)
        this.setData({
          businessList: res.data
        })
      })
  },


  //根据一级分类查询商家
  getFirstTypeBussinessInfo() {
    http.request({
        url: config.API_FIRSTTYPEBUSSINESSLIST,
        data: {
          source: 'xcx',
          login_id: wx.getStorageSync('login_id'),
          firstType_id: this.data.firstType_id,
          order_sort: this.data.order_sort, //1综合 2评论 3时间
          address: this.data.region
        }
      })
      .then(res => {
        console.log('---------获取到所有商家的信息了--------')
        console.log(res)
        this.setData({
          businessList: res.data
        })
      })
  }

})