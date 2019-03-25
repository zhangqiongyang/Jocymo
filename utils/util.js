const formatTime = date => {
  const year = date.getFullYear()
  const month = date.getMonth() + 1
  const day = date.getDate()
  const hour = date.getHours()
  const minute = date.getMinutes()
  const second = date.getSeconds()

  return [year, month, day].map(formatNumber).join('/') + ' ' + [hour, minute, second].map(formatNumber).join(':')
}

const formatNumber = n => {
  n = n.toString()
  return n[1] ? n : '0' + n
}


// 提示框，showToast
function _showToast(title) {
  wx.showToast({
    icon: "none",
    title: title,
  })
}


// 成功提示框，showToast
function _showToastSuccess(title) {
  wx.showToast({
    title: title,
    duration: 2000,
  })
}

// 成功提示框带返回，showToast
function _showToastSuccessBack(title) {
  wx.showToast({
    title: title,
    duration: 2000,
    success: function (res) {
      wx.navigateBack({
        delta: 1,
      })
    },
  })
}


//判断字符是否为空的方法
function isEmpty(obj) {
  if (typeof obj == "undefined" || obj == null || obj == "") {
    return true;
  } else {
    return false;
  }
}



module.exports = {
  formatTime: formatTime,
  _showToast,
  _showToastSuccess,
  _showToastSuccessBack,
  isEmpty
}