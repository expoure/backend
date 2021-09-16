const express = require('express')
const { verifyJWT } = require('../utils/authenticate')
const router = express.Router()
const internetPlan = require('../models/InternetPlan')
const InternetPlanService = require('../services/internetPlan')

const internetPlanService = new InternetPlanService(internetPlan)

router.get('/', verifyJWT, async (req, res) => {
    const internetPlans = await internetPlanService.getAll()
    res.status(200).json(internetPlans)
})

router.post('/', verifyJWT, async (req, res) => {
    const { description, value, download_speed, upload_speed } = req.body
    try {
        await internetPlanService.add({ description, value, download_speed, upload_speed })
        res.status(201).send('Plano adicionado com sucesso!')
    } catch (erro) {
        res.status(400).send(erro.message)
    }
})

module.exports = router
