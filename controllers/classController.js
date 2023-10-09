const Blog = require('../models/classes');

const class_index = (req, res) => {
  Blog.find().sort({ createdAt: -1 })
    .then(result => {
      res.render('classes/index', { courses: result, title: 'All Classes' });
    })
    .catch(err => {
      console.log(err);
    });
}

const class_details = (req, res) => {
  const id = req.params.id;
  Blog.findById(id)
    .then(result => {
      res.render('classes/details', { course: result, title: 'Blog Details' });
    })
    .catch(err => {
      console.log(err);
    });
}

const class_create_get = (req, res) => {
  res.render('classes/create', { title: 'Create a new class' });
}

const class_create_post = (req, res) => {
  const course = new Blog(req.body);
  course.save()
    .then(result => {
      res.redirect('/classes');
    })
    .catch(err => {
      console.log(err);
    });
}

const class_delete = (req, res) => {
  const id = req.params.id;
  Blog.findByIdAndDelete(id)
    .then(result => {
      res.json({ redirect: '/classes' });
    })
    .catch(err => {
      console.log(err);
    });
}

module.exports = {
  class_index, 
  class_details, 
  class_create_get, 
  class_create_post, 
  class_delete,
}