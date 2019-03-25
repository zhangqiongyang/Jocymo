// components/product/index.js
var app = getApp()

Component({
  /**
   * 组件的属性列表
   */
  properties: {
    productItem: Object,
  },

  /**
   * 组件的初始数据
   */
  data: {
    platform: app.globalData.platform
  },

  /**
   * 组件的方法列表
   */
  methods: {

    //跳转到产品详情
    jumpToProduct(event) {
      console.log(event)
      const id = event.currentTarget.dataset.id
      wx.navigateTo({
        url: '/pages/sub_details/pages/productDetails/productDetails?id=' + id,
      })
    },
  }
})