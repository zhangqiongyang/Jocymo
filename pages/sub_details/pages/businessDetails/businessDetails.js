// pages/sub_details/pages/businessDetails/businessDetails.js

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
    infoItem: 1, //商品信息项，1代表简介，2代表资质，3代表产品，4代表案例，5代表需求
    indexpicinfo: [], //轮播图
    qualification: [],
    optimalMaterialList: [],
    caseList: [],
    demandList: [],
    guestbookinfo: [],
    productPage: 1,
    casePage: 1,
    demandPage: 1,
    isHaveMoreProduct: true,
    isHaveMoreCase: true,
    isHaveMoreDemand: true,
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function(options) {
    this.setData({
      merchant_id: options.id
    })
    //获取商家信息
    this.getBussinessInfo()
    //获取留言信息
    this.getMsg()
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

  //切换商家信息项
  changeInfoItem(event) {
    // console.log(event)
    let infoItem = event.currentTarget.dataset.infoitem
    console.log(infoItem)
    this.setData({
      infoItem: infoItem
    })
    if (infoItem == 3) {
      if (this.data.optimalMaterialList.length == 0) {
        // 获取商家产品信息
        this.getBussinessProductInfo()
      }
    } else if (infoItem == 4) {
      if (this.data.caseList.length == 0) {
        // 获取商家案例信息
        this.getBussinessCaseInfo()
      }
    } else if (infoItem == 5) {
      if (this.data.demandList.length == 0) {
        // 获取商家需求信息
        this.getBussinessDemandInfo()
      }
    }
  },
  //预览图片
  previewImage(event) {
    // console.log(event)
    let index = event.currentTarget.dataset.index
    wx.previewImage({
      current: this.data.merchant_aptiude_pic[index], // 当前显示图片的http链接
      urls: this.data.merchant_aptiude_pic // 需要预览的图片http链接列表
    })
  },

  // 加载更多
  more(event) {
    console.log(event)
    const type = event.currentTarget.dataset.type
    if (type == 'product') {
      // 获取商家产品信息
      this.getBussinessProductInfo(Number(this.data.productPage) + 1)
    } else if (type == 'case') {
      // 获取商家案例信息
      this.getBussinessCaseInfo(Number(this.data.casePage) + 1)
    } else if (type == 'demand') {
      // 获取商家需求信息
      this.getBussinessDemandInfo(Number(this.data.demandPage) + 1)
    }
  },

  /**
   * 网络请求
   */

  //获取商家信息
  getBussinessInfo() {
    http.request({
        url: config.API_BUSSINESSINFO,
        data: {
          merchant_id: this.data.merchant_id,
          show_type: 1, //分类 1商家详情 2商家修改详情页
          login_id: wx.getStorageSync('login_id'),
          source: 'xcx',
        }
      })
      .then(res => {
        console.log('----------获取到商家详情了-----------')
        console.log(res)
        let merchant_aptiude_pic = []
        for (let i = 0; i < res.data.merchant_aptiude_pic.length; i++) {
          merchant_aptiude_pic[i] = res.data.merchant_aptiude_pic[i].pic_url
        }
        this.setData({
          logo_url: res.data.logo_url,
          merchant_address: res.data.merchant_address,
          merchant_aptiude_pic: merchant_aptiude_pic,
          merchant_introduce: res.data.merchant_introduce,
          merchant_name: res.data.merchant_name,
          merchant_pic_url: res.data.merchant_pic_url,
          countaptiude: res.data.countaptiude,
          countcase: res.data.countcase
        })
      })
  },

  // 获取商家产品信息
  getBussinessProductInfo(page) {
    http.request({
        url: config.API_BUSSINESSPRODUCTINFO,
        data: {
          merchant_id: this.data.merchant_id,
          page_size: 4, //页面显示条数
          page: page ? page : 1, //当前页数
          login_id: wx.getStorageSync('login_id'),
          source: 'xcx'
        }
      })
      .then(res => {
        console.log('----------获取到商家产品详情了-----------')
        console.log(res)
        let optimalMaterialList = this.data.optimalMaterialList
        for (let i = 0; i < res.data.length; i++) {
          optimalMaterialList.push(res.data[i])
        }
        this.setData({
          optimalMaterialList: optimalMaterialList,
          productPage: res.page
        })
        if (this.data.productPage == res.page_count){
          this.setData({
            isHaveMoreProduct: false
          })
        }
      })
      // .catch(err => {
      //   console.log(err)
      //   if (err.errorCode == 0) {
      //     this.setData({
      //       isHaveMoreProduct: false
      //     })
      //   }
      // })
  },

  // 获取商家案例信息
  getBussinessCaseInfo(page) {
    http.request({
        url: config.API_BUSSINESSCASEINFO,
        data: {
          merchant_id: this.data.merchant_id,
          page_size: 3, //页面显示条数
          page: page ? page : 1, //当前页数
          login_id: wx.getStorageSync('login_id'),
          source: 'xcx'
        }
      })
      .then(res => {
        console.log('----------获取到商家案例详情了-----------')
        console.log(res)
        let caseList = this.data.caseList
        for (let i = 0; i < res.data.length; i++) {
          caseList.push(res.data[i])
        }
        this.setData({
          caseList: caseList,
          casePage: res.page
        })
        if (this.data.casePage == res.page_count) {
          this.setData({
            isHaveMoreCase: false
          })
        }
      })
      // .catch(err => {
      //   console.log(err)
      //   if (err.errorCode == 0) {
      //     this.setData({
      //       isHaveMoreCase: false
      //     })
      //   }
      // })
  },

  // 获取商家需求信息
  getBussinessDemandInfo(page) {
    http.request({
        url: config.API_BUSSINESSDEMANDINFO,
        data: {
          merchant_id: this.data.merchant_id,
          page_size: 4, //页面显示条数
          page: page ? page : 1, //当前页数
          login_id: wx.getStorageSync('login_id'),
          source: 'xcx'
        }
      })
      .then(res => {
        console.log('----------获取到商家需求详情了-----------')
        console.log(res)
        let demandList = this.data.demandList
        for (let i = 0; i < res.data.length; i++) {
          demandList.push(res.data[i])
        }
        this.setData({
          demandList: demandList,
          demandPage: res.page
        })
        if (this.data.demandPage == res.page_count) {
          this.setData({
            isHaveMoreDemand: false
          })
        }
      })
      // .catch(err => {
      //   console.log(err)
      //   if (err.errorCode == 0) {
      //     this.setData({
      //       isHaveMoreDemand: false
      //     })
      //   }
      // })

  },


  //获取留言信息
  getMsg() {
    http.request({
        url: config.API_SELECTMSG,
        data: {
          data_id: this.data.merchant_id, //产品id/案例id/需求id/商家id/新闻id
          type_id: 5, //2产品/3案例/4需求/5商家/6新闻
        }
      })
      .then(res => {
        console.log('----------获取到留言了-----------')
        console.log(res)
        this.setData({
          guestbookinfo: res.data
        })
      })
  }
})