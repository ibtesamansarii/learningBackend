require('dotenv').config()

const express = require('express')
const app = express()
const port = 3000

app.get('/', (req, res) => {
  res.send('Hello World!')
})

app.get('/twitter', (req,res) => {
    res.send('ibtesamansari')
})

app.get('/login', (req,res) => {
    res.send('<h1> Pleaes login </h1>')
})

app.get('/hey', (req,res) => {
    res.send('<h2> hey bro </h2>')
})

app.listen(process.env.PORT, () => {
  console.log(`Example app listening on port ${port}`)
})