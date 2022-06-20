const express = require('express')
const app = express()
const port = process.env.PORT || 3000

app.get('/', (req, res) => {
  res.status(200).send({msg: 'Hello, World!'})
})

app.get('/testando', (req, res) => {
  res.status(201).send({msg: 'Hello from /testando'})
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})