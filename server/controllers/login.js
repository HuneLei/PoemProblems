// 登录授权接口
const userInfoService = require('../services/user-info')
const userCode = require('../codes/user')

module.exports = async (ctx, next) => {
    // 通过 Koa 中间件进行登录之后
    // 登录信息会被存储到 ctx.state.$wxInfo
    // 具体查看：
    if (ctx.state.$wxInfo.loginState) {
        let existOne = await userInfoService.getUserInfoByOpenId(ctx.state.$wxInfo.userinfo.userinfo.openId);
        if (existOne) {
            ctx.state.$wxInfo.userinfo.userinfo.haveTimes = existOne.have_times
            Object.assign(ctx.state.$wxInfo.userinfo.userinfo, {
                haveTimes: existOne.have_times,
                overTimes: existOne.over_times,
                highestScore: existOne.highest_score
            });
            ctx.state.data = ctx.state.$wxInfo.userinfo;
            ctx.state.data['time'] = Math.floor(Date.now() / 1000);
        } else {
            let userResult = await userInfoService.create({
                open_id: ctx.state.$wxInfo.userinfo.userinfo.openId,
                username: ctx.state.$wxInfo.userinfo.userinfo.nickName,
                have_times: 1,
                over_times: 0,
                highest_score: 0,
            })
            if (userResult && userResult.insertId * 1 > 0) {
                Object.assign(ctx.state.$wxInfo.userinfo.userinfo, {
                    haveTimes: 1,
                    overTimes: 0,
                    highestScore: 0
                });
                ctx.state.data = ctx.state.$wxInfo.userinfo;
                ctx.state.data['time'] = Math.floor(Date.now() / 1000);
            } else {
                throw new Error(`${userCode.ERROR_SYS}`)
            }
        }
    }
}
