var express = require('express');
var router = express.Router();
var {Todos} = require('../models/todos'); 

/* GET home page. */
router.get('/', async function(req, res, next) {
  var myData = new Todos({
    description: 'test',
    complete: true
  });
  myData.save()
  .then(item => {
    console.log("item saved to database...");
  })
  .catch(err => {
    console.log("unable to save to database...");
  });
  const todos = await Todos.find();
  console.log('todos >>>', todos);
  res.render('index', { title: 'Todos', todos: todos });
});

module.exports = router;
