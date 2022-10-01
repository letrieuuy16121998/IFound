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


mongoose.connect('mongodb+srv://admin:tai1892001@cluster0.wv2mc.mongodb.net/IFound_Application?retryWrites=true&w=majority', {  
  useNewUrlParser: true,
  useUnifiedTopology: true
})
.then(() => console.log('>>>>>>>>>> DB Connected!!!!!!'))
.catch(err => console.log('>>>>>>>>> DB Error: ', err));