// pages/sub_newsSearch/pages/authorDetails/authorDetails.js

import {
  HTTP
} from '../../../../utils/http-p.js'
let http = new HTTP()

import {
  config
} from '../../../../config.js'


var WxParse = require('../../../../wxParse/wxParse.js');

Page({

  /**
   * 页面的初始数据
   */
  data: {
    author_id:1,
    authorinfo: {
      author_name:'招材猫',
      author_pic:'/image/index_pic.png',
      remark: '<span style="font - size: 14 px;"><strong>课程简介：</strong></span><br /><br /><span style="font - size: 12 px;"> 每天小建与你分享建筑产业知识讯息</span><br /><br /><strong><span style="font - size: 14 px;">课程亮点：</span></strong><br /><br /><span style="font - size: 12 px;">《谭小建》只在建谈平台播出，且完全免费。小建不是一个讲者，而是和每一个&ldquo;建谈&rdquo;用户一样的学习者。<br /><br />每天产生的知识讯息那么多，你根本看不过来，小建会把自己学习、归纳、整理的建筑产业相关的知识讯息筛选后分享给你。<br /><br />《谭小建》每天下午18：10更新，全年无休，用极致浓缩的知识音频，向你传递正在出现的新知识讯息。</span>'
    }
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function(options) {
    // 获取作者信息
    this.getAuthorinfo()
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

   /**
   * 网络请求
   */
  // 获取作者信息
  getAuthorinfo(){
    var that =this
    http.request({
      url: config.API_SELECTAUTHORINFO,
      data:{
        author_id:this.data.author_id
      }
    })
    .then(res=>{
      console.log('----------获取到作者信息了----------')
      console.log(res)
      this.setData({
        author_intro: res.data.author_intro,
        author_name: res.data.author_name,
        author_pic: res.data.author_pic,
      })
      WxParse.wxParse('content', 'html', res.data.remark, that, 0)
    })
  }
})