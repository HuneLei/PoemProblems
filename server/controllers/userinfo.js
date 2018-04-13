const dbUtils = require('../utils/db-util.js')

module.exports = async ctx => {
  let result = await dbUtils.select(
    'user_info_table',
    ['*']
  );
  if (Array.isArray(result) && result.length > 0) {
    result = result[0]
  } else {
    result = null
  }
  ctx.state.data = result;
}

