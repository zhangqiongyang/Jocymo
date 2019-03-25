// components/case/index.js
var app = getApp()

Component({
  /**
   * 组件的属性列表
   */
  properties: {
    caseItem: Object,
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
    //跳转到案例详情
    jumpToCase(event) {
      console.log(event)
      const id = event.currentTarget.dataset.id
      wx.navigateTo({
        url: '/pages/sub_details/pages/caseDetails/caseDetails?id=' + id,
      })
    },
  }
})