const express = require('express')
const { verifyJWT } = require('../utils/authenticate')
const lead = require('../models/Lead')
const router = express.Router()
const LeadService = require('../services/lead')

const leadService = new LeadService(lead)

router.get('/', verifyJWT, async (req, res) => {
  const leads = await leadService.getAll()
  res.status(200).json(leads)
})

router.post('/', verifyJWT, async (req, res) => {
    const { name, email, cpf, internet_plan_id } = req.body
    try {
      await leadService.add({ name, email, cpf, internet_plan_id })
      res.status(201).send('Lead adicionado com sucesso!')
    } catch (erro) {
      res.status(400).send(erro.message)
    }
})

router.delete('/:lead_id', verifyJWT, async (req, res) => {
  const { lead_id } = req.params;

  try {
    await leadService.delete(lead_id);
    res.status(201).send('Lead removido com sucesso')
  } catch (erro) {
    res.status(400).send(erro.message)
  }
})

router.patch('/:lead_id', verifyJWT, async (req, res) => {
  try {
    await leadService.update( {...req.body, id: req.params.lead_id });
    res.status(201).send('Lead atualizado com sucesso')
  } catch (erro) {
    res.status(400).send(erro.message)
  }
})

module.exports = router
