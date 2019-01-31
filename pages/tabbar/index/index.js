// pages/tabbar/index/index.js
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
    newsinfo: [{
        article_id: 1,
        article_title: '第一期 技术交流-装配式吕模板施工工艺功法',
      },
      {
        article_id: 2,
        article_title: '第二期 BIM的五项国家标准',
      },
      {
        article_id: 3,
        article_title: '第三期 当中国遇见BIM+FM,怎一个“爽”字了得',
      },
      {
        article_id: 4,
        article_title: '第四期 BIM技术在施工过程时的应用',
      }
    ], //新闻列表
    manufacturerList: [{
        manufacturer_pic: '/image/index_changshang_pic.png',
        manufacturer_text: '场平功能'
      },
      {
        manufacturer_pic: '/image/index_changshang_pic.png',
        manufacturer_text: '基坑基础'
      },
      {
        manufacturer_pic: '/image/index_changshang_pic.png',
        manufacturer_text: '主体钢构'
      },
      {
        manufacturer_pic: '/image/index_changshang_pic.png',
        manufacturer_text: '维护'
      },
    ], //厂商汇集
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
  //跳转到所有新闻
  jumpToAllNews() {
    wx.navigateTo({
      url: '/pages/sub_newsSearch/pages/allNews/allNews',
    })
  },
  //跳转到所有厂商
  jumpToAllBusiness() {
    wx.navigateTo({
      url: '/pages/sub_details/pages/business/business',
    })
  },
  //跳转到所有案例
  jumpToAllCase() {
    wx.switchTab({
      url: '/pages/tabbar/case/case',
    })
  },
  //跳转到所有产品
  jumpToAllProduct() {
    wx.navigateTo({
      url: '/pages/sub_details/pages/product/product',
    })
  },
  //跳转到新闻详情
  jumpToNews() {
    wx.navigateTo({
      url: '/pages/sub_newsSearch/pages/newsDetails/newsDetails',
    })
  },
  //跳转到厂商详情
  jumpToBusiness() {
    wx.navigateTo({
      url: '/pages/sub_details/pages/businessDetails/businessDetails',
    })
  },


  // 网络请求
  getaddress(){
   wx.request({
     url: 'https://jt.chinabim.com/jocymo/searchaddress',
     data: '',
     header: {
       'content-type': 'application/x-www-form-urlencoded'
     },
     method: 'POST',
     dataType: 'json',
     responseType: 'text',
     success: function(res) {
       console.log(res)
     },
     fail: function(res) {},
     complete: function(res) {},
   })
  }
})