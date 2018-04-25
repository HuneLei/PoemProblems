const userInfoService = require('../services/user-info')

module.exports = async ctx => {
    let postData = ctx.request.body
    let result = await userInfoService.updateDataByOpenId(
        {
            highest_score: postData.score
        }, postData.openid);
    if (!result) {
        result = null
    }
    ctx.state.data = result;
}