// pages/tabbar/mine/mine.js

const app = getApp()

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
    userInfo: {}, //用户信息
    isHavePhone: '', //用户是否绑定手机号
    hasUserInfo: false, //是否登录
    canIUse: wx.canIUse('button.open-type.getUserInfo'), //可否使用
    windowHeight: app.globalData.windowHeight, //手机屏幕高度
    userType: 0, //用户类型，0代表个人，1代表商家
    publishEntry: 3, //发布项，个人只能发布需求，商家可全部发布。1代表发布产品，2代表发布案例，3代表发布需求
    isPublish: false, //是否打开发布浮层
    phone: ''
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function(options) {
   
    if (app.globalData.userInfo) {
      this.setData({
        userInfo: app.globalData.userInfo,
        hasUserInfo: true
      })
    } else if (this.data.canIUse) {
      // 由于 getUserInfo 是网络请求，可能会在 Page.onLoad 之后才返回
      // 所以此处加入 callback 以防止这种情况
      app.userInfoReadyCallback = res => {
        this.setData({
          userInfo: res.userInfo,
          hasUserInfo: true
        })
      }
    } else {
      // 在没有 open-type=getUserInfo 版本的兼容处理
      wx.getUserInfo({
        success: res => {
          app.globalData.userInfo = res.userInfo
          this.setData({
            userInfo: res.userInfo,
            hasUserInfo: true
          })
        }
      })
    }

    if (!app.globalData.isHavePhone) {
      // 查询用户是否绑定手机号
      this.checkIsHavePhone()
    }else{
      this.setData({
        isHavePhone:true
      })
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
    this.setData({
      isHavePhone: app.globalData.isHavePhone,
      phone: app.globalData.mobile
    })
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

  //登录
  getUserInfo: function(e) {
    console.log(e)
    if (e.detail.errMsg == "getUserInfo:fail auth deny") {
      this.setData({
        hasUserInfo: false
      })
    }else{
      app.globalData.userInfo = e.detail.userInfo
      this.setData({
        userInfo: e.detail.userInfo,
        hasUserInfo: true
      })
      //isHaveUnionId为false，代表不含unionId，需要解密
      if (!app.globalData.isHaveUnionId) {

        // 解密获取用户unionId
        this.getSecretInfo(e.detail.encryptedData, e.detail.iv)
      }
      // 查询用户是否绑定手机号
      this.checkIsHavePhone()


    }
    
  },

  //发布
  publish() {
    if (this.data.isHavePhone) {
      this.setData({
        isPublish: true
      })
      // 查询可发布项
      this.getCanPublish()
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

  //选择发布的类型
  selectPublishEntry(event) {
    // console.log(event);
    let publishentry = event.currentTarget.dataset.publishentry
    this.setData({
      publishEntry: publishentry
    })
    console.log(this.data.publishEntry)
  },

  //发布（跳转到相应发布页）
  submitPublish() {

    if (this.data.publishEntry == 1) {
      wx.navigateTo({
        url: '/pages/sub_personalCenter/pages/publishProduct/publishProduct',
        success: res => {
          this.setData({
            isPublish: false
          })
        },
      })
    } else if (this.data.publishEntry == 2) {
      wx.navigateTo({
        url: '/pages/sub_personalCenter/pages/publishCase/publishCase',
        success: res => {
          this.setData({
            isPublish: false
          })
        },
      })
    } else if (this.data.publishEntry == 3) {
      wx.navigateTo({
        url: '/pages/sub_personalCenter/pages/publishDemand/publishDemand',
        success: res => {
          this.setData({
            isPublish: false
          })
        },
      })
    }
  },

  //取消发布
  cancelPublish() {
    this.setData({
      isPublish: false
    })
  },

  // 跳转到手机号页面
  toPhone() {
    wx.navigateTo({
      url: '/pages/phone/phone',
    })
  },

  //跳转到已发布页面
  published() {
    wx.navigateTo({
      url: '/pages/sub_personalCenter/pages/published/published',
    })
  },

  //跳转到收货地址页面
  toAddress() {
    wx.navigateTo({
      url: '/pages/sub_personalCenter/pages/address/address',
    })
  },

  //跳转到商家认证页面
  toPublishBussiness() {
    if (this.data.isHavePhone) {
      wx.navigateTo({
        url: '/pages/sub_personalCenter/pages/publishBussiness/publishBussiness',
      })
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


  /**
   * 网络请求
   */

  // 查询可发布项
  getCanPublish() {
    http.request({
        url: config.API_SELECTCANPUBLISH,
        data: {
          source: 'xcx',
          login_id: wx.getStorageSync('login_id')
        }
      })
      .then(res => {
        console.log('----------获取到可发布项了----------')
        console.log(res)
        if (res.data.publishCase == 1) {
          this.setData({
            isBussiness: true
          })
        }
      })
  },



  // 解密获取用户unionId
  getSecretInfo(tencryptedData, iv) {
    http.request({
        url: config.API_FROMLOGINIDGETUNIONID,
        data: {
          login_id: wx.getStorageSync('login_id'),
          encryptedData: tencryptedData,
          iv: iv
        }
      })
      .then(res => {
        console.log('---------获取到用户加密信息----------')
        console.log(res)
      })

  },


  // 查询用户是否绑定手机号
  checkIsHavePhone() {
    http.request({
        url: config.API_CHECKPHONE,
        data: {
          login_id: wx.getStorageSync('login_id')
        }
      })
      .then(res => {
        console.log('---------已经绑定手机号-----------')
        console.log(res)
        this.setData({
          isHavePhone: true,
          phone: res.data
        })
        app.globalData.isHavePhone = true
        app.globalData.mobile = res.data
        console.log(app.globalData.isHavePhone)
      })
  }


})