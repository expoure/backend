const express = require('express')
const { verifyJWT } = require('../utils/authenticate')
const { lead } = require('../models')
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
    const { description, value, download_speed, upload_speed } = req.body
    try {
      await cursoService.adicionar({ nome, ch })
      res.status(201).send('Curso adicionado com sucesso!')
    } catch (erro) {
      res.status(400).send(erro.message)
    }
  })

module.exports = router

