// 用户信息获取和新建方法
const userInfoService = require('../services/user-info')
const userCode = require('../codes/user')

/**
 * 根据用户信息的openId查询用户其他信息
 * @param {Object} userinfo 用户信息
 * @return {Object || false} 完善后的用户信息
 */
module.exports = async (userinfo) => {
    // 获取openId查询是否存在该用户
    let existOne = await userInfoService.getUserInfoByOpenId(userinfo.openId);
    if (existOne) {
        userinfo.haveTimes = existOne.have_times
        // 将查询后的信息进行组装
        Object.assign(userinfo, {
            haveTimes: existOne.have_times,
            overTimes: existOne.over_times,
            highestScore: existOne.highest_score
        });
        return userinfo;
    } else {
        // 如果没有将添加一条新的信息
        let userResult = await userInfoService.create({
            open_id: userinfo.openId,
            username: userinfo.nickName,
            have_times: 1,
            over_times: 0,
            highest_score: 0,
        })
        // 将信息进行组装
        if (userResult && userResult.insertId * 1 > 0) {
            Object.assign(userinfo, {
                haveTimes: 1,
                overTimes: 0,
                highestScore: 0
            });
            return userinfo;
        } else {
            throw new Error(`${userCode.ERROR_SYS}`)
            return false;
        }
    }
}