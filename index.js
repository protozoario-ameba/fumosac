const dotenv = require("dotenv")
dotenv.config()


const express = require('express')
const app = express()
const port = process.env.PORT
const mongoose = require('mongoose')
const schema = mongoose.Schema 


// Conexion a la base de datos 
mongoose.connect(process.env.mongodb_url).then(()=>{
    console.log("Conexion exitosa con la base da datos")
  }).catch((err)=>{
    console.log("hubo un error al conectarnos a la base de datos",{err})
  })  

const taskSchema = new schema({
  name: String,
  done: Boolean
//  description: String,
//  status: String
})  

const task = mongoose.model("task",taskSchema,"Tasks")



// Middleware para parsear body de la request
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


app.post("/api/task",(req,res)=>{
    const body = req.body
    const id= req.params.id
    //console.log({body})
  task.create({
//      task.findByIdAndUpdate( id,{
      name: body.text,
      done: false
    })
    .then((createtask)=>{
    //  .then((updatetask)=>{
      res.status(200).json({ok:true,message:"Tarea creada con exito",data:createtask})
    })
      .catch((err)=>{
      res.status(400).json({ok:false,message:"Error al crear la tarea"})
  })
  })
  

//app.post("/api/task",(req,res)=>{
  app.put("/api/task/:id",(req,res)=>{
  const body = req.body
  const id= req.params.id
  //console.log({body})
//  task.create({
    task.findByIdAndUpdate( id,{
    name: body.text,
    //done: false
  })
  //.then((createtask)=>{
    .then((updatetask)=>{
    res.status(200).json({ok:true,message:"Tarea actualizada con exito",data:updatetask})
  })
    .catch((err)=>{
    res.status(400).json({ok:false,message:"Error al editar la tarea"})
})
})




// configurar rutas
// controlar la peticion de encontrar, traer, conseguir
app.get('/api/task', function(req, res) {
  task.find().then((tasks)=>{
    res.status(200).json({ok:true,data:tasks})
  }).catch((err)=>{
    res.status(400).json({ok:false,message:"Hubo un problema al obtener las tareas"})
  })
})

app.delete("/api/task/:id",(req,res)=>{
  const id = req.params.id
  //console.log({params:req.params,id})
  task.findByIdAndDelete(id).then((deletedtask)=>{
    res.status(200).json({ok:true,data:deletedtask})
  }).catch(()=>{
    res.status(400).json({ok:false, message:"hubo un error al eliminar la tarea"})
  })
})

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