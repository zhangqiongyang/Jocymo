// pages/tabbar/selectMaterial/selectMaterial.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    firstId:1,
    sliderShow:[
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
    ],
    materialClassify:[
      {
        name:'场平功能',
        id:1,
      },
      {
        name: '场平功能',
        id: 2,
      },
      {
        name: '场平功能',
        id: 3,
      },
      {
        name: '场平功能',
        id: 4,
      },
      {
        name: '场平功能',
        id: 5,
      },
      {
        name: '场平功能',
        id: 6,
      },

    ],
    twoItem:[
      {
        twoItemTitle: '场平布置',
        threeItem: [
          {
            img: '/image/index_pic.png',
            text: '临建彩钢生活用房临建彩钢生活用房',
            id: 1,
          },
          {
            img: '/image/index_pic.png',
            text: '临建彩钢生活用房',
            id: 1,
          },
          {
            img: '/image/index_pic.png',
            text: '临建彩钢生活用房',
            id: 1,
          },
          {
            img: '/image/index_pic.png',
            text: '临建彩钢生活用房',
            id: 1,
          },
          {
            img: '/image/index_pic.png',
            text: '临建彩钢生活用房',
            id: 1,
          },
          {
            img: '/image/index_pic.png',
            text: '临建彩钢生活用房',
            id: 1,
          },

          {
            img: '/image/index_pic.png',
            text: '临建彩钢生活用房',
            id: 1,
          },

        ]
      },
      {
        twoItemTitle: '场平布置',
        threeItem: [
          {
            img: '/image/index_pic.png',
            text: '临建彩钢生活用房临建彩钢生活用房',
            id: 1,
          },
          {
            img: '/image/index_pic.png',
            text: '临建彩钢生活用房',
            id: 1,
          },
          {
            img: '/image/index_pic.png',
            text: '临建彩钢生活用房',
            id: 1,
          },
          {
            img: '/image/index_pic.png',
            text: '临建彩钢生活用房',
            id: 1,
          },
          {
            img: '/image/index_pic.png',
            text: '临建彩钢生活用房',
            id: 1,
          },
          {
            img: '/image/index_pic.png',
            text: '临建彩钢生活用房',
            id: 1,
          },

          {
            img: '/image/index_pic.png',
            text: '临建彩钢生活用房',
            id: 1,
          },

        ]
      },
      {
        twoItemTitle: '场平布置',
        threeItem: [
          {
            img: '/image/index_pic.png',
            text: '临建彩钢生活用房临建彩钢生活用房',
            id: 1,
          },
          {
            img: '/image/index_pic.png',
            text: '临建彩钢生活用房',
            id: 1,
          },
          {
            img: '/image/index_pic.png',
            text: '临建彩钢生活用房',
            id: 1,
          },
          {
            img: '/image/index_pic.png',
            text: '临建彩钢生活用房',
            id: 1,
          },
          {
            img: '/image/index_pic.png',
            text: '临建彩钢生活用房',
            id: 1,
          },
          {
            img: '/image/index_pic.png',
            text: '临建彩钢生活用房',
            id: 1,
          },

          {
            img: '/image/index_pic.png',
            text: '临建彩钢生活用房',
            id: 1,
          },

        ]
      },
    ],
   
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
  // 更换一级菜单
  selectFirstClasify(event){
    console.log(event)
    let id = event.currentTarget.dataset.id
    this.setData({
      firstId : id
    })
  },
  //跳转到产品详情
  jumpToProduct() {
    wx.navigateTo({
      url: '/pages/sub_details/pages/productDetails/productDetails',
    })
  },
})