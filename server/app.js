const Koa = require('koa')
const config = require('./config')
const router = require('./routes')
const debug = require('debug')('koa-weapp-demo')
const response = require('./middlewares/response')
const bodyParser = require('koa-bodyparser')  

const app = new Koa()

// 使用响应处理中间件
app.use(response)

// 解析请求体
app.use(bodyParser())

// 引入路由分发
app.use(router.routes(), router.allowedMethods())

// 启动程序，监听端口
app.listen(config.port, () => debug(`listening on port ${config.port}`))
