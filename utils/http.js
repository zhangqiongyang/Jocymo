import {config} from '../config.js'

class HTTP{
  request(params){
    wx.request({
      url: config.api_base_url + params.url,
      data: params.data,
      header: {
        'content-type': 'application/x-www-form-urlencoded'
      },
      method: 'POST',
      success: (res)=> {
        params.success(res.data)
      },
      fail: function (res) {
        console.log('------网络请求失败-------')
        wx.showToast({
          title: '错误',
          icon: 'none',
          duration: 2000,
        })
      }
    })
  }
}

export { HTTP }