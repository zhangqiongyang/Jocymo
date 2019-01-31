// pages/tabbar/case/case.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    indexpicinfo: [
      {
        pic_url: '/image/index_pic.png',
      },
      {
        pic_url: '/image/index_pic.png',
      },
      {
        pic_url: '/image/index_pic.png',
      },
      {
        pic_url: '/image/index_pic.png',
      },
    ], //轮播图
    caseList:[
      {
        case_id:1,
        backImg:'/image/index_pic.png',
        logo:'/image/case_logo.png',
        caseText:'金胜嘉谊150平室内装修'
      },
      {
        case_id: 2,
        backImg: '/image/index_pic.png',
        logo: '/image/case_logo.png',
        caseText: '金胜嘉谊150平室内装修'
      },
      {
        case_id: 3,
        backImg: '/image/index_pic.png',
        logo: '/image/case_logo.png',
        caseText: '金胜嘉谊150平室内装修'
      },
      {
        case_id: 4,
        backImg: '/image/index_pic.png',
        logo: '/image/case_logo.png',
        caseText: '金胜嘉谊150平室内装修'
      },
      {
        case_id: 5,
        backImg: '/image/index_pic.png',
        logo: '/image/case_logo.png',
        caseText: '金胜嘉谊150平室内装修'
      },
    ]
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {

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
  //跳转到案例详情
  jumpToCase() {
    wx.navigateTo({
      url: '/pages/sub_details/pages/caseDetails/caseDetails',
    })
  },
})