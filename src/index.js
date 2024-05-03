const express = require('express')
const app = express()
const PORT = 3000

require('./db')

app.listen(PORT, () => {
  console.log(`Servidor corriendo en http://localhost:${PORT}`);
});