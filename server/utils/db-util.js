const allConfig = require('../config.js');
const config = allConfig.mysql;
const mysql = require('mysql');

const knex = require('knex')({
  client: 'mysql',
  connection: {
    host: config.host,
    port: config.port,
    user: config.user,
    password: config.pass,
    database: config.database,
    charset: config.char
  }
})

const pool = mysql.createPool({
  host: config.host,
  user: config.user,
  password: config.pass,
  database: config.database,
  charset: config.char
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

let createTable = function (sql) {
  return query(sql, [])
}


let findDataById = function (table, id) {
  let _sql = "SELECT * FROM ?? WHERE id = ? "
  return query(_sql, [table, id, start, end])
}


let findDataByPage = function (table, keys, start, end, value = 'id') {
  let _sql = "SELECT ?? FROM ?? ORDER BY ?? DESC LIMIT ? , ?"
  return query(_sql, [keys, table, value, start, end])
}


let insertData = function (table, values) {
  let _sql = "INSERT INTO ?? SET ?"
  return query(_sql, [table, values])
}


let updateData = function (table, values, id) {
  let _sql = "UPDATE ?? SET ? WHERE id = ?"
  return query(_sql, [table, values, id])
}

let updateDataByOpenId = function (table, values, openId) {
  let _sql = "UPDATE ?? SET ? WHERE open_id = ?"
  return query(_sql, [table, values, openId])
}

let deleteDataById = function (table, id) {
  let _sql = "DELETE FROM ?? WHERE id = ?"
  return query(_sql, [table, id])
}


let select = function (table, keys) {
  let _sql = "SELECT ?? FROM ?? "
  return query(_sql, [keys, table])
}

let findDataByOpenId = function (table, keys, openId) {
  let _sql = "SELECT ?? FROM ?? WHERE open_id = ? "
  return query(_sql, [keys, table, openId])
}

let count = function (table) {
  let _sql = "SELECT COUNT(*) AS total_count FROM ?? "
  return query(_sql, [table])
}

module.exports = {
  knex,
  count,
  query,
  select,
  insertData,
  updateData,
  createTable,
  findDataById,
  findDataByPage,
  deleteDataById,
  findDataByOpenId,
  updateDataByOpenId
}