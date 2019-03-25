// pages/sub_newsSearch/pages/search/search.js


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
    isHistory:true, //展示历史纪录
    searchTitleItem: 2, //搜索项， 2代表产品，3代表案例 ，4代表需求，
    historyList: [],
    region:'',
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
    // 查询历史纪录
    this.getHistory()
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

    //搜索接口
    this.searchRequest()
  },

  // 删除历史记录
  deleteHistory() {
    let historyList = this.data.historyList
    this.setData({
      historyList: []
    })
    // 删除历史纪录
    this.deleteHistory()
  },

  //搜索
  search(event) {
    console.log(event)
    let value = event.detail.value

    this.setData({
      key: value
    })

    //搜索接口
    this.searchRequest(value)
  },

  // 历史纪录关键词搜索
  searchHistory(event){
    console.log(event)
    let key = event.currentTarget.dataset.key

    this.setData({
      key:key
    })

    //搜索接口
    this.searchRequest(key)
  },


  /**
   * 网络请求
   */

  //搜索接口
  searchRequest(key) {
    http.request({
        url: config.API_SEAECH,
        data: {
          search_keyword: key ? key : this.data.key,
          address: this.data.region,
          type_id: this.data.searchTitleItem, //2 产品 3案例 4需求
          source: 'xcx',
          login_id: wx.getStorageSync('login_id')
        }
      })
      .then(res => {
        console.log('------------获取到搜索结果了-----------')
        console.log(res)
        this.setData({
          isHistory:false
        })
        if (this.data.searchTitleItem == 2){
          this.setData({
            productList: res.data
          })
        } else if (this.data.searchTitleItem == 3){
          this.setData({
            caseList: res.data
          })
        } else if (this.data.searchTitleItem == 4){
          this.setData({
            demandList: res.data
          })
        }
        
      })
  },

  // 查询历史纪录
  getHistory() {
    http.request({
        url: config.API_SELECTHISTORY,
        data: {
          source: 'xcx',
          login_id: wx.getStorageSync('login_id')
        }
      })
      .then(res => {
        console.log('---------获取到历史纪录了--------')
        console.log(res)
        this.setData({
          historyList: res.data
        })
      })
  },

  // 删除历史纪录
  deleteHistory() {
    http.request({
        url: config.API_DELETEHISTORY,
        data: {
          source: 'xcx',
          login_id: wx.getStorageSync('login_id')
        }
      })
      .then(res => {
        console.log('---------删除历史纪录了--------')
        console.log(res)
      })
  },

})