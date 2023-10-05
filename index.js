
const http = require("http")

const exportsfromanother = require("./another")
console.log({exportsfromanother})



function requirecontroller(){
    console.log("Aqui hay un nuevo pedido, que pasa, esto es nuevo")
}

const server = http.createServer(requirecontroller)

server.listen(4000)




