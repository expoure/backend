const express = require('express')
const jwt = require('jsonwebtoken')

const loginRouter = require('./login')
const internetPlanRouter = require('./internetPlan')

const router = express.Router()

router.use('/login', loginRouter)
router.use('/internet-plan', internetPlanRouter)

module.exports = router
