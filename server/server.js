const express = require('express');
const app = express();
const  fs = require('fs');

const users = JSON.parse(fs.readFileSync('./db/users.json'));

app.get('/', (req, res) => {
  res.status(404).send({
    error: 'Resource not found',
    name: 'SuperTodo'
  });
});

// GET /users
// Giver users a name and age prop
app.get('/users', (req, res) => {
  console.log(users)
  res.send(users)
});


app.listen(3000);

module.exports.app = app;