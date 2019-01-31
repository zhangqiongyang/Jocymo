// components/uploadImage/index.js
Component({
  /**
   * 组件的属性列表
   */
  properties: {

  },

  /**
   * 组件的初始数据
   */
  data: {
    imageList: [
      '/image/index_pic.png', '/image/index_pic.png', '/image/index_pic.png', '/image/index_pic.png', '/image/index_pic.png',
    ]
  },

  /**
   * 组件的方法列表
   */
  methods: {
    //上传图片
    uploadImage() {
      const that = this
      wx.chooseImage({
        count: 9,
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
            formData: {
              user: 'test'
            },
            success(res) {
              console.log(res)
              const data = JSON.parse(res.data)
              // do something
              console.log(data)
              let imageList = that.data.imageList
              imageList.push(data.pic_url)
              that.setData({
                imageList: imageList
              })
            }
          })
        }
      })
    }
  }
})
