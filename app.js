//app.js

import {
  HTTP
} from '/utils/http-p.js'
let http = new HTTP()

import {
  config
} from '/config.js'

const util = require('/utils/util.js');

App({
  onLaunch: function() {
    // 展示本地存储能力
    var logs = wx.getStorageSync('logs') || []
    logs.unshift(Date.now())
    wx.setStorageSync('logs', logs)
    var that = this


    wx.checkSession({
      success() {
        // wx.showModal({
        //   title: 'session_key',
        //   content: '未过期',
        // })
        if (util.isEmpty(wx.getStorageSync('login_id'))) {
          // 登录
          wx.login({
            success: res => {
              // 发送 res.code 到后台换取 openId, sessionKey, unionId
              console.log('-------wx.login res--------')
              console.log(res)
              if (res.code) {
                // 发起网络请求，通过code换取login_id
                http.request({
                    url: config.API_FROMCODEGETLOGINID,
                    data: {
                      code: res.code
                    }
                  })
                  .then(res => {
                    console.log('--------通过code换取的res---------')
                    console.log(res)
                    // wx.showModal({
                    //   title: 'getLogin',
                    //   content: res.data.login_id,
                    // })


                    wx.setStorageSync('login_id', res.data.login_id)
                    wx.setStorageSync('sessionkey_id', res.data.sessionkey_id)
                    console.log('---------login_id----------')
                    console.log(wx.getStorageSync('login_id'))
                    // res.getUnionid代表后台是否含有unionId
                    // 0代表未含有，需要走解密流程，1代表含有，不需要解密
                    if (res.data.getUnionid == '1') {
                      that.globalData.isHaveUnionId = true
                      console.log('-------已经含有unionId，不需要解密--------')
                      // wx.showModal({
                      //   title: '已经含有unionId',
                      //   content: '',
                      // })
                    } else {
                      // wx.showModal({
                      //   title: '不含有unionId',
                      //   content: '',
                      // })
                    }
                  })

              } else {
                console.log('登录失败！' + res.errMsg)
              }
            }
          })
        }
        console.log(wx.getStorageSync('login_id'))
        // session_key 未过期，并且在本生命周期一直有效
        console.log('----session_key 未过期，并且在本生命周期一直有效-----')
        console.log(wx.getStorageSync('sessionkey_id'))
        console.log(wx.getStorageSync('login_id'))
        http.request({
            url: config.API_CHECKLOGINIDISVALID,
            data: {
              login_id: wx.getStorageSync('login_id'),
              sessionkey_id: wx.getStorageSync('sessionkey_id'),
            }
          })
          .then(res => {
            console.log('-------------检测到login_id是否有效了-------------')
            console.log(res)
            //res.data代表unionId是否存在
            // 1 存在， 0 不存在
            // 1不需要再次解密，0需要解密
            if (res.data == 1) {
              that.globalData.isHaveUnionId = true
              console.log('-------已经含有unionId，不需要解密--------')
            }
            if (res.data.exist_mobile == 1) {
              that.globalData.isHavePhone = true
              that.globalData.mobile = res.data.mobile
            }

          })

      },
      fail() {
        console.log('----session_key 已过期，请重新登录-----')
        // wx.showModal({
        //   title: 'session_key 已过期',
        //   content: '',
        // })
        // 登录
        wx.login({
          success: res => {
            // 发送 res.code 到后台换取 openId, sessionKey, unionId
            console.log('-------wx.login res--------')
            console.log(res)
            if (res.code) {
              // 发起网络请求，通过code换取login_id
              http.request({
                  url: config.API_FROMCODEGETLOGINID,
                  data: {
                    code: res.code
                  }
                })
                .then(res => {
                  console.log('--------通过code换取的res---------')
                  console.log(res)
                  // wx.showModal({
                  //   title: 'getLogin',
                  //   content: res.data.login_id,
                  // })


                  wx.setStorageSync('login_id', res.data.login_id)
                  wx.setStorageSync('sessionkey_id', res.data.sessionkey_id)
                  console.log('---------login_id----------')
                  console.log(wx.getStorageSync('login_id'))
                  // res.getUnionid代表后台是否含有unionId
                  // 0代表未含有，需要走解密流程，1代表含有，不需要解密
                  if (res.data.getUnionid == '1') {
                    that.globalData.isHaveUnionId = true
                    console.log('-------已经含有unionId，不需要解密--------')
                    // wx.showModal({
                    //   title: '已经含有unionId',
                    //   content: '',
                    // })
                  } else {
                    // wx.showModal({
                    //   title: '不含有unionId',
                    //   content: '',
                    // })
                  }
                })

            } else {
              console.log('登录失败！' + res.errMsg)
            }
          }
        })
      }
    })
    // 获取用户信息
    wx.getSetting({
      success: res => {
        if (res.authSetting['scope.userInfo']) {
          // 已经授权，可以直接调用 getUserInfo 获取头像昵称，不会弹框
          wx.getUserInfo({
            success: res => {
              // 可以将 res 发送给后台解码出 unionId
              this.globalData.userInfo = res.userInfo
              console.log('---------wx.getUserInfo 的 res-----------')
              console.log(res)
              //isHaveUnionId为false，代表不含unionId，需要解密
              if (!this.globalData.isHaveUnionId) {
                // 解密获取用户unionId
                http.request({
                    url: config.API_FROMLOGINIDGETUNIONID,
                    data: {
                      login_id: wx.getStorageSync('login_id'),
                      encryptedData: res.encryptedData,
                      iv: res.iv
                    }
                  })
                  .then(res => {
                    console.log('---------获取到用户加密信息----------')
                    console.log(res)
                    // wx.showModal({
                    //   title: '解密le',
                    //   content: '',
                    // })
                  })

              }

              // 由于 getUserInfo 是网络请求，可能会在 Page.onLoad 之后才返回
              // 所以此处加入 callback 以防止这种情况
              if (this.userInfoReadyCallback) {
                this.userInfoReadyCallback(res)
              }
            }
          })
        }
      }
    })




    //获取手机屏幕高度
    wx.getSystemInfo({
      success: function(res) {
        console.log('---------系统信息-----------')
        console.log(res)
        that.globalData.windowHeight = res.windowHeight
        that.globalData.platform = res.platform
      }
    })
  },
  globalData: {
    isHavePhone: false, //用户是否绑定手机号
    isHaveUnionId: false, //是否含有unionId，是否需要走解密流程
    isGetUserInfo: false, //是否获取到用户信息了（是否授权）
    userInfo: null, //用户信息
    windowHeight: '', //手机屏幕高度
    platform: '', //设备信息
  }
})