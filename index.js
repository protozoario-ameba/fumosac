const dotenv = require("dotenv")
//dotenv.config()

//const dotenv = {
//    config : function(){
//        console.log("Metodo del objeto dot env")
//    }
//}

//dotenv.config()

const http = require("http")

//const exportsfromanother = require("./another")
//console.log({exportsfromanother})

function requirecontroller(){
    console.log("Aqui hay un nuevo pedido, que pasa, esto es nuevo")
}

const server = http.createServer(requirecontroller)

const PORT = process.env.PORT



server.listen(4000,function(){
//    console.log({env: process.env})
console.log("Aplicacion corriendo en el puerto: " + PORT)
})




