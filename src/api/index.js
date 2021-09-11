const express = require('express')

const titsRouter = require('./tits')

const router = express.Router()

router.get('/', (req, res) => {
  console.log('funcionando')
  res.send('App online!')
})

router.use('/tits', titsRouter)

module.exports = router
