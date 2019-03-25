// pages/sub_details/pages/published/published.js

import {
  HTTP
} from '../../../../utils/http-p.js'
let http = new HTTP()

import {
  config
} from '../../../../config.js'

const util = require('../../../../utils/util.js');

Page({

  /**
   * 页面的初始数据
   */
  data: {
    deleteText: '删除该产品', //删除提示文本内容
    isDelete: false, //是否删除
    publishedTitleItem: 1, //已发布项， 1代表需求， 2代表产品， 3代表案例
    demandTitleItem: 1, //需求项，1 代表进行中，2代表已完成
    productList: [],
    caseList: [],
    demandList: [],
    demandListOver: []
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function(options) {
    // 获取已发布的需求
    this.getDemandRequest()
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

  //切换需求的项
  changeDemandTitle(event) {
    console.log(event)
    let demandTitleItem = event.currentTarget.dataset.demandtitle
    this.setData({
      demandTitleItem: demandTitleItem
    })
    console.log(this.data.demandTitleItem)
    // 获取已发布的需求
    this.getDemandRequest()
  },
  //切换已发布的项
  changepublishedTitle(event) {
    console.log(event)
    let publishedTitleItem = event.currentTarget.dataset.publishedtitle
    this.setData({
      publishedTitleItem: publishedTitleItem
    })
    console.log(this.data.publishedTitleItem)
    if (this.data.publishedTitleItem == 1) {
      // 获取已发布的需求
      this.getDemandRequest()
    } else {
      // 获取已发布的产品、案例
      this.getProductCaseRequest(publishedTitleItem)
    }

  },



  //删除产品或案例
  deleteProductCase(event) {
    console.log(event)
    let type = event.currentTarget.dataset.id
    if (type == 'case') {
      this.setData({
        case_id: event.detail.id,
        isDelete: true
      })
    } else {
      this.setData({
        product_id: event.detail.id,
        isDelete: true
      })
    }

  },

  //删除
  deleteItem(event) {
    // 删除已发布的产品、案例
    this.deleteProductCaseRequest()

  },
  //取消
  cancelDelete() {
    this.setData({
      isDelete: false
    })
  },


  /**
   * 网络请求
   */


  // 获取已发布的需求
  getDemandRequest() {
    http.request({
        url: config.API_PUBLISHEDDEMAND,
        data: {
          source: 'xcx',
          login_id: wx.getStorageSync('login_id'),
          demand_status: this.data.demandTitleItem //1 进行中 2已完成
        }
      })
      .then(res => {
        console.log('-----------获取到需求信息了--------------')
        console.log(res)
        if (this.data.demandTitleItem == 1){
          this.setData({
            demandList: res.data
          })
        }else{
          this.setData({
            demandListOver: res.data
          })
        }
        

      })
  },


  // 获取已发布的产品、案例
  getProductCaseRequest(publishedTitleItem) {
    http.request({
        url: config.API_PUBLISHED,
        data: {
          source: 'xcx',
          login_id: wx.getStorageSync('login_id'),
          type_id: publishedTitleItem ? publishedTitleItem : this.data.publishedTitleItem //类型id 2产品 3案例 4需求
        }
      })
      .then(res => {
        console.log('-----------获取到产品或案例信息了--------------')
        console.log(res)
        if (this.data.publishedTitleItem == 2) {
          this.setData({
            productList: res.data
          })
        } else if (this.data.publishedTitleItem == 3) {
          this.setData({
            caseList: res.data
          })
        }

      })
  },


  // 删除已发布的产品、案例
  deleteProductCaseRequest(publishedTitleItem) {
    // console.log(,this.data.product_id)
    http.request({
        url: config.API_DELETEPUBLISHED,
        data: {
          data_id: this.data.publishedTitleItem == 2 ? this.data.product_id : this.data.case_id,
          type_id: publishedTitleItem ? publishedTitleItem : this.data.publishedTitleItem //类型id 2产品 3案例 4需求
        }
      })
      .then(res => {
        console.log('-----------删除成功--------------')
        console.log(res)

        this.setData({
          isDelete: false
        })

        util._showToast('删除成功')

        // 获取已发布的产品、案例
        this.getProductCaseRequest()
      })
  },

})