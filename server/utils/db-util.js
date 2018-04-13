const allConfig = require('../config.js');
const config = allConfig.mysql;
const mysql = require('mysql');

const pool = mysql.createPool({
  host: config.host,
  user: config.user,
  password: config.pass,
  database: config.database
})

let query = function (sql, values) {
  return new Promise((resolve, reject) => {
    pool.getConnection(function (err, connection) {
      if (err) {
        resolve(err)
      } else {
        connection.query(sql, values, (err, rows) => {
          if (err) {
            reject(err)
          } else {
            resolve(rows)
          }
          connection.release()
        })
      }
    })
  })
}

let select = function (table, keys) {
  let _sql = "SELECT ?? FROM ??"
  return query(_sql, [keys, table]);
}

module.exports = {
  query,
  select
}