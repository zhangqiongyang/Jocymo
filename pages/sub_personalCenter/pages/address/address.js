// pages/sub_personalCenter/pages/address/address.js

var app = getApp();

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
    placeholder_name: '收货人',
    placeholder_phone: '手机号码',
    placeholder_address: '详细地址',
    recevinginfo: '',
    isNotName: false,
    isNotPhone: false,
    isNotAddress: false,
    windowHeight: app.globalData.windowHeight + 48,
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    //查询收货信息
    this.getAddress()
  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function () {

  },

  /**
   * 生命周期函数--监听页面显示
   */
  onShow: function () {

  },

  /**
   * 生命周期函数--监听页面隐藏
   */
  onHide: function () {

  },

  /**
   * 生命周期函数--监听页面卸载
   */
  onUnload: function () {

  },

  /**
   * 页面相关事件处理函数--监听用户下拉动作
   */
  onPullDownRefresh: function () {

  },

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom: function () {

  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function () {

  },



  /**
   * 方法
   */
  // 更改收货人姓名
  writeNameFinish(event) {
    console.log(event)
    var value = event.detail.value;
    if (value == '') {
      console.log('-------------值为空-------------')
      this.setData({
        isNotName: true
      })
    } else {
      console.log('-------------值不为空-------------')
      this.setData({
        isNotName: false,
        consignee: value,
        placeholder_name: '请输入收货人姓名'
      })
    }
    console.log('------------修改的名字-------------')
    console.log(this.data.consignee)
  },
  // 更改收货人手机号
  writePhoneFinish(event) {
    console.log(event)
    var value = event.detail.value;
    if (value == '') {
      console.log('-------------值为空-------------')
      this.setData({
        isNotPhone: true
      })
    } else {
      console.log('-------------值不为空-------------')
      this.setData({
        isNotPhone: false,
        telephone: value,
        placeholder_phone: '请输入手机号码'
      })
    }
  },
  // 更改收货人收货地址
  writeAddressFinish(event) {
    console.log(event)
    var value = event.detail.value;
    if (value == '') {
      console.log('-------------值为空-------------')
      this.setData({
        isNotAddress: true
      })
    } else {
      console.log('-------------值不为空-------------')
      this.setData({
        isNotAddress: false,
        address: value,
        placeholder_address: '请输入详细地址'
      })
    }
  },
  // 提交表单
  submit() {
    var that = this;
    if (!util.isEmpty(this.data.consignee) && !util.isEmpty(this.data.telephone) && !util.isEmpty(this.data.address)) {
      console.log('----------上传收货信息-------------')


      //保存收货信息
      this.saveAddress()

     
    } else if (util.isEmpty(this.data.consignee)) {
      this.setData({
        isNotName: true
      })
    } else if (util.isEmpty(this.data.telephone)) {
      this.setData({
        isNotPhone: true
      })
    } else if (util.isEmpty(this.data.address)) {
      this.setData({
        isNotAddress: true
      })
    }
  },

  /**
   * 网络请求
   */

  //查询收货信息
  getAddress(){
    http.request({
      url: config.API_SELECTADDRESS,
      data:{
        source:'xcx',
        login_id:wx.getStorageSync('login_id')
      }
    })
    .then(res=>{
      console.log('--------查询到收货信息了---------')
      console.log(res)
      this.setData({
        consignee: res.data.consignee,
        address: res.data.receving_address,
        telephone: res.data.telephone
      })
    })
  },

  //保存收货信息
  saveAddress(){
    http.request({
      url: config.API_SAVEADDRESS,
      data: {
        source: 'xcx',
        login_id: wx.getStorageSync('login_id'),
        consignee: this.data.consignee,
        telephone: this.data.telephone,
        receving_address: this.data.address
      }
    })
      .then(res => {
        console.log('--------保存收货信息---------')
        console.log(res)
        wx.showToast({
          title: '保存成功',
          success: function (res) { },
        })

        wx.navigateBack({
          delta: 1,
        })

      })
  }

})