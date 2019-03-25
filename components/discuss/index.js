// components/discuss/index.js

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
    guestbookinfo: Array,
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
    // 留言点赞
    msglike(event) {
      console.log(event)
      const id = event.currentTarget.dataset.guestbookid
      // 留言点赞接口
      this.msgLikeRequest(id)

      let guestbookinfo = this.properties.guestbookinfo
      for (let i = 0; i < guestbookinfo.length; i++) {
        if (guestbookinfo[i].guestbook_id == id) {
          guestbookinfo[i].is_valid == 0 ? guestbookinfo[i].is_valid = 1 : guestbookinfo[i].is_valid = 0
          guestbookinfo[i].is_valid == 0 ? guestbookinfo[i].countParise ++ : guestbookinfo[i].countParise --
          guestbookinfo[i].is_valid == 0 ? util._showToastSuccess('点赞成功') : util._showToastSuccess('取消成功')
        }
      }

      this.setData({
        guestbookinfo: guestbookinfo
      })
    },

    // 留言点赞接口
    msgLikeRequest(id) {
      http.request({
          url: config.API_LIKE,
          data: {
            login_id: wx.getStorageSync('login_id'),
            source: 'xcx',
            praise_type: 1, //1留言 2其他类型
            guestbook_id: id
          }
        })
        .then(res => {
          console.log('--------点赞成功----------')
        })
    }
  }
})