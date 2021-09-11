const express = require('express')
const { verifyJWT } = require('../utils/authenticate')
const router = express.Router()
// const { body, check, validationResult } = require('express-validator')

router.get('/', verifyJWT, async (req, res) => {
  return res.json({ info: 'oi, tits' })
})

module.exports = router
