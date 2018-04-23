const userInfoService = require('../services/user-info')

module.exports = async ctx => {
    let result = await userInfoService.updateDataByOpenId(
        {
            highest_score: '12'
        }, '1');
    if (!result) {
        result = null
    }
    ctx.state.data = result;
}