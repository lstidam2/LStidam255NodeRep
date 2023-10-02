const express = require('express');
const morgan = require('morgan');
const mongoose = require('mongoose');
const Blog = require('./models/blog');



//express app 
const app = express();

//database
const dbURI='mongodb+srv://netninja:test1234@cluster0.9mvksbm.mongodb.net/node-tuts'
mongoose.connect(dbURI, { useNewUrlParser: true, useUnifiedTopology: true } )
    .then((result)=> app.listen(3000))
    .catch((err)=>console.log(err))


//register view engine
app.set('view engine', 'ejs');



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

/*mongoose sandbox routes
app.get('/add-blog', (req, res)=> {
    const blog = new Blog({
       title: 'new blog 2',
       snippet: "about my new blog",
       body:'more about my new blog',
    });

    blog.save()
        .then((result)=>{
            res.send(result)
        })
        .catch((err)=>{
            console.log(err);
        });
})

app.get('/all-blogs', (req, res)=>{
    Blog.find()
        .then((result) =>{
            res.send(result);
        })
        .catch((err)=>{
            console.log(err);
        })
})

app.get('/single-blog', (req, res)=>{
    Blog.findById('651b2e1f1f4ba96faee64d1c')
    .then((result)=>{
        res.send(result)
    })
    .catch((err)=>{
        console.log(err);
    })
})
*/


//respond
app.get('/', (req, res)=>{
    res.redirect('/blogs');

});

app.get('/about', (req, res)=>{
    //res.sendFile('./views/about.html', {root: __dirname})
    res.render('about', { title: 'About'})
});

//blog routes

app.get('/blogs', (req, res)=>{
    Blog.find().sort({createdAt:-1})
        .then((result)=>{
            res.render('index', {title: "All Blogs", blogs: result })
        })
        .catch((err)=>{
            console.log(err)
        })
})

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