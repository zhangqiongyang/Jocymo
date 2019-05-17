// components/uploadImage/index.js
Component({
  /**
   * 组件的属性列表
   */
  properties: {
    imageNumber:Number,
    picList:Array
  },

  /**
   * 组件的初始数据
   */
  data: {
    imageList: []
  },

  /**
   * 组件的方法列表
   */
  methods: {
    //上传图片
    uploadImage() {

      console.log(this.properties.imageNumber)
      const that = this
      wx.chooseImage({
        count: 1,
        sizeType: ['original', 'compressed'],
        sourceType: ['album', 'camera'],
        success(res) {
          console.log(res)
          // tempFilePath可以作为img标签的src属性显示图片
          const tempFilePaths = res.tempFilePaths
          wx.uploadFile({
            url: 'https://jt.chinabim.com/jocymo/picuploadhandle',
            filePath: tempFilePaths[0],
            name: 'file',

            success(res) {
              console.log(res)
              const data = JSON.parse(res.data)
              // do something
              console.log(data)
              let picList = that.properties.picList
              picList.push({pic_url:data.pic_url})
              that.setData({
                picList: picList
              })


              that.triggerEvent('uploadImage', {
                imageList: that.properties.picList
              }, {})

            }
          })
        }
      })

    },
    
    //删除图片
    deleteImage(event){
      console.log(event)
      let index = event.currentTarget.dataset.index
      let picList = this.properties.picList
      picList.splice(index , 1)
      this.setData({
        picList: picList
      })

      this.triggerEvent('deleteImage', {
        imageList: this.properties.picList
      }, {})
    }
  }
})
