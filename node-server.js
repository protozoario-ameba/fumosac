const dotenv = require("dotenv")
//dotenv.config()

//const dotenv = {
//    config : function(){
//        console.log("Metodo del objeto dot env")
//    }
//}

dotenv.config()

const http = require("http")

const fs = require("fs")

//const exportsfromanother = require("./another")
//console.log({exportsfromanother})


function requirecontroller(req,res){
    const url = req.url
    const method = req.method
    console.log({url,method})


    if (method === "GET" && url === "/") {
        res.setHeader("Conten-type","text/html")
        fs.readFile("./public/index.html",function(err,file){
            if(err){
                console.log("Hubo un error")
            }
            res.write(file)
            res.end()
        })
        return
    }

    if (method === "GET" && url === "/about") {
        res.setHeader("Conten-type","text/html")
        fs.readFile("./public/about.html",function(err,file){
            console.log({err})
            if(err){
                console.log("Hubo un error")
            }
            res.write(file)
            res.end()
//            return
        })        
        return
    }
    res.setHeader("Conten-type","text/html; chart-set=utf-8")
    res.write("<h1>Pagina no encontrada</h1>")
    res.end()
    
//    console.log("Aqui hay un nuevo pedido, que pasa, esto es nuevo")
}

const server = http.createServer(requirecontroller)

const PORT = process.env.PORT



server.listen(4000,function(){
//    console.log({env: process.env})
console.log("Aplicacion corriendo en el puerto: " + PORT)
})




