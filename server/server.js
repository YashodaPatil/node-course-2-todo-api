var express = require('express');
var bodyparser = require('body-parser');

var {mongoose} = require('./db/mongoose');
var {Todo} = require('./models/todo');
var {User} = require('./models/users');

var app = express();

app.use(bodyparser.json());

app.post('/todos',(req,res) => {
  //console.log(req.body);
  var todo = new Todo({
    text: req.body.text
  });
  todo.save().then((doc) => {
    res.send(doc);
  },(e) => {
    res.status(400).send(e);
  });
});

app.get('/todos', (req,res) => {
  Todo.find().then((todos) => {
    res.send({todos});
  }, (e) => {
    res.send(400).send(e);
  })
})

app.listen(3000, () => {
  console.log('started om port 3000');
});

module.exports = {app};


// var otherTodo = new Todo({
//   text: 'Something to do'
// });
//
// otherTodo.save().then((doc) => {
//   console.log(JSON.stringify(doc, undefined, 2));
// }, (e) => {
//   console.log('Unable to save', e);
// });

// User
// email - require it - trim it - set type - set min length of 1
