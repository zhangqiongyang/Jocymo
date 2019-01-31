// pages/sub_details/pages/businessDetails/businessDetails.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    infoItem: 1, //商品信息项，1代表简介，2代表资质，3代表产品，4代表案例，5代表需求
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
    businessInfo: {
      qualification: [
        '/image/index_pic.png',
        '/image/index_pic.png',
        '/image/index_pic.png',
        '/image/index_pic.png',
        '/image/index_pic.png'
      ]
    },
    optimalMaterialList: [{
        pic: '/image/index_youcai_pic.png',
        name: '集装式办公用房集装式办公用房集装式办公用房集装式办公用房集装式办公用房',
        price: '2000.00',
        company: '北京建谊智慧互联科技有限公司',
      },
      {
        pic: '/image/index_youcai_pic.png',
        name: '集装式办公用房集装式办公用房集装式办公用房集装式办公用房集装式办公用房',
        price: '2000.00',
        company: '北京建谊智慧互联科技有限公司',
      },
      {
        pic: '/image/index_youcai_pic.png',
        name: '集装式办公用房集装式办公用房集装式办公用房集装式办公用房集装式办公用房',
        price: '2000.00',
        company: '北京建谊智慧互联科技有限公司',
      },
      {
        pic: '/image/index_youcai_pic.png',
        name: '集装式办公用房集装式办公用房集装式办公用房集装式办公用房集装式办公用房',
        price: '2000.00',
        company: '北京建谊智慧互联科技有限公司',
      },
    ],
    caseList: [
      {
        case_id: 1,
        backImg: '/image/index_pic.png',
        logo: '/image/case_logo.png',
        caseText: '金胜嘉谊150平室内装修'
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
    ],
    demandList: [
      {
        demand_id: 1,
        image: '/image/index_pic.png',
        name: '复古酒吧墙体复古酒吧墙体复古酒吧墙体复古酒吧墙体复古酒吧墙体复古酒吧复古酒吧复古酒吧复古酒吧复古酒吧复古酒吧复古酒吧',
        address: '广东省广州市深圳',
        price: '$2000.00',
        tag: 0,
      },
      {
        demand_id: 2,
        image: '/image/index_pic.png',
        name: '复古酒吧墙体复古酒吧墙体复古酒吧墙体复古酒吧墙体复古酒吧墙体复古酒吧复古酒吧复古酒吧复古酒吧复古酒吧复古酒吧复古酒吧',
        address: '广东省广州市深圳',
        price: '$2000.00',
        tag: 0,
      },
      {
        demand_id: 3,
        image: '/image/index_pic.png',
        name: '复古酒吧墙体复古酒吧墙体复古酒吧墙体复古酒吧墙体复古酒吧墙体复古酒吧复古酒吧复古酒吧复古酒吧复古酒吧复古酒吧复古酒吧',
        address: '广东省广州市深圳',
        price: '$2000.00',
        tag: 0,
      },
      {
        demand_id: 4,
        image: '/image/index_pic.png',
        name: '复古酒吧墙体复古酒吧墙体复古酒吧墙体复古酒吧墙体复古酒吧墙体复古酒吧复古酒吧复古酒吧复古酒吧复古酒吧复古酒吧复古酒吧',
        address: '广东省广州市深圳',
        price: '$2000.00',
        tag: 0,
      },
    ],
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
  onLoad: function(options) {

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




  //方法
  //切换商家信息项
  changeInfoItem(event) {
    // console.log(event)
    let infoItem = event.currentTarget.dataset.infoitem
    console.log(infoItem)
    this.setData({
      infoItem: infoItem
    })
  },
  //预览图片
  previewImage() {
    wx.previewImage({
      current: '', // 当前显示图片的http链接
      urls: [] // 需要预览的图片http链接列表
    })
  }
})