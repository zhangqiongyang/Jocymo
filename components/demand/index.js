// components/demand/index.js
Component({
  /**
   * 组件的属性列表
   */
  properties: {
    demandItem:Object,
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
    //跳转到需求详情
    jumpToDemand() {
      wx.navigateTo({
        url: '/pages/sub_details/pages/demandDetails/demandDetails',
      })
    },
  }
})
