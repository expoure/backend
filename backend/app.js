const express = require('express')
const cors = require('cors')
require("dotenv-safe").config()
const routers = require('./src/api')
require('./src/database');
const app = require('./config/express')();
const port = app.get('port');
app.use(cors())
app.use(express.json())
app.use('/', routers)

app.listen(port, () => {
    console.log(`App running on port ${process.env.PORT}.`)
})
