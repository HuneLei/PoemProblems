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
    },

    /**
     * 查询用户信息
     * @param {string} start    查找的起点
     * @param {string} end      查找的终点
     * @param {string} value    根据什么进行排序查询,默认为ID
     * @return {object|null}    查找结果
     */
    async findUserData(start, end, value = 'id') {
        let result = await userModels.findDataByPage(start, end, value)
        return result
    },

    /**
     * 根据openId修改用户信息
     * @param {object} model 用户数据模型
     * @param {string} openId 用户唯一标识
     */
    async updateDataByOpenId(model, openId) {
        let result = await userModels.updateDataByOpenId(model, openId)
        return result
    }
}

module.exports = user;