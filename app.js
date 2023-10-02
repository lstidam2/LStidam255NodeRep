const express = require('express');
const morgan = require('morgan')



//express app 
const app = express();

//database
const dbURI='mongodb+srv://netninja:test1234@cluster0.9mvksbm.mongodb.net/'

//register view engine
app.set('view engine', 'ejs');

//listen for request
app.listen(3000);

//middle ware
//app.use((req, res, next)=>{
    //console.log("new request made:")
    //console.log("host: ", req.hostname)
    //console.log('path: ', req.path);
    //console.log('method: ', req.method);
    //next();
//});

app.use(express.static('public'))
app.use(morgan('dev'))



//respond
app.get('/', (req, res)=>{
    //res.sendFile('./views/index.html', {root: __dirname});
    const blogs = [
        {title: "Yoshi finds eggs", snippet:'Lorem5'},
        {title: "Mario finds stars", snippet:'Lorem5'},
        {title: "How to defeat Bowser", snippet:'Lorem5'},
    ]
    res.render('index', { title: 'Home', blogs})

});

app.get('/about', (req, res)=>{
    //res.sendFile('./views/about.html', {root: __dirname})
    res.render('about', { title: 'About'})
});


app.get('/blogs/create', (req, res)=>{
    res.render('create', { title: 'Create a New Blog'});
});

//redirects 
//app.get('/about-us', (req, res)=>{
//    res.redirect('/about');
//});

//404 page
app.use((req, res)=>{
    //res.status(404).sendFile('./views/404.html', {root: __dirname});
    res.status(404).render('404', { title: '404'});
})