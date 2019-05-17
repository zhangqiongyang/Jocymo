// pages/publishDemand/publishDemand.js

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
    isDiscussPersonally: false, //需求价格面议
    region: [],
    demand_budget: [],
    demand_pic:[]
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function(options) {
    if (options.id) {
      this.setData({
        demand_id: options.id
      })

      //获取需求信息
      this.getDemandInfo()
    }
   
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


  // 选择价格是否面议
  checkSecrecy(event) {
    let isDiscussPersonally = this.data.isDiscussPersonally
    this.setData({
      isDiscussPersonally: !this.data.isDiscussPersonally,
      demand_budget: isDiscussPersonally ? [] : '面议',
      min:'',
      max:''
    })
    console.log(this.data.isDiscussPersonally, this.data.demand_budget)
  },

  // 输入
  writeFinish(event) {
    console.log(event)
    const value = event.detail.value,
      id = event.currentTarget.dataset.id
    // if (value == '') {
    //   console.log('-----值为空----')
    // } else {
      if (id == 'name') {
        this.setData({
          demand_name: value
        })
      } else if (id == 'number') {
        this.setData({
          demand_number: value
        })
      } else if (id == 'min') {
        let demand_budget = this.data.demand_budget
        demand_budget[0] = value
        this.setData({
          demand_budget: demand_budget
        })
      } else if (id == 'max') {
        let demand_budget = this.data.demand_budget
        demand_budget[1] = value
        this.setData({
          demand_budget: demand_budget
        })
      } else if (id == 'desc') {
        this.setData({
          demand_desc: value
        })
      } else if (id == 'other') {
        this.setData({
          demand_other: value
        })
      }
      console.log(this.data)
    // }
  },

  // 上传图片
  uploadImage(event) {
    console.log(event)
    const imageList = event.detail.imageList
   
    this.setData({
      demand_pic: imageList
    })
    console.log(this.data.demand_pic)
  },
  // 删除图片
  deleteImage(event) {
    console.log(event)
    const imageList = event.detail.imageList

    this.setData({
      demand_pic: imageList
    })

    console.log(this.data.demand_pic)

  },
  // 发布
  publish(event) {
    console.log(event)
    console.log(this.data)

    if (!util.isEmpty(this.data.demand_name) && !util.isEmpty(this.data.demand_number) && !util.isEmpty(this.data.demand_budget) && !util.isEmpty(this.data.demand_desc) && !util.isEmpty(this.data.region) && !util.isEmpty(this.data.demand_pic) && !util.isEmpty(this.data.demand_other)) {
      console.log('-------数据都存在---------')
      //发布接口
      this.publishRequest()
    } else if (util.isEmpty(this.data.demand_name)) {
      console.log('-------需求名为空---------')
      util._showToast('需求名不能为空')
    } else if (util.isEmpty(this.data.demand_number)) {
      console.log('-------需求数量为空---------')
      util._showToast('需求数量不能为空')
    } else if (util.isEmpty(this.data.demand_budget)) {
      console.log('-------需求价格为空---------')
      util._showToast('需求价格不能为空')
    } else if (util.isEmpty(this.data.demand_desc)) {
      console.log('-------需求描述为空---------')
      util._showToast('需求描述不能为空')
    } else if (util.isEmpty(this.data.demand_pic)) {
      console.log('-------需求图片为空---------')
      util._showToast('需求图片不能为空')
    } else if (util.isEmpty(this.data.region)) {
      console.log('-------需求地点为空---------')
      util._showToast('需求地点不能为空')
    } else if (util.isEmpty(this.data.demand_other)) {
      console.log('-------其他需求为空---------')
      util._showToast('其他需求不能为空')
    }

  },


  // 修改
  change(event) {
    console.log(event)
    console.log(this.data)

    if (!util.isEmpty(this.data.demand_name) && !util.isEmpty(this.data.demand_number) && !util.isEmpty(this.data.demand_budget) && !util.isEmpty(this.data.demand_desc) && !util.isEmpty(this.data.region) && !util.isEmpty(this.data.demand_pic) && !util.isEmpty(this.data.demand_other)) {
      console.log('-------数据都存在---------')
      //发布接口
      this.changeRequest()
    } else if (util.isEmpty(this.data.demand_name)) {
      console.log('-------需求名为空---------')
      util._showToast('需求名不能为空')
    } else if (util.isEmpty(this.data.demand_number)) {
      console.log('-------需求数量为空---------')
      util._showToast('需求数量不能为空')
    } else if (util.isEmpty(this.data.demand_budget)) {
      console.log('-------需求价格为空---------')
      util._showToast('需求价格不能为空')
    } else if (util.isEmpty(this.data.demand_desc)) {
      console.log('-------需求描述为空---------')
      util._showToast('需求描述不能为空')
    } else if (util.isEmpty(this.data.demand_pic)) {
      console.log('-------需求图片为空---------')
      util._showToast('需求图片不能为空')
    } else if (util.isEmpty(this.data.region)) {
      console.log('-------需求地点为空---------')
      util._showToast('需求地点不能为空')
    } else if (util.isEmpty(this.data.demand_other)) {
      console.log('-------其他需求为空---------')
      util._showToast('其他需求不能为空')
    }

  },





  /**
   * 网络请求
   */

  //获取需求信息
  getDemandInfo() {
    http.request({
        url: config.API_DEMANDINFO,
        data: {
          demand_id: this.data.demand_id,
          login_id: wx.getStorageSync('login_id'),
          show_type: 2, //类型 1 需求详情 2 修改需求详情
          source:'xcx'
        }
      })
      .then(res => {
        console.log('----------获取到需求信息了---------')
        console.log(res)
        this.setData({
          demand_desc: res.data.demand_desc,
          demand_name: res.data.demand_name,
          demand_number: res.data.demand_number,
          demand_other: res.data.demand_other,
          region: res.data.project_address.split(","),
          demand_pic: res.data.demand_picsInfo,
          demand_budget:res.data.demand_budget,
          isRegion:true
        })
        if (res.data.demand_budget == '面议') {
          this.setData({
            isDiscussPersonally: true,
          })
        } else {
          let demand_budget=res.data.demand_budget.split(",")
          this.setData({
            min:demand_budget[0],
            max: demand_budget[1],
            demand_budget:res.data.demand_budget.split(",")
          })
        }

        
      })
  },

  //发布接口
  publishRequest() {
    http.request({
        url: config.API_PUBLISHDEMAND,
        data: {
          source: 'xcx',
          login_id: wx.getStorageSync('login_id'),
          demand_name: this.data.demand_name,
          demand_number: this.data.demand_number,
          demand_budget: this.data.demand_budget,
          demand_desc: this.data.demand_desc,
          project_address: this.data.region,
          demand_pic: JSON.stringify(this.data.demand_pic),
          demand_other: this.data.demand_other
        },
      })
      .then(res => {
        console.log('--------发布成功了-------')
        console.log(res)
        util._showToastSuccessBack('发布成功')
      })
      .catch(err=>{
        console.log('-----错误------')
        console.log(err)
        util._showToast(err.errorMsg)
      })
  },


  //修改接口
  changeRequest() {
    http.request({
      url: config.API_CHANGEDEMAND,
      data: {
        demand_id: this.data.demand_id,
        login_id: wx.getStorageSync('login_id'),
        demand_name: this.data.demand_name,
        demand_number: this.data.demand_number,
        demand_budget: this.data.demand_budget.toString(),
        demand_desc: this.data.demand_desc,
        project_address: this.data.region,
        demand_pic: JSON.stringify(this.data.demand_pic),
        demand_other: this.data.demand_other
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