const express = require('express')
const { verifyJWT } = require('../utils/authenticate')
const lead = require('../models/Lead')
const router = express.Router()
const LeadService = require('../services/lead')
const { body, check, validationResult } = require('express-validator')

const leadService = new LeadService(lead)

router.get('/', verifyJWT, async (req, res) => {
  const leads = await leadService.get()
  res.status(200).json(leads)
})

router.post('/',
  async (req, res) => {
    // const errors = validationResult(req)
    // if (!errors.isEmpty()) {
    //   return res.status(400).json({ errors: errors.array() })
    // }
    const { name, email, cpf, picture, internet_plan_id } = req.body // pegar também a id
    try {
      await leadService.adicionar({ name, email, cpf, picture, internet_plan_id })
      // Cria o endereço? { address } = req.body
      res.status(201).send('Lead adicionado com sucesso!')
    } catch (erro) {
      res.status(400).send(erro.message)
    }
  })

module.exports = router

