const express = require('express')
const cors = require('cors')
const bodyParser = require('body-parser')
require("dotenv-safe").config()
const jwt = require('jsonwebtoken')
const routers = require('./src/api')
// const { sequelize } = require('./models')

const app = require('./config/express')();
const port = app.get('port');
app.use(cors())
app.use(express.json())
app.use('/', routers)

// app.use(bodyParser.json())
// app.use(
//   bodyParser.urlencoded({
//     extended: true,
//   })
// )

// app.get('/tits', verifyJWT, (request, response) => {
//   response.json({ info: 'oi, tits' })
// })

// sequelize.sync().then(() => {
//   console.log('conectado com o banco de dados.')
// })

app.listen(port, () => {
    console.log(`App running on port ${process.env.PORT}.`)
})

//authentication
// app.post('/login', (req, res, next) => {
//     //esse teste abaixo deve ser feito no banco de dados
//     if(req.body.user === 'luiz' && req.body.pwd === '123'){
//       //auth ok
//       const id = 1; //esse id viria do banco de dados
//       const token = jwt.sign({ id }, process.env.SECRET, {
//         expiresIn: 86400 // expires in 5min
//       });
//       return res.json({ auth: true, token: token });
//     }
    
//     res.status(500).json({message: 'Login inválido!'});
// })

// function verifyJWT(req, res, next){
//     const token = req.headers['x-access-token'];
//     if (!token) return res.status(401).json({ auth: false, message: 'No token provided.' });
    
//     jwt.verify(token, process.env.SECRET, function(err, decoded) {
//       if (err) return res.status(500).json({ auth: false, message: 'Failed to authenticate token.' });
      
//       // se tudo estiver ok, salva no request para uso posterior
//       req.userId = decoded.id;
//       next();
//     });
// }
