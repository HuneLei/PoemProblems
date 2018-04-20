/**
 *  整合所有子路由
 */
const router = require('koa-router')()
const weapp = require('./weapp');

router.use('/weapp', weapp.routes(), weapp.allowedMethods());

module.exports = router