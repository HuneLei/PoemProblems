//app.js
var qcloud = require('./vendor/wafer2-client-sdk/index')
var util = require('./utils/util.js')
var config = require('./config')

App({
  /**
 * 页面的初始数据
 */
  data: {
    userInfo: {},
    logged: false,
  },
  onLaunch: function () {
    qcloud.setLoginUrl(config.service.loginUrl);
    // wx.login({
    //   success: function (res) {
    //     console.log('code', res)
    //     if (res.code) {
    //       wx.request({
    //         url: 'https://api.weixin.qq.com/sns/jscode2session?appid=wx9a26d73bc4e6f87f&secret=961a031cfec1c4a6e70c1facf304a0be&js_code=' + res.code + '&grant_type=authorization_code',
    //         success: function (res) {
    //           console.log(res.data)
    //         }
    //       })
    //     } else {
    //       console.log('登录失败！' + res.errMsg)
    //     }
    //   },
    //   fail: function (res) {
    //     console.log('登录失败！' + res.errMsg)
    //   }
    // });
    // wx.checkSession({
    //   success: function () {
        //session_key 未过期，并且在本生命周期一直有效
        // console.log('cccccccc')
      // },
      // fail: function () {
      //   console.log('bbbbbb')
        // session_key 已经失效，需要重新执行登录流程
        // wx.login() //重新登录
      // }
    // })
    // wx.getUserInfo({
    //   success: function (res) {
    //     console.log('res', res)
    //     var userInfo = res.userInfo
    //     var nickName = userInfo.nickName
    //     var avatarUrl = userInfo.avatarUrl
    //     var gender = userInfo.gender //性别 0：未知、1：男、2：女
    //     var province = userInfo.province
    //     var city = userInfo.city
    //     var country = userInfo.country
    //   }
    // })
    // wx.openSetting({
    //   success: (res) => {
    //     console.log('ressssssss', res)
    /*
     * res.authSetting = {
     *   "scope.userInfo": true,
     *   "scope.userLocation": true
     * }
     */
    // },
    // fail: (res) =>{

    // }
    // })
    // wx.getSetting({
    //   success(res) {
    //     console.log('resg', res)
    //     if (!res.authSetting['scope.userInfo']) {
    //       wx.authorize({
    //         scope: 'scope.userInfo',
    //         success() {
    //           // 用户已经同意小程序使用录音功能，后续调用 wx.startRecord 接口不会弹窗询问
    //           wx.getUserInfo({
    //             success: function (res) {
    //               var userInfo = res.userInfo
    //               var nickName = userInfo.nickName
    //               var avatarUrl = userInfo.avatarUrl
    //               var gender = userInfo.gender //性别 0：未知、1：男、2：女
    //               var province = userInfo.province
    //               var city = userInfo.city
    //               var country = userInfo.country
    //               console.log('res', res)
    //             },
    //             fail: function (res) {
    //               console.log('失败！')
    //             }
    //           })
    //         },
    //         fail: function (res) {
    //           console.log('失败了！')
    //         }
    //       })
    //     } else {
    //       wx.getUserInfo({
    //         success: function (res) {
    //           var userInfo = res.userInfo
    //           var nickName = userInfo.nickName
    //           var avatarUrl = userInfo.avatarUrl
    //           var gender = userInfo.gender //性别 0：未知、1：男、2：女
    //           var province = userInfo.province
    //           var city = userInfo.city
    //           var country = userInfo.country
    //           console.log('res', res)
    //         },
    //         fail: function (res) {
    //           console.log('失败！')
    //         }
    //       })
    //     }
    // }
    // })
  }
})