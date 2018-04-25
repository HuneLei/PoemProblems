/**
 * 小程序配置文件
 */

// 测试环境的host
var host = 'https://2dy36huw.qcloud.la';

// 本地环境的host
// var host = 'http://localhost:5757';

// 生产环境的host
// var host = 'https://837572824.hunecloud.club';

var config = {

  // 下面的地址配合云端 Demo 工作
  service: {
    host,

    // 登录地址，用于建立会话
    loginUrl: `${host}/weapp/login`,

    // 测试的请求地址，用于测试会话
    requestUrl: `${host}/weapp/user`,

    // 测试的信道服务地址
    tunnelUrl: `${host}/weapp/tunnel`,

    // 上传图片接口
    uploadUrl: `${host}/weapp/upload`,

    // 获取挑战信息接口
    getUserInfo: `${host}/weapp/userinfo`,

    // 挑战信息跟新接口
    updataUserInfo: `${host}/weapp/updateInfo`
  }
};

module.exports = config;
