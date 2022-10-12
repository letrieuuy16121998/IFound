const express = require('express')
const app = express()
const port = 3000
const mongoose = require('mongoose');
const path = require('path');
const logger = require('morgan');

// khai báo các router
const loginRouter = require('./routes/login')
const productRouter = require('./routes/product')
const categoryRouter = require('./routes/category')

app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'hbs');


app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(express.static(path.join(__dirname, 'public'))); 

//import các router
app.use('/', loginRouter);
app.use('/products', productRouter);
app.use('/categories', categoryRouter);

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})

