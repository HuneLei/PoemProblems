const dbUtils = require('./../utils/db-util');

const user = {
    /**
     * 根据翻页查询用户信息
     * @param {string} start    查找的起点
     * @param {string} end      查找的终点
     * @return {object|null}    查找结果
     */
    async findDataByPage(start, end) {
        let result = await dbUtils.select(
            'user_info_table',
            ['*'],
            start,
            end
        )
        return result
    },

    /**
     * 根据openId查询用户信息
     * @param {string}  openId  用户唯一标识
     * @return {object|null}    查找结果
     */
    async getUserInfoByOpenId(openId) {
        let result = await dbUtils.findDataByOpenId(
            'user_info_table',
            ['*'],
            openId
        )
        if (Array.isArray(result) && result.length > 0) {
            result = result[0]
        } else {
            result = null
        }
        return result
    },

    /**
     * 
     * @param {object} model 用户数据模型
     * @return {object}      mysql执行结果
     */
    async createOneUserInfo(model) {
        let result = await dbUtils.insertData('user_info_table', model)
        return result
    }
}

module.exports = user