var express = require('express');
var bodyparser = require('body-parser');
var {ObjectID} = require('mongodb');

var {mongoose} = require('./db/mongoose');
var {Todo} = require('./models/todo');
var {User} = require('./models/users');

var app = express();
const port = process.env.PORT || 3000;

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
  });
});

//GET /todos/12345
app.get('/todos/:id',(req,res) => {
  var id = req.params.id;
  if  (!ObjectID.isValid(id)) {
      return res.status(404).send();
  }
  Todo.findById(id).then((todo) => {
     if (!todo) {
       return res.status(404).send();
     }
     res.send({todo});
  }).catch((e) => {
       res.status(400).send();
  });
  //res.send(req.params);
});

app.listen(port, () => {
  console.log(`Started up at port ${port}`);
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
