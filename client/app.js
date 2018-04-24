//app.js
var qcloud = require('./vendor/wafer2-client-sdk/index')
var util = require('./utils/util.js')
var config = require('./config')

function user_login(that) {
  qcloud.login({
    success(result) {
      if (result) {
        util.showModel('登录成功');
        wx.setStorageSync('user_info', result)
      } else {
        // 如果不是首次登录，不会返回用户信息，请求用户信息接口获取
        qcloud.request({
          url: config.service.requestUrl,
          login: true,
          success(result) {
            util.showSuccess('登录成功')
            wx.setStorageSync('user_info', result.data.data)
          },
          fail(error) {
            util.showModel('请求失败', error)
            console.log('request fail', error)
          }
        })
      }
    },
    fail(error) {
      util.showModel('登录失败!', error);
    }
  })
}

App({
  /**
 * 页面的初始数据
 */
  onLaunch: function () {
    qcloud.setLoginUrl(config.service.loginUrl);
    wx.getSetting({
      success(res) {
        if (!res.authSetting['scope.userInfo']) {
          wx.authorize({
            scope: 'scope.userInfo',
            success() {
              user_login();
            }
          })
        } else {
          user_login();
        }
      }
    })
  }
})