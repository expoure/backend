const express = require('express')
const { verifyJWT } = require('../utils/authenticate')
const address = require('../models/Address')
const router = express.Router()
const AddressService = require('../services/address')

const addressService = new AddressService(address)

router.get('/', verifyJWT, async (req, res) => {
  const addresses = await addressService.getAll()
  res.status(200).json(addresses)
})

router.post('/add/:lead_id', verifyJWT, async (req, res) => {
    const { zipcode, street, number } = req.body
    try {
      console.log(req.params)
      await addressService.add({ zipcode, street, number, lead_id: req.params.lead_id })
      res.status(201).send('Endereço adicionado com sucesso!')
    } catch (erro) {
      res.status(400).send(erro.message)
    }
})

router.delete('/:address_id', verifyJWT, async (req, res) => {
  const { address_id } = req.params;

  try {
    await addressService.delete(address_id);
    res.status(201).send('Endereço removido com sucesso')
  } catch (erro) {
    res.status(400).send(erro.message)
  }
})

router.patch('/:address_id', verifyJWT, async (req, res) => {
  try {
    await addressService.update( {...req.body, id: req.params.address_id });
    res.status(201).send('Endereço atualizado com sucesso')
  } catch (erro) {
    res.status(400).send(erro.message)
  }
})

module.exports = router
