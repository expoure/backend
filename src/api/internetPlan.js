const express = require('express')
const { verifyJWT } = require('../utils/authenticate')
const router = express.Router()
const { internetPlan } = require('../models')
const InternetPlanService = require('../services/internetPlan')
// const { body, check, validationResult } = require('express-validator')

const internetPlanService = new InternetPlanService(internetPlan)

router.get('/', verifyJWT, async (req, res) => {
  const internetPlans = await internetPlanService.get()
  res.status(200).json(internetPlans)
})

router.post('/',
  async (req, res) => {
    // const errors = validationResult(req)
    // if (!errors.isEmpty()) {
    //   return res.status(400).json({ errors: errors.array() })
    // }
    const { description, value, download_speed, upload_speed } = req.body
    try {
      await internetPlanService.adicionar({ description, value, download_speed, upload_speed })
      res.status(201).send('Plano adicionado com sucesso!')
    } catch (erro) {
      res.status(400).send(erro.message)
    }
  })

module.exports = router
