const express = require('express')

const loginRouter = require('./login')
const internetPlanRouter = require('./internetPlan')
const leadRouter = require('./lead')
const addressRouter = require('./address')

const router = express.Router()

router.use('/login', loginRouter)
router.use('/internet-plans', internetPlanRouter)
router.use('/leads', leadRouter)
router.use('/addresses', addressRouter)

module.exports = router
