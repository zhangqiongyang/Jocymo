// pages/sub_personalCenter/pages/publishBussiness/publishBussiness.js
const phoneRexp = /^(13[0-9]|14[579]|15[0-3,5-9]|16[6]|17[0135678]|18[0-9]|19[89])\d{8}$/;


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
    region: [],
    range: ['1', '2', '3', '4'],
    phoneFormData: {
      phone: '',
      code: ''
    },
    merchant_logo: [],
    merchant_pic: [],
    merchant_aptiude: []
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function(options) {
    //获取选材一级分类
    this.getFirstType()
    //获取商家信息
    this.getBussinessInfo()
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
  //选择地区
  bindRegionChange(event) {
    console.log(event)
    this.setData({
      isRegion: true,
      region: event.detail.value
    })
  },
  //选择分类
  bindSelectorChange(event) {
    console.log(event)
    this.setData({
      isSelector: true,
      index: event.detail.value
    })
  },
  // 键盘输入事件
  input(event) {
    // console.log(event)
    var that = this;
    var phoneFormData = this.data.phoneFormData,
      inputType = event.target.dataset.id,
      inputValue = event.detail.value;
    inputType === 'phone' ? phoneFormData.phone = inputValue : phoneFormData.code = inputValue;
    this.setData({
      phoneFormData: phoneFormData
    })
    console.log(this.data.phoneFormData)
  },

  //选择商家分类
  checkboxChange(e) {
    console.log('checkbox发生change事件，携带value值为：', e.detail.value)
    this.setData({
      merchant_classify: e.detail.value
    })
  },

  // 输入
  writeFinish(event) {
    console.log(event)
    const value = event.detail.value,
      id = event.currentTarget.dataset.id
   
      if (id == 'name') {
        this.setData({
          merchant_name: value
        })
      } else if (id == 'operation') {
        this.setData({
          merchant_operation: value
        })
      } else if (id == 'introduce') {
        this.setData({
          merchant_introduce: value
        })
      }
      console.log(this.data)
    
  },

  // 上传图片
  uploadImage(event) {
    console.log(event)
    const imageList = event.detail.imageList,
      id = event.currentTarget.dataset.id
    if (id == 'logo') {
      this.setData({
        merchant_logo: imageList
      })

    } else if (id == 'swiper') {

      this.setData({
        merchant_pic: imageList
      })
    } else if (id == 'aptiude') {

      this.setData({
        merchant_aptiude: imageList
      })
    }

    console.log(id)
  },

  // 删除图片
  deleteImage(event) {
    console.log(event)
    const imageList = event.detail.imageList,
      id = event.currentTarget.dataset.id
    if (id == 'logo') {
      this.setData({
        merchant_logo: imageList
      })

    } else if (id == 'swiper') {

      this.setData({
        merchant_pic: imageList
      })
    } else if (id == 'aptiude') {

      this.setData({
        merchant_aptiude: imageList
      })
    }

    console.log(id)
  },


  // 发布
  publish(event) {
    console.log(event)
    console.log(this.data)

    if (!util.isEmpty(this.data.merchant_logo) && !util.isEmpty(this.data.merchant_name) && !util.isEmpty(this.data.merchant_operation) && !util.isEmpty(this.data.merchant_classify) && !util.isEmpty(this.data.region) && !util.isEmpty(this.data.merchant_introduce) && !util.isEmpty(this.data.merchant_pic) && !util.isEmpty(this.data.merchant_aptiude)) {
      console.log('-------数据都存在---------')
      //发布接口
      this.publishRequest()
    } else if (util.isEmpty(this.data.merchant_logo)) {
      console.log('-------商家LOGO为空---------')
      util._showToast('商家LOGO不能为空')
    } else if (util.isEmpty(this.data.merchant_name)) {
      console.log('-------商家名称为空---------')
      util._showToast('商家名称不能为空')
    } else if (util.isEmpty(this.data.merchant_operation)) {
      console.log('-------商家主营为空---------')
      util._showToast('商家主营不能为空')
    } else if (util.isEmpty(this.data.merchant_classify)) {
      console.log('-------商家分类为空---------')
      util._showToast('商家分类不能为空')
    } else if (util.isEmpty(this.data.region)) {
      console.log('-------商家地址为空---------')
      util._showToast('商家地址不能为空')
    } else if (util.isEmpty(this.data.merchant_introduce)) {
      console.log('-------商家介绍为空---------')
      util._showToast('商家介绍不能为空')
    } else if (util.isEmpty(this.data.merchant_pic)) {
      console.log('-------广告轮播图为空---------')
      util._showToast('广告轮播图不能为空')
    } else if (util.isEmpty(this.data.merchant_aptiude)) {
      console.log('-------商家资质为空---------')
      util._showToast('商家资质不能为空')
    }

  },


  // 修改
  change(event) {
    console.log(event)
    console.log(this.data)


    if (!util.isEmpty(this.data.merchant_logo) && !util.isEmpty(this.data.merchant_name) && !util.isEmpty(this.data.merchant_operation) && !util.isEmpty(this.data.merchant_classify) && !util.isEmpty(this.data.region) && !util.isEmpty(this.data.merchant_introduce) && !util.isEmpty(this.data.merchant_pic) && !util.isEmpty(this.data.merchant_aptiude)) {
      console.log('-------数据都存在---------')
      //修改接口
      this.changeRequest()
    } else if (util.isEmpty(this.data.merchant_logo)) {
      console.log('-------商家LOGO为空---------')
      util._showToast('商家LOGO不能为空')
    } else if (util.isEmpty(this.data.merchant_name)) {
      console.log('-------商家名称为空---------')
      util._showToast('商家名称不能为空')
    } else if (util.isEmpty(this.data.merchant_operation)) {
      console.log('-------商家主营为空---------')
      util._showToast('商家主营不能为空')
    } else if (util.isEmpty(this.data.merchant_classify)) {
      console.log('-------商家分类为空---------')
      util._showToast('商家分类不能为空')
    } else if (util.isEmpty(this.data.region)) {
      console.log('-------商家地址为空---------')
      util._showToast('商家地址不能为空')
    } else if (util.isEmpty(this.data.merchant_introduce)) {
      console.log('-------商家介绍为空---------')
      util._showToast('商家介绍不能为空')
    } else if (util.isEmpty(this.data.merchant_pic)) {
      console.log('-------广告轮播图为空---------')
      util._showToast('广告轮播图不能为空')
    } else if (util.isEmpty(this.data.merchant_aptiude)) {
      console.log('-------商家资质为空---------')
      util._showToast('商家资质不能为空')
    }


  },



  /**
   * 网络请求
   */


  //获取商家信息
  getBussinessInfo() {
    http.request({
        url: config.API_BUSSINESSINFO,
        data: {
          login_id: wx.getStorageSync('login_id'),
          show_type: 2, //分类 1商家详情 2商家修改详情页
          source: 'xcx'
        }
      })
      .then(res => {
        console.log('----------获取到商家信息了---------')
        console.log(res)

        if (res.errcode = 0) {
          console.log('-----没有商家---')
          this.setData({
            isHave: false
          })
        } else {
          this.setData({
            isHave: true
          })
        }

        let firstTypeInfo = this.data.firstTypeInfo
        for (let i = 0; i < res.data.merchant_classify.length; i++) {
          for (let j = 0; j < firstTypeInfo.length; j++) {
            if (res.data.merchant_classify[i] == firstTypeInfo[j].jocymo_first_id) {
              firstTypeInfo[j].checked = true
              break
            }
          }
        }
        console.log(firstTypeInfo)
        this.setData({
          merchant_logo: [{
            pic_url: res.data.logo_url
          }],
          merchant_introduce: res.data.merchant_introduce,
          merchant_aptiude: res.data.merchant_aptiude_pic,
          merchant_operation: res.data.merchant_operation,
          merchant_pic: res.data.merchant_pic_url,
          merchant_name: res.data.merchant_name,
          merchant_name: res.data.merchant_name,
          merchant_classify: res.data.merchant_classify,
          firstTypeInfo: firstTypeInfo,
          region: res.data.merchant_address.split(","),
          isRegion: true
        })

      })
  },



  //获取选材一级分类
  getFirstType() {
    http.request({
        url: config.API_INDEXFIRSTPRODUCTTYPE,
        data: {
          show: 'all'
        }
      })
      .then(res => {
        console.log('-------------获取到一级分类信息了------------')
        console.log(res)
        this.setData({
          firstTypeInfo: res.data
        })
      })
  },

  //发布接口
  publishRequest() {
    http.request({
        url: config.API_PUBLISHBUSSINESS,
        data: {
          source: 'xcx',
          login_id: wx.getStorageSync('login_id'),
          merchant_logo: JSON.stringify(this.data.merchant_logo),
          merchant_name: this.data.merchant_name,
          merchant_operation: this.data.merchant_operation,
          merchant_classify: this.data.merchant_classify,
          merchant_address: this.data.region,
          merchant_introduce: this.data.merchant_introduce,
          merchant_pic: JSON.stringify(this.data.merchant_pic),
          merchant_aptiude: JSON.stringify(this.data.merchant_aptiude)
        },
      })
      .then(res => {
        console.log('--------发布成功了-------')
        console.log(res)
        util._showToastSuccessBack('发布成功')
      })
      .catch(err => {
        console.log('-----错误------')
        console.log(err)
        util._showToast(err.errorMsg)
      })
  },


  //修改接口
  changeRequest() {
    http.request({
      url: config.API_CHANGEBUSSINESS,
      data: {
        source: 'xcx',
        login_id: wx.getStorageSync('login_id'),
        merchant_logo: JSON.stringify(this.data.merchant_logo),
        merchant_name: this.data.merchant_name,
        merchant_operation: this.data.merchant_operation,
        merchant_classify: this.data.merchant_classify,
        merchant_address: this.data.region,
        merchant_introduce: this.data.merchant_introduce,
        merchant_pic: JSON.stringify(this.data.merchant_pic),
        merchant_aptiude: JSON.stringify(this.data.merchant_aptiude)
      },
    })
      .then(res => {
        console.log('--------修改成功了-------')
        console.log(res)
        util._showToastSuccessBack('修改成功')
      })
      .catch(err => {
        console.log('-----错误------')
        console.log(err)
        util._showToast(err.errorMsg)
      })
  },
})