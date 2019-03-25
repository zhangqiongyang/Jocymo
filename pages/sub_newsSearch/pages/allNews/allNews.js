// pages/sub_newsSearch/pages/allNews/allNews.js


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
    order: 0,
    authorShowInfo: {
      author_name: "招材猫",
      author_desc: '建谊集团建材网官方',
      author_id: 1,
      author_pic: '/image/index_pic.png'
    },
    newsInfo: [{
        article_id: "536",
        article_title: "测试",
        browsecount: 1,
        course_id: 0,
        media_type: 4,
        publish_time: "5小时前",
        publishtime: "2019-01-24 09:18:36"
      },
      {
        article_id: "536",
        article_title: "测试",
        browsecount: 1,
        course_id: 0,
        media_type: 4,
        publish_time: "5小时前",
        publishtime: "2019-01-24 09:18:36"
      },
      {
        article_id: "536",
        article_title: "测试",
        browsecount: 1,
        course_id: 0,
        media_type: 4,
        publish_time: "5小时前",
        publishtime: "2019-01-24 09:18:36"
      },
      {
        article_id: "536",
        article_title: "测试",
        browsecount: 1,
        course_id: 0,
        media_type: 4,
        publish_time: "5小时前",
        publishtime: "2019-01-24 09:18:36"
      },
    ]
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function(options) {
    //获取全部新闻信息
    this.getAllNews()
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
  //跳转到作者详情页
  jumpToAuthorDesc() {
    wx.navigateTo({
      url: '/pages/sub_newsSearch/pages/authorDetails/authorDetails',
    })
  },
  //跳转到新闻详情
  jumpToNews(event) {
    console.log(event)
    const news_id = event.currentTarget.dataset.news_id
    wx.navigateTo({
      url: '/pages/sub_newsSearch/pages/newsDetails/newsDetails?id=' + news_id,
    })
  },
  //切换正序倒序
  changeOrder(event) {
    console.log(event)
    let order = event.target.dataset.order
    this.setData({
      order: order
    })
    this.getAllNews()
  },



  /**
   * 网络请求
   */
  getAllNews() {
    http.request({
        url: config.API_ALLNEWSLIST,
        data: {
          source: 'xcx',
          show: 'all',
          order_sort: this.data.order
        }
      })
      .then(res => {
        console.log('-----------获取到全部新闻信息了---------')
        console.log(res)
        this.setData({
          authorShowInfo: res.data.authorShowInfo,
          newsInfo: res.data.newsInfo
        })
      })
  }
})