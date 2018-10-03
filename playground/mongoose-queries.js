const {ObjectID} = require('mongodb');
const {mongoose} = require('./../server/db/mongoose');
const {Todo} = require('./../server/models/todo');
const {User} = require('./../server/models/users');

// var id = '5bb39966b962431b1c1860ee';
//
// if (!ObjectID.isValid(id)) {
//   console.log('Id not valid');
// }
//
// Todo.find({
//   _id: id
// }).then((todos) => {
//   console.log('Todos',todos);
// });
//
// Todo.findOne({
//   _id: id
// }).then((todo) => {
//   console.log('Todo',todo);
// });

// Todo.findById(id).then((todo) => {
//   if(!todo) {
//     return console.log('Id not found')
//   }
//     console.log('Todo by id',todo);
// }).catch((e) => console.log(e));


User.findById('5bb32155cf97ab169c51faea').then((user) => {
  if (!user) {
    console.log('Unable to find user');
  }
  console.log(JSON.stringify(user,undefined,2));
}, (e) => {
   console.log(e);
});
