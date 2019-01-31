// components/case/index.js
Component({
  /**
   * 组件的属性列表
   */
  properties: {
    caseItem:Object,
  },

  /**
   * 组件的初始数据
   */
  data: {

  },

  /**
   * 组件的方法列表
   */
  methods: {
    //跳转到案例详情
    jumpToCase() {
      wx.navigateTo({
        url: '/pages/sub_details/pages/caseDetails/caseDetails',
      })
    },
  }
})