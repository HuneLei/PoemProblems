const userInfoService = require('../services/user-info')

module.exports = async ctx => {
  let result = await userInfoService.findUserData(0, 10, 'highest_score');
  if (Array.isArray(result) && result.length <= 0) {
    result = null
  }
  ctx.state.data = result;
}

