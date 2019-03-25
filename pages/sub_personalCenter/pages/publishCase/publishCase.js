// pages/sub_personalCenter/pages/publishCase/publishCase.js

import {
  HTTP
} from '../../../../utils/http-p.js'
let http = new HTTP()

import {
  config
} from '../../../../config.js'

const util = require('../../../../utils/util.js')

Page({

  /**
   * 页面的初始数据
   */
  data: {
    region: [],
    isSecrecy: false, //价格是否保密
    case_pic:[]
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function(options) {
    if (options.id){
      this.setData({
        case_id: options.id
      })

      // 获取案例信息
      this.getCaseInfo()
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

  //选择地区
  bindRegionChange(event) {
    console.log(event)
    this.setData({
      isRegion: true,
      region: event.detail.value
    })
  },

  //检测名称是否可用
  checkName(event) {
    console.log(event)
    const case_name = event.detail.value

    this.setData({
      case_name: case_name
    })

    //检测名称是否可用
    this.checkNameRequest()
  },

  // 选择价格是否保密
  checkSecrecy(event) {
    let isSecrecy = this.data.isSecrecy
    this.setData({
      isSecrecy: !this.data.isSecrecy,
      case_price: isSecrecy ? '' : '保密'
    })
    console.log(this.data.isSecrecy, this.data.case_price)
  },

  // 输入
  writeFinish(event) {
    console.log(event)
    const value = event.detail.value,
      id = event.currentTarget.dataset.id
    if (value == '') {
      console.log('-----值为空----')
    } else {
      if (id == 'desc') {
        this.setData({
          case_desc: value
        })
      } else if (id == 'name') {
        this.setData({
          case_name: value
        })
      } else if (id == 'price') {
        this.setData({
          case_price: value
        })
      }
      console.log(this.data)
    }
  },


  // 上传图片
  uploadImage(event) {
    console.log(event)
    const imageList = event.detail.imageList
   
    this.setData({
      case_pic: imageList
    })
    console.log(this.data.case_pic)
  },
  // 删除图片
  deleteImage(event) {
    console.log(event)
    const imageList = event.detail.imageList

    this.setData({
      product_pic: imageList
    })

    console.log(this.data.product_pic)

  },
  // 发布
  publish(event) {
    console.log(event)
    console.log(this.data)

    if (!util.isEmpty(this.data.case_name) && !util.isEmpty(this.data.case_price) && !util.isEmpty(this.data.case_desc) && !util.isEmpty(this.data.case_pic) && !util.isEmpty(this.data.region)) {
      console.log('-------数据都存在---------')
      //发布接口
      this.publishRequest()
    } else if (util.isEmpty(this.data.case_name)){
      console.log('-------案例名为空---------')
      util._showToast('案例名不能为空')
    } else if (util.isEmpty(this.data.case_price)) {
      console.log('-------案例价格为空---------')
      util._showToast('案例价格不能为空')
    } else if (util.isEmpty(this.data.case_desc)) {
      console.log('-------案例描述为空---------')
      util._showToast('案例描述不能为空')
    } else if (util.isEmpty(this.data.case_pic)) {
      console.log('-------案例图片为空---------')
      util._showToast('案例图片不能为空')
    } else if (util.isEmpty(this.data.region)) {
      console.log('-------案例地点为空---------')
      util._showToast('案例地点不能为空')
    }
 
  },



  // 修改
  change(event) {
    console.log(event)
    console.log(this.data)

    if (!util.isEmpty(this.data.case_name) && !util.isEmpty(this.data.case_price) && !util.isEmpty(this.data.case_desc) && !util.isEmpty(this.data.case_pic) && !util.isEmpty(this.data.region)) {
      console.log('-------数据都存在---------')
      //发布接口
      this.changeRequest()
    } else if (util.isEmpty(this.data.case_name)) {
      console.log('-------案例名为空---------')
      util._showToast('案例名不能为空')
    } else if (util.isEmpty(this.data.case_price)) {
      console.log('-------案例价格为空---------')
      util._showToast('案例价格不能为空')
    } else if (util.isEmpty(this.data.case_desc)) {
      console.log('-------案例描述为空---------')
      util._showToast('案例描述不能为空')
    } else if (util.isEmpty(this.data.case_pic)) {
      console.log('-------案例图片为空---------')
      util._showToast('案例图片不能为空')
    } else if (util.isEmpty(this.data.region)) {
      console.log('-------案例地点为空---------')
      util._showToast('案例地点不能为空')
    }


  },





  /**
   * 网络请求
   */


  //获取需求信息
  getCaseInfo() {
    http.request({
      url: config.API_CASEINFO,
      data: {
        case_id: this.data.case_id,
        login_id: wx.getStorageSync('login_id'),
        show_type: 2, //类型 1案例详情 2修改案例详情
        source: 'xcx'
      }
    })
      .then(res => {
        console.log('----------获取到案例信息了---------')
        console.log(res)
        this.setData({
          case_desc: res.caseShowInfo.case_desc,
          case_name: res.caseShowInfo.case_name,
          region: res.caseShowInfo.case_address.split(","),
          case_pic: res.caseShowInfo.pic_url,
          case_price: res.caseShowInfo.case_price,
          isRegion: true
        })
        if (res.caseShowInfo.case_price == '保密') {
          this.setData({
            isSecrecy: true
          })
        }


      })
  },


  //发布接口
  publishRequest() {
    http.request({
        url: config.API_PUBLISHCASE,
        data: {
          source: 'xcx',
          login_id:wx.getStorageSync('login_id'),
          case_name: this.data.case_name,
          case_address: this.data.region,
          case_price: this.data.case_price,
          case_desc: this.data.case_desc,
          case_pic: JSON.stringify(this.data.case_pic) 
        },
      })
      .then(res => {
        console.log('--------发布成功了-------')
        console.log(res)
        util._showToastSuccessBack('发布成功')
      })
  },

  //修改接口
  changeRequest() {
    http.request({
      url: config.API_CHANGECASE,
      data: {
        source:'xcx',
        case_id: this.data.case_id,
        login_id: wx.getStorageSync('login_id'),
        case_name: this.data.case_name,
        case_address: this.data.region,
        case_price: this.data.case_price,
        case_desc: this.data.case_desc,
        case_pic: JSON.stringify(this.data.case_pic) 
      },
    })
      .then(res => {
        console.log('--------修改成功了-------')
        console.log(res)
        util._showToastSuccessBack('修改成功')
      })
  },
})