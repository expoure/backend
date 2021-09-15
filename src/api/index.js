const express = require('express')
const jwt = require('jsonwebtoken')

const loginRouter = require('./login')
const internetPlanRouter = require('./internetPlan')
const leadRouter = require('./lead')

const router = express.Router()

router.use('/login', loginRouter)
router.use('/internet-plan', internetPlanRouter)
router.use('/lead', leadRouter)

module.exports = router
