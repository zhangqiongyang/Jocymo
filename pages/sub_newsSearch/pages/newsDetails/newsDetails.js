// pages/sub_newsSearch/pages/newsDetails/newsDetails.js

import {
  HTTP
} from '../../../../utils/http-p.js'
let http = new HTTP()

import {
  config
} from '../../../../config.js'

const myaudio = wx.createInnerAudioContext();
var WxParse = require('../../../../wxParse/wxParse.js');


Page({

  /**
   * 页面的初始数据
   */
  data: {
    isHaveVideo: false,
    isHaveAudio: false,
    isplay:false,
    isBuy:true,
    guestbookinfo: []
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function(options) {
    console.log(options)
    this.setData({
      news_id: options.id
    })

    //获取新闻信息
    this.getNewsInfo()
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
  // 音频播放器
  //播放
  play: function() {
    myaudio.play();
    this.setData({
      isplay: true
    });
  },
  // 暂停
  pause: function() {
    myaudio.pause();
    this.setData({
      isplay: false
    });
  },
  // 播放完毕
  finish: function() {
    myaudio.stop();
    this.setData({
      isplay: false
    })
  },



  /**
   * 网络请求
   */

  //获取新闻信息
  getNewsInfo() {
    http.request({
        url: config.API_NEWSINFO,
        data: {
          news_id: this.data.news_id,
          login_id: wx.getStorageSync('login_id'),
          source: 'xcx'
        }
      })
      .then(res => {
        console.log('---------获取到新闻详情了---------')
        console.log(res)
        var that =this
        //media_type判断媒体类型
        //媒体类型  1音频 2视频 3既是音频又是视频 4不是音频也不是视频
        if (res.data.newsShowInfo.media_type == 1) {
          console.log('------音频---------')
          this.setData({
            isHaveAudio: true,
            minute: parseInt(res.data.newsShowInfo.audio_duration / 60),
            second: parseInt(res.data.newsShowInfo.audio_duration % 60)
          })
        }
        else if (res.data.newsShowInfo.media_type == 2) {
          console.log('------视频---------')
          this.setData({
            isHaveVideo: true
          })
        } else if (res.data.newsShowInfo.media_type == 3){
          console.log('------音频与视频---------')
          this.setData({
            isHaveAudio: true,
            isHaveVideo: true,
            minute: parseInt(res.data.newsShowInfo.audio_duration / 60),
            second: parseInt(res.data.newsShowInfo.audio_duration % 60)
          })
        } else if (res.data.newsShowInfo.media_type == 4){
          console.log('------无音视频---------')
        }
        this.setData({
          authorShowInfo: res.data.authorShowInfo,
          newsShowInfo: res.data.newsShowInfo
        })
        myaudio.src = res.data.newsShowInfo.audio_url;
        WxParse.wxParse('content', 'html', res.data.newsShowInfo.content, that, 0)
      })
  },

  //获取留言信息
  getMsg() {
    http.request({
        url: config.API_SELECTMSG,
        data: {
          data_id: this.data.news_id, //产品id/案例id/需求id/商家id/新闻id
          type_id: 6, //2产品/3案例/4需求/5商家/6新闻
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