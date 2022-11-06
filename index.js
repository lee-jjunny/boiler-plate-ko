const express = require('express')
const app = express()
const port = 5000

const mongoose = require('mongoose');
mongoose.connect('mongodb+srv://jun:1111@boilerplate.y6shdes.mongodb.net/?retryWrites=true&w=majority')
.then(() => console.log('MongoDB Connected...'))
.catch(err => console.log('MongoDB err >> ', err))

app.get('/', (req, res) => {
  res.send('Hello World! 하하하이!')
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})