// pages/tabbar/mine/mine.js

const app = getApp()


Page({

  /**
   * 页面的初始数据
   */
  data: {
    windowHeight: app.globalData.windowHeight,//手机屏幕高度
    userType: 0, //用户类型，0代表个人，1代表商家
    publishEntry: 1, //发布项，个人只能发布产品，商家可全部发布。1代表发布产品，2代表发布案例，3代表发布需求
    isPublish: false, //是否打开发布浮层
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
  //发布
  publish(){
    this.setData({
      isPublish:true
    })
  },
  //选择发布的类型
  selectPublishEntry(event) {
    // console.log(event);
    let publishentry = event.currentTarget.dataset.publishentry
    this.setData({
      publishEntry: publishentry
    })
    console.log(this.data.publishEntry)
  },
  //发布（跳转到相应发布页）
  submitPublish() {
    if (this.data.publishEntry==1){
      wx.navigateTo({
        url: '/pages/sub_personalCenter/pages/publishDemand/publishDemand',
      })
    } else if (this.data.publishEntry == 2){

    } else if (this.data.publishEntry == 3) {

    }
   
  },
  //取消发布
  cancelPublish() {
    this.setData({
      isPublish:false
    })
  },
  //跳转到已发布页面
  published(){
    wx.navigateTo({
      url: '/pages/sub_personalCenter/pages/published/published',
    })
  },
  //跳转到收货地址页面
  toAddress(){
    wx.navigateTo({
      url: '/pages/sub_personalCenter/pages/address/address',
    })
  }

  //网络请求
})