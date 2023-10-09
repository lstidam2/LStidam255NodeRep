const express = require('express');
const morgan = require('morgan');
const mongoose = require('mongoose');
const classRoutes = require('./routes/classRoutes')

// express app
const app = express();

// connect to mongodb & listen for requests
const dbURI = 'mongodb+srv://netninja:test1234@cluster0.9mvksbm.mongodb.net/node-tuts'
mongoose.connect(dbURI, { useNewUrlParser: true, useUnifiedTopology: true })
  .then(result => app.listen(3000))
  .catch(err => console.log(err));

// register view engine
app.set('view engine', 'ejs');

// middleware & static files
app.use(express.static('public'));
app.use(express.urlencoded({ extended: true }));
app.use(morgan('dev'));
app.use((req, res, next) => {
  res.locals.path = req.path;
  next();
});

// routes
app.get('/', (req, res) => {
  res.redirect('/classes');
});

app.get('/about', (req, res) => {
  res.render('about', { title: 'About' });
});

// class routes
app.use('/classes', classRoutes);


// 404 page
app.use((req, res) => {
    res.status(404).render('404', { title: '404' });
});