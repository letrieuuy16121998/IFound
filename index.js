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

// catch 404 and forward to error handler
app.use(function(req, res, next) {
  next(createError(404));
});

//Kết nối DB
mongoose.connect('mongodb+srv://iFound:<password>@cluster0.chha5kj.mongodb.net/?retryWrites=true&w=majority', {  
  useNewUrlParser: true,
  useUnifiedTopology: true
})
.then(() => {
  console.log('>>>>>>>>>> DB Connected!!!!!!')
  app.listen(port, () => {
    console.log(`Example app listening on port ${port}`)
  })
})
.catch(err => console.log('>>>>>>>>> DB Error: ', err));

// error handler
app.use(function(err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};

  // render the error page
  res.status(err.status || 500);
  res.render('error');
});

module.exports = app;

