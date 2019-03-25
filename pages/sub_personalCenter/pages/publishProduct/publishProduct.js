// pages/sub_personalCenter/pages/publishProduct/publishProduct.js

import {
  HTTP
} from '../../../../utils/http-p.js'
let http = new HTTP()

import {
  config
} from '../../../../config.js'

const util = require('../../../../utils/util.js');

Page({

  /**
   * 页面的初始数据
   */
  data: {
    firstType_id: 1,
    isRegion: false,
    multiArray: [
      [],
      [],
      []
    ],
    product_classify: [],
    product_pic: [],
    multiIndex: [0, 0, 0],
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function(options) {
    if (options.id) {
      this.setData({
        product_id: options.id
      })

      // 获取产品信息
      this.getProductInfo()
    }else{
      this.setData({
        classtext:"请选择"
      })
    }
    //获取选材分类
    this.getClassify()

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
  // 输入
  writeFinish(event) {
    console.log(event)
    const value = event.detail.value,
      id = event.currentTarget.dataset.id
    if (value == '') {
      console.log('-----值为空----')
    } else {
      if (id == 'name') {
        this.setData({
          product_name: value
        })
      } else if (id == 'specifications') {
        this.setData({
          product_type: value
        })
      } else if (id == 'price') {
        this.setData({
          product_price: value
        })
      } else if (id == 'desc') {
        this.setData({
          product_desc: value
        })
      } else if (id == 'other') {
        this.setData({
          product_other: value
        })
      }
      console.log(this.data)
    }
  },

  // 上传图片
  uploadImage(event) {
    console.log(event)
    const imageList = event.detail.imageList

    this.setData({
      product_pic: imageList
    })

    console.log(this.data.product_pic)
  },

  // 删除图片
  deleteImage(event){
    console.log(event)
    const imageList = event.detail.imageList

    this.setData({
      product_pic: imageList
    })

    console.log(this.data.product_pic)

  },

  // 发布
  publish(event) {
    console.log(event)
    console.log(this.data)

    if (!util.isEmpty(this.data.product_name) && !util.isEmpty(this.data.product_type) && !util.isEmpty(this.data.product_price) && !util.isEmpty(this.data.product_desc) && !util.isEmpty(this.data.product_classify) && !util.isEmpty(this.data.product_pic) && !util.isEmpty(this.data.product_other)) {
      console.log('-------数据都存在---------')
      //发布接口
      this.publishRequest()
    } else if (util.isEmpty(this.data.product_name)) {
      console.log('-------产品名为空---------')
      util._showToast('产品名不能为空')
    } else if (util.isEmpty(this.data.product_type)) {
      console.log('-------规格型号为空---------')
      util._showToast('规格型号不能为空')
    } else if (util.isEmpty(this.data.product_price)) {
      console.log('-------产品价格为空---------')
      util._showToast('产品价格不能为空')
    } else if (util.isEmpty(this.data.product_desc)) {
      console.log('-------产品描述为空---------')
      util._showToast('产品描述不能为空')
    } else if (util.isEmpty(this.data.product_classify)) {
      console.log('-------材料分类为空---------')
      util._showToast('材料分类不能为空')
    } else if (util.isEmpty(this.data.product_pic)) {
      console.log('-------产品图片为空---------')
      util._showToast('产品图片不能为空')
    } else if (util.isEmpty(this.data.product_other)) {
      console.log('-------其他说明为空---------')
      util._showToast('其他说明不能为空')
    }

  },


  // 修改
  change(event) {
    console.log(event)
    console.log(this.data)

    if (!util.isEmpty(this.data.product_name) && !util.isEmpty(this.data.product_type) && !util.isEmpty(this.data.product_price) && !util.isEmpty(this.data.product_desc) && !util.isEmpty(this.data.product_classify) && !util.isEmpty(this.data.product_pic) && !util.isEmpty(this.data.product_other)) {
      console.log('-------数据都存在---------')
      //发布接口
      this.changeRequest()
    } else if (util.isEmpty(this.data.product_name)) {
      console.log('-------产品名为空---------')
      util._showToast('产品名不能为空')
    } else if (util.isEmpty(this.data.product_type)) {
      console.log('-------规格型号为空---------')
      util._showToast('规格型号不能为空')
    } else if (util.isEmpty(this.data.product_price)) {
      console.log('-------产品价格为空---------')
      util._showToast('产品价格不能为空')
    } else if (util.isEmpty(this.data.product_desc)) {
      console.log('-------产品描述为空---------')
      util._showToast('产品描述不能为空')
    } else if (util.isEmpty(this.data.product_classify)) {
      console.log('-------材料分类为空---------')
      util._showToast('材料分类不能为空')
    } else if (util.isEmpty(this.data.product_pic)) {
      console.log('-------产品图片为空---------')
      util._showToast('产品图片不能为空')
    } else if (util.isEmpty(this.data.product_other)) {
      console.log('-------其他说明为空---------')
      util._showToast('其他说明不能为空')
    }


  },





  // 选择材料
  bindMultiPickerChange(e) {
    console.log(e)
    console.log('picker发送选择改变，携带值为', e.detail.value)
    console.log(this.data.clsssifyInfo[e.detail.value[0]].jocymo_first_id)
    console.log(this.data.clsssifyInfo[e.detail.value[0]].twoTypeInfo[e.detail.value[1]].jocymo_two_id)
    console.log(this.data.clsssifyInfo[e.detail.value[0]].twoTypeInfo[e.detail.value[1]].threeTypeInfo[e.detail.value[2]].jocymo_three_id)

    let product_classify = this.data.product_classify
    // product_classify[0] = this.data.clsssifyInfo[e.detail.value[0]].jocymo_first_id
    // product_classify[1] = this.data.clsssifyInfo[e.detail.value[0]].twoTypeInfo[e.detail.value[1]].jocymo_two_id
    product_classify = this.data.clsssifyInfo[e.detail.value[0]].twoTypeInfo[e.detail.value[1]].threeTypeInfo[e.detail.value[2]].jocymo_three_id

    this.setData({
      multiIndex: e.detail.value,
      product_classify: product_classify,
      isRegion: true
    })
  },
  bindMultiPickerColumnChange(e) {
    console.log('------------------')
    console.log(e)
    console.log('修改的列为', e.detail.column, '，值为', e.detail.value)
    const data = {
      multiArray: this.data.multiArray,
      multiIndex: this.data.multiIndex
    }
    data.multiIndex[e.detail.column] = e.detail.value

    let multiArray = this.data.multiArray


    console.log(data.multiIndex)

    switch (e.detail.column) {
      case 0:
        multiArray[1] = []
        multiArray[2] = []
        data.multiIndex[1] = 0
        data.multiIndex[2] = 0


        for (let j = 0; j < this.data.clsssifyInfo[data.multiIndex[0]].twoTypeInfo.length; j++) {
          multiArray[1].push(this.data.clsssifyInfo[data.multiIndex[0]].twoTypeInfo[j].jocymo_two_name)
        }

        for (let k = 0; k < this.data.clsssifyInfo[data.multiIndex[0]].twoTypeInfo[0].threeTypeInfo.length; k++) {
          multiArray[2].push(this.data.clsssifyInfo[data.multiIndex[0]].twoTypeInfo[0].threeTypeInfo[k].jocymo_three_name)
        }

        break

      case 1:
        multiArray[2] = []
        data.multiIndex[2] = 0;

        for (let k = 0; k < this.data.clsssifyInfo[data.multiIndex[0]].twoTypeInfo[data.multiIndex[1]].threeTypeInfo.length; k++) {
          multiArray[2].push(this.data.clsssifyInfo[data.multiIndex[0]].twoTypeInfo[data.multiIndex[1]].threeTypeInfo[k].jocymo_three_name)
        }

        break
    }


    this.setData(data)
  },

  /**
   * 网络请求
   */

  // 获取产品信息
  getProductInfo() {
    http.request({
        url: config.API_PRODUCTINFO,
        data: {
          product_id: this.data.product_id,
          login_id: wx.getStorageSync('login_id'),
          show_type: 2, //类型 1 产品详情 2修改产品详情
          source: 'xcx'
        }
      })
      .then(res => {
        console.log('----------获取到产品信息了---------')
        console.log(res)

          this.setData({
            product_desc: res.data.product_desc,
            product_name: res.data.product_name,
            product_other: res.data.product_other,
            product_pic: res.data.product_pic,
            product_price: res.data.product_price,
            product_type: res.data.product_type,
            product_classify: res.data.product_classify_id,
            classtext: res.data.product_classify.jocymo_first_name +','+ res.data.product_classify.jocymo_two_name
              + ',' + res.data.product_classify.jocymo_three_name,
            isRegion: false,
          })

      })
  },



  //获取选材分类
  getClassify() {
    http.request({
        url: config.API_SELECTCLASSIFY,
      })
      .then(res => {
        console.log('-------------获取到分类信息了------------')
        console.log(res)

        let multiArray = this.data.multiArray
        for (let i = 0; i < res.data.length; i++) {
          multiArray[0].push(res.data[i].jocymo_first_name)
        }
        for (let j = 0; j < res.data[0].twoTypeInfo.length; j++) {
          multiArray[1].push(res.data[0].twoTypeInfo[j].jocymo_two_name)
        }
        for (let k = 0; k < res.data[0].twoTypeInfo[0].threeTypeInfo.length; k++) {
          multiArray[2].push(res.data[0].twoTypeInfo[0].threeTypeInfo[k].jocymo_three_name)
        }
        console.log(multiArray)
        this.setData({
          clsssifyInfo: res.data,
          multiArray: multiArray
        })
      })
  },



  //发布接口
  publishRequest() {
    console.log(this.data.product_pic)
    http.request({
        url: config.API_PUBLISHPRODUCT,
        data: {
          source: 'xcx',
          login_id: wx.getStorageSync('login_id'),
          product_name: this.data.product_name,
          product_type: this.data.product_type,
          product_price: this.data.product_price,
          product_desc: this.data.product_desc,
          product_classify: this.data.product_classify,
          product_pic: JSON.stringify(this.data.product_pic),
          product_other: this.data.product_other,
        },
      })
      .then(res => {
        console.log('--------发布成功了-------')
        console.log(res)
        util._showToastSuccessBack('发布成功')

      })
  },

  //修改接口
  changeRequest() {
    http.request({
        url: config.API_CHANGEPRODUCT,
        data: {
          product_id: this.data.product_id,
          login_id: wx.getStorageSync('login_id'),
          product_name: this.data.product_name,
          product_type: this.data.product_type,
          product_price: this.data.product_price,
          product_desc: this.data.product_desc,
          product_classify: this.data.product_classify,
          product_pic: JSON.stringify(this.data.product_pic),
          product_other: this.data.product_other,
        },
      })
      .then(res => {
        console.log('--------修改成功了-------')
        console.log(res)
        util._showToastSuccessBack('修改成功')

      })
  },
})