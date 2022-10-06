const express = require('express')
const app = express()
const port = 3000
const mongoose = require('mongoose');

app.get('/tin-tuc', (req, res) => {
  res.send('Hello World!')
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})

