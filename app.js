const express = require('express')
const cors = require('cors')
require("dotenv-safe").config()
const routers = require('./src/api')
// const { sequelize } = require('./src/models')
require('./src/database');
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

// sequelize.sync().then(() => {
//   console.log('conectado com o banco de dados.')
// })

app.listen(port, () => {
    console.log(`App running on port ${process.env.PORT}.`)
})
