const mongoose = require('mongoose')

mongoose.connect('mongodb://localhost/mydatabase')
  .then(db => console.log('DB conectada a', db.connection.host))
  .catch(err => console.log("este es el error", err))