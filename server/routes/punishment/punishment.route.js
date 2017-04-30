const express = require('express')
const queryHelper = require('../../utilities/query')
const Punishment = require('./punishment.model')

const router = express.Router()

router.get('/all', (req, res) => {
  queryHelper.queryAndResponse({
    sql: Punishment.getAllPunishment(),
    req: req,
    res: res
  })
})

router.get('/filter', (req, res) => {
  const filterList = req.query
  queryHelper.queryAndResponse({
    sql: Punishment.filterStudentSQL(filterList),
    req: req,
    res: res
  })
})

router.post('/insert', (req, res) => {
  const data = req.body.data
  queryHelper.queryAndResponse({
    sql: Punishment.insertPunishment(data),
    req: req,
    res: res
  })
})

router.post('/delete', (req, res) => {
  const data = req.body.data
  queryHelper.queryAndResponse({
    sql: Punishment.deletePunishment(data),
    req: req,
    res: res
  })
})

router.post('/update', (req, res) => {
  const data = req.body.data
  queryHelper.queryAndResponse({
    sql: Punishment.updatePunishment(data),
    req: req,
    res: res
  })
})

module.exports = router