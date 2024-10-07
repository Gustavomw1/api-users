const express = require('express')
const db = require('./router/rotas')

const app = express()

app.use(express.json())
app.use(router)

app.listen(3000), (req, res) => {
    console.log('ok')
}