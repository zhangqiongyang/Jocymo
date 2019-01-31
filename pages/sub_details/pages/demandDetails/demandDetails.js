// pages/sub_details/pages/demandDetails/demandDetails.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    isSelected:false,//是否勾选免责声明
    isBuy:false,//是否弹出购买框
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
    guestbookinfo: [
      {
        article_id: "11",
        author_reply: null,
        content: "为啥看不见了呢？",
        countpraise: 0,
        guestbook_id: "133",
        guestbook_time: "2018-12-26 17:45:52",
        headimage: "https://wx.qlogo.cn/mmopen/vi_32/Q0j4TwGTfTKRFIZAykeug0nCgYFIb6A0G67pNBVviawlFr1icWDC3SuUIq4ng6tlrveag0iaicwxnzCZF52o5UVDBg/132",
        is_valid: null,
        nickname: "♞木有年輪",
        reply_time: null,
        source: "xcx",
        user_id: "4",
        wx_openid: null,
      },
      {
        article_id: "11",
        author_reply: null,
        content: "为啥看不见了呢？",
        countpraise: 0,
        guestbook_id: "133",
        guestbook_time: "2018-12-26 17:45:52",
        headimage: "https://wx.qlogo.cn/mmopen/vi_32/Q0j4TwGTfTKRFIZAykeug0nCgYFIb6A0G67pNBVviawlFr1icWDC3SuUIq4ng6tlrveag0iaicwxnzCZF52o5UVDBg/132",
        is_valid: null,
        nickname: "♞木有年輪",
        reply_time: null,
        source: "xcx",
        user_id: "4",
        wx_openid: null,
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

  //方法
  //弹出购买窗
  toBuy(){
    this.setData({
      isBuy: true
    })
  },
  //选择免责声明
  selectStatement(){
    this.setData({
      isSelected: !this.data.isSelected
    })
  },
  //跳转到免责声明页面
  toDisclaimer(){
    wx.navigateTo({
      url: '/pages/sub_details/pages/disclaimer/disclaimer',
    })
  },
  //购买
  buy() {
    
  },
  //取消
  cancelBuy() {
    this.setData({
      isBuy: false
    })
  },



  //网络请求
})