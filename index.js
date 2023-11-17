const dotenv = require("dotenv")
dotenv.config()

const express = require('express')
const app = express()
const port = process.env.PORT

// servir archivos estaticos
app.use(express.static('public'))


// configurar rutas
app.get('/', (req, res) => {
  res.send('Hello World!')
})

app.get('/users',(req,res)=>{
  res.send('Usuarios nuevos')
})

// poner a escuchar
app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})