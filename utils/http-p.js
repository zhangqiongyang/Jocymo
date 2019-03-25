import { config } from '../config.js'

class HTTP {

  request({url,data={}}){
    return new Promise((resolve,reject)=>{
      this._request(url, resolve, reject, data)
    })
  }

  _request(url, resolve,reject,data={}) {
    wx.request({
      url: config.api_base_url + url,
      data: data,
      header: {
        'content-type': 'application/x-www-form-urlencoded'
      },
      method: 'POST',
      success: (res) => {
        //errorCode   1、成功 2、失败
        if (res.data.errorCode == 1){
          resolve(res.data)
        }else{
          reject(res.data)
          // wx.showToast({
          //   title: res.data.errorMsg,
          //   icon: 'none',
          //   duration: 2000,
          // })
        }
        // resolve(res.data)

      },
      fail: function (res) {
        console.log('------网络请求失败-------')
        reject()
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