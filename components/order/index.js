// components/order/index.js
Component({
  /**
   * 组件的属性列表
   */
  properties: {
    address:Array,

  },

  /**
   * 组件的初始数据
   */
  data: {
    order_sort: 1,//1综合排序(暂不可用) 2评论排序 3发布时间排序
  },

  /**
   * 组件的方法列表
   */
  methods: {
    //改变排序方式
    changeOrderType(event){
      console.log(event)
      let order_sort = event.currentTarget.dataset.id

      this.setData({
        order_sort: order_sort
      })

      this.triggerEvent('changeOrder',{
        order_sort: order_sort
      },{})
    },

    // 改变地址
    addressChange(event){
      console.log(event)
      const address = event.detail.value

      this.setData({
        address: address
      })

      this.triggerEvent('changeAddress',{
        address: address
      },{})
    },

  }
})
