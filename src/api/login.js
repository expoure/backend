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
  check('pwd')
  .not().isEmpty(),
  async (req, res) => {
    const admin = await user.findOne({ where: { email: req.body.email, password: req.body.password} });
    if(admin){
      const id = admin.id;
      const token = jwt.sign({ id }, process.env.SECRET, {
        expiresIn: 86400 // expires in 5min
      });
      return res.json({ auth: true, token: token });
    }
    
    res.status(500).json({message: 'Login inválido!'});
})

router.get('/', verifyJWT, async (req, res) => {
  const users = await userService.getAll()
  res.status(200).json(users)
})

module.exports = router
