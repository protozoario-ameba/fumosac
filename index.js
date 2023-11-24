const dotenv = require("dotenv")
dotenv.config()

const express = require('express')
const app = express()
const port = process.env.PORT
const mongoose = require('mongoose')


// Conexion a la base de datos
mongoose.connect(process.env.mongodb_url,(error)=>{
  if (error){
    console.log("Error al conectar a la base de datos")
  }else{
    console.log("Conectado a la base de datos")
  }
})

// servir archivos estaticos

// Middleware de archivos staticos
app.use(express.static('public'))

// Middleware para parsear el body de la request
 app.use(express.json())

// Middleware (preprocesamiento de request)
// son siempre => funciones 
// pasamos una funcion anonima 
//app.use((req,res,next)=>{
//  console.log("No especificamos como debe ser la ruta")
//  console.log("Middleware number one")
//  next()  
//})

// b) Pasamos una funcion retornada por otra funcion/metodo
//  const logger = {
//    logthis: (whattolog) => {
//      return(req,res,next) => {
//        console.log("Middleware 2:",whattolog)
//        next()
//      }
//    },
//  }

//app.use(logger.logthis("Logueame estooooooooooo"))

// Middleware para parsear body de la request (como en el caso c) 1


app.post("/api/task",(req,res,next)=>{
  const body = req.body
  console.log({body})
  res.status(201).json({ok:true,message:"Tarea creada con exito"})
})


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