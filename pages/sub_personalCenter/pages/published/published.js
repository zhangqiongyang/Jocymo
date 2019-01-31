// pages/sub_details/pages/published/published.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    deleteText:'删除该产品',//删除提示文本内容
    isDelete: true,//是否删除
    publishedTitleItem:0,//已发布项， 0代表需求， 1代表产品， 2代表案例
    demandTitleItem:0 ,//需求项，0 代表进行中，1代表已完成
    productList:[
      {
        id:1,
        image:'/image/index_pic.png',
        text:'复古酒吧墙体'
      },
      {
        id: 2,
        image: '/image/index_pic.png',
        text: '复古酒吧墙体'
      },
      {
        id: 3,
        image: '/image/index_pic.png',
        text: '复古酒吧墙体'
      }, 
      {
        id: 4,
        image: '/image/index_pic.png',
        text: '复古酒吧墙体'
      },
      {
        id: 5,
        image: '/image/index_pic.png',
        text: '复古酒吧墙体'
      },
      {
        id: 6,
        image: '/image/index_pic.png',
        text: '复古酒吧墙体'
      }
    ],
    caseList:[
      {
        id: 1,
        image: '/image/index_pic.png',
        text: '复古酒吧墙体'
      },
      {
        id: 2,
        image: '/image/index_pic.png',
        text: '复古酒吧墙体'
      },
      {
        id: 3,
        image: '/image/index_pic.png',
        text: '复古酒吧墙体'
      },
      {
        id: 4,
        image: '/image/index_pic.png',
        text: '复古酒吧墙体'
      },
      {
        id: 5,
        image: '/image/index_pic.png',
        text: '复古酒吧墙体'
      },
      {
        id: 6,
        image: '/image/index_pic.png',
        text: '复古酒吧墙体'
      }
    ],
    demandList:[
      {
        id:1,
        image:'/image/index_pic.png',
        name:'复古酒吧墙体复古酒吧墙体复古酒吧墙体复古酒吧墙体复古酒吧墙体复古酒吧复古酒吧复古酒吧复古酒吧',
        chakan:100,
        toubiao:100,
        yiwancheng:0 //控制已完成的贴图，0代表未完成，1代表已完成
      },
      {
        id: 1,
        image: '/image/index_pic.png',
        name: '复古酒吧墙体复古酒吧墙体复古酒吧墙体复古酒吧墙体复古酒吧墙体复古酒吧复古酒吧复古酒吧复古酒吧',
        chakan: 100,
        toubiao: 100,
        yiwancheng: 0
      },
      {
        id: 1,
        image: '/image/index_pic.png',
        name: '复古酒吧墙体复古酒吧墙体复古酒吧墙体复古酒吧墙体复古酒吧墙体复古酒吧复古酒吧复古酒吧复古酒吧',
        chakan: 100,
        toubiao: 100,
        yiwancheng: 0
      },
      {
        id: 1,
        image: '/image/index_pic.png',
        name: '复古酒吧墙体复古酒吧墙体复古酒吧墙体复古酒吧墙体复古酒吧墙体复古酒吧复古酒吧复古酒吧复古酒吧',
        chakan: 100,
        toubiao: 100,
        yiwancheng: 0
      },
      {
        id: 1,
        image: '/image/index_pic.png',
        name: '复古酒吧墙体复古酒吧墙体复古酒吧墙体复古酒吧墙体复古酒吧墙体复古酒吧复古酒吧复古酒吧复古酒吧',
        chakan: 100,
        toubiao: 100,
        yiwancheng: 0
      },
    ],
    demandListOver: [
      {
        id: 1,
        image: '/image/index_pic.png',
        name: '复古酒吧墙体复古酒吧墙体复古酒吧墙体复古酒吧墙体复古酒吧墙体复古酒吧复古酒吧复古酒吧复古酒吧',
        chakan: 100,
        toubiao: 100,
        yiwancheng: 1 //控制已完成的贴图，0代表未完成，1代表已完成
      },
      {
        id: 1,
        image: '/image/index_pic.png',
        name: '复古酒吧墙体复古酒吧墙体复古酒吧墙体复古酒吧墙体复古酒吧墙体复古酒吧复古酒吧复古酒吧复古酒吧',
        chakan: 100,
        toubiao: 100,
        yiwancheng: 1
      },
      {
        id: 1,
        image: '/image/index_pic.png',
        name: '复古酒吧墙体复古酒吧墙体复古酒吧墙体复古酒吧墙体复古酒吧墙体复古酒吧复古酒吧复古酒吧复古酒吧',
        chakan: 100,
        toubiao: 100,
        yiwancheng: 1
      },
      {
        id: 1,
        image: '/image/index_pic.png',
        name: '复古酒吧墙体复古酒吧墙体复古酒吧墙体复古酒吧墙体复古酒吧墙体复古酒吧复古酒吧复古酒吧复古酒吧',
        chakan: 100,
        toubiao: 100,
        yiwancheng: 1
      },
      {
        id: 1,
        image: '/image/index_pic.png',
        name: '复古酒吧墙体复古酒吧墙体复古酒吧墙体复古酒吧墙体复古酒吧墙体复古酒吧复古酒吧复古酒吧复古酒吧',
        chakan: 100,
        toubiao: 100,
        yiwancheng: 1
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
  
  //切换需求的项
  changeDemandTitle(event){
    console.log(event)
    let demandTitleItem = event.currentTarget.dataset.demandtitle
    this.setData({
      demandTitleItem: demandTitleItem
    })
    console.log(this.data.demandTitleItem)
  },
  //切换已发布的项
  changepublishedTitle(event){
    console.log(event)
    let publishedTitleItem = event.currentTarget.dataset.publishedtitle
    this.setData({
      publishedTitleItem: publishedTitleItem
    })
    console.log(this.data.publishedTitleItem)
  },
  //删除
  deleteItem(){

  },
  //取消
  cancelDelete(){
    this.setData({
      isDelete:false
    })
  },
})