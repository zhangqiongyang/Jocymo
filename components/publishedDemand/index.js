// components/publishDemand/index.js
Component({
  /**
   * 组件的属性列表
   */
  properties: {
    publishedDemand: Object,
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
    //跳转到修改需求
    toChangeDemand(event) {
      console.log(event)
      let id = event.currentTarget.dataset.id,
        demand_status = event.currentTarget.dataset.demand_status
      if (demand_status == 1) {
        wx.navigateTo({
          url: '/pages/sub_personalCenter/pages/publishDemand/publishDemand?id=' + id,
        })
      }

    },
  }
})