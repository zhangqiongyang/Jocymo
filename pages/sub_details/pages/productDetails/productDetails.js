// pages/sub_details/pages/productDetails/productDetails.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    productItem:1,//产品描述项 1代表产品描述，2代表产品参数
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
  //改变产品描述项
  changeProductItem(event){
    // console.log(event)
    let productItem = event.currentTarget.dataset.productitem
    console.log(productItem)
    this.setData({
      productItem: productItem
    })
  }
})