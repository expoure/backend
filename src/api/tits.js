const express = require('express')
const router = express.Router()
// const { body, check, validationResult } = require('express-validator')

router.get('/', async (req, res) => {
  return res.json({ info: 'oi, tits' })
})

module.exports = router
