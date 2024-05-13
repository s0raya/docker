const express = require('express')
const app = express()
const PORT = 3000

require('./db')

app.use('/', (req, res) => {
  return res.send('Aprendiendo docker')
})

app.listen(PORT, () => {
  console.log(`Servidor corriendo en http://localhost:${PORT}`);
});