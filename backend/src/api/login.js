const express = require('express')
const jwt = require('jsonwebtoken')
const { verifyJWT } = require('../utils/authenticate')
const router = express.Router()
const { body, check, validationResult } = require('express-validator')
const user = require('../models/User')
const UserService = require('../services/user')

const userService = new UserService(user)

router.post(
  '/',
  body('user').not().isEmpty().trim().escape(),
  check('password')
  .not().isEmpty(),
  async (req, res) => {
    try {
      const admin = await user.findOne({ where: { email: req.body.email, password: req.body.password} });
      if(admin){
        const id = admin.id;
        const token = jwt.sign({ id }, process.env.SECRET, {
          expiresIn: 86400
        });
  
        res.status(201).json({ auth: true, token: token });
      }
      else {
        res.status(404).json({message: 'Login inválido!'});
      }
    } catch (error) {
      res.status(500).json({message: 'Login inválido!'});
    }

})

router.get('/', verifyJWT, async (req, res) => {
  const users = await userService.getAll()
  res.status(200).json(users)
})

module.exports = router
