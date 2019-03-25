// components/publishedProduct/index.js
Component({
  /**
   * 组件的属性列表
   */
  properties: {
    published:Object,
    isProduct:Boolean,
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
    //删除
    deleteItem(event){
      console.log(event)
      let id = event.currentTarget.dataset.id

      this.triggerEvent('deleteProductCase', {
        id: id,
      }, {})

    },
    // 跳转到修改页面
    toChangeCase(event){
      console.log(event)
      let id = event.currentTarget.dataset.id

      if(this.properties.isProduct){
        wx.navigateTo({
          url: "/pages/sub_personalCenter/pages/publishProduct/publishProduct?id=" + id,
        })
      }else{
        wx.navigateTo({
          url: "/pages/sub_personalCenter/pages/publishCase/publishCase?id=" + id,
        })
      }
     
    }
  }
})
