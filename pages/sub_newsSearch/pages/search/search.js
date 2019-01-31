// pages/sub_newsSearch/pages/search/search.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    searchTitleItem: 0, //搜索项， 0代表产品， 1代表案例 ，3代表需求，
    historyList: [
      '基坑基础', '主题钢构', '集装箱式办公用房', '集装箱式办公用房', '主题钢构',
    ],
    caseList: [{
        pic: '/image/index_rean_pic.png',
        name: '集装式办公用房集装式办公用房集装式办公用房集装式办公用房集装式办公用房',
        price: '2000.00',
        company: '北京建谊智慧互联科技有限公司',
        collect: '30',
        like: '20',
      },
      {
        pic: '/image/index_rean_pic.png',
        name: '集装式办公用房集装式办公用房集装式办公用房集装式办公用房集装式办公用房',
        price: '2000.00',
        company: '北京建谊智慧互联科技有限公司',
        collect: '30',
        like: '20',
      },
      {
        pic: '/image/index_rean_pic.png',
        name: '集装式办公用房集装式办公用房集装式办公用房集装式办公用房集装式办公用房',
        price: '2000.00',
        company: '北京建谊智慧互联科技有限公司',
        collect: '30',
        like: '20',
      },
    ], //热案推荐
    productList: [{
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
    ], //产品列表
    demandList: [{
        demand_id: 1,
        image: '/image/index_pic.png',
        name: '复古酒吧墙体复古酒吧墙体复古酒吧墙体复古酒吧墙体复古酒吧墙体复古酒吧复古酒吧复古酒吧复古酒吧复古酒吧复古酒吧复古酒吧',
        address: '广东省广州市深圳',
        price: '$2000.00',
        tag: 1,
      },
      {
        demand_id: 2,
        image: '/image/index_pic.png',
        name: '复古酒吧墙体复古酒吧墙体复古酒吧墙体复古酒吧墙体复古酒吧墙体复古酒吧复古酒吧复古酒吧复古酒吧复古酒吧复古酒吧复古酒吧',
        address: '广东省广州市深圳',
        price: '$2000.00',
        tag: 2,
      },
      {
        demand_id: 3,
        image: '/image/index_pic.png',
        name: '复古酒吧墙体复古酒吧墙体复古酒吧墙体复古酒吧墙体复古酒吧墙体复古酒吧复古酒吧复古酒吧复古酒吧复古酒吧复古酒吧复古酒吧',
        address: '广东省广州市深圳',
        price: '$2000.00',
        tag: 3,
      },
      {
        demand_id: 4,
        image: '/image/index_pic.png',
        name: '复古酒吧墙体复古酒吧墙体复古酒吧墙体复古酒吧墙体复古酒吧墙体复古酒吧复古酒吧复古酒吧复古酒吧复古酒吧复古酒吧复古酒吧',
        address: '广东省广州市深圳',
        price: '$2000.00',
        tag: 0,
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

  /**
   * 方法
   */

  //切换已发布的项
  changeSearchTitle(event) {
    console.log(event)
    let searchTitleItem = event.currentTarget.dataset.searchtitle
    this.setData({
      searchTitleItem: searchTitleItem
    })
    console.log(this.data.searchTitleItem)
  },
})