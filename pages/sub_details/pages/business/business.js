// pages/sub_details/pages/business/business.js
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
    businessList:[
      {
        id:1,
        logo:'/image/index_pic.png',
        name:'北京建谊智慧互联科技发展有限公司',
        con:'建材、板材、防水',
        imageBox: ['/image/index_pic.png', '/image/index_pic.png','/image/index_pic.png']
      },
      {
        id: 2,
        logo: '/image/index_pic.png',
        name: '北京建谊智慧互联科技发展有限公司',
        con: '建材、板材、防水',
        imageBox: ['/image/index_pic.png', '/image/index_pic.png', '/image/index_pic.png']
      },
      {
        id: 3,
        logo: '/image/index_pic.png',
        name: '北京建谊智慧互联科技发展有限公司',
        con: '建材、板材、防水',
        imageBox: ['/image/index_pic.png', '/image/index_pic.png', '/image/index_pic.png']
      },
      {
        id: 4,
        logo: '/image/index_pic.png',
        name: '北京建谊智慧互联科技发展有限公司',
        con: '建材、板材、防水',
        imageBox: ['/image/index_pic.png', '/image/index_pic.png', '/image/index_pic.png']
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
  //跳转到厂商详情
  jumpToBusiness() {
    wx.navigateTo({
      url: '/pages/sub_details/pages/businessDetails/businessDetails',
    })
  },
})