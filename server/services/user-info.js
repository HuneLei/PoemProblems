/**
 * 用户业务操作
 */
const userModels = require('../models/user-info')

const user = {
    /**
     * 根据openId查询用户信息 用户唯一标识
     * @param {string} openId  
     * @return {object|null}    查找结果
     */
    async getUserInfoByOpenId(openId) {
        let resultData = await userModels.getUserInfoByOpenId(openId)
        return resultData
    },

    /**
     * 创建用户
     * @param {object} user 用户信息
     * @return {object}      创建结果
     */
    async create(user) {
        let result = await userModels.createOneUserInfo(user)
        return result
    }
}

module.exports = user;