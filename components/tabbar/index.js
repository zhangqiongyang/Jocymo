// components/tabbar/index.js

import {
  HTTP
} from '../../utils/http-p.js'
let http = new HTTP()

import {
  config
} from '../../config.js'

const util = require('../../utils/util.js')


Component({
  /**
   * 组件的属性列表
   */
  properties: {
    msg_type: String,
    msg_id: String,
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
    //跳转到写留言
    toMessage(event) {
      console.log(event)
      let id = event.currentTarget.dataset.id,
        type = event.currentTarget.dataset.type
      wx.navigateTo({
        url: '/pages/sub_newsSearch/pages/message/message?type=' + type + '&id=' + id,
      })
    },

    // 点赞
    like(event) {
      console.log(event)
      if(this.properties.msg_type == 'product'){
        this.setData({
          type_id:2
        })
      } else if (this.properties.msg_type == 'case'){
        this.setData({
          type_id: 3
        })
      } else if (this.properties.msg_type == 'demand') {
        this.setData({
          type_id: 4
        })
      } else if (this.properties.msg_type == 'bussiness') {
        this.setData({
          type_id: 5
        })
      } else if (this.properties.msg_type == 'news') {
        this.setData({
          type_id: 6
        })
      }
      //点赞接口
      this.likeRequest()
    },

    //点赞接口
    likeRequest() {
      http.request({
        url: config.API_LIKE,
        data: {
          login_id: wx.getStorageSync('login_id'),
          source: 'xcx',
          praise_type: 2,//1留言 2其他类型
          data_id: this.properties.msg_id, //产品、案例、需求、商家、新闻
          type_id: this.data.type_id //2产品/3案例/4需求/5商家/6新闻
        }
      })
      .then(res=>{
        console.log('--------点赞成功----------')
        util._showToastSuccess('点赞成功')
      })
    }

  }
})