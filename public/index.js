console.log("Este js va a ser procesado por el navegador")

const button = document.querySelector("button")

console.log({button})

// Desarrollar la funcionalidad a los botones

button.addEventListener("click",function(){
    fetch("http://localhost:4000/users")

})

// Functions 
// syntan and definitions ( paramters and arguments)
// params : default values & order
// data type coertions & error handlgn
// named vs arrow
// anonymus function
// "this" object
// hoisting

// "named function" defintion
function suma(para1,para2){
  console.log({para1,para2})
  if (typeof para1 !=="number" || typeof para2 !=="number"){
    throw error("Ambos argumentos deben ser del tipo 'number'")
  }
  if (!para1 || !para2){
    throw error("Ambos parametros son obligatorios")
  }
  
  let total = para1+para2
  return total  
} 

const arg1 = 3
const arg2 = 5

// invoke , call or execute a function
console.table({
    constans: suma(arg1,arg2),
    values: suma(4,6),
    expresions: suma(1+2,4*5),
    error1: suma(1),
    error2: suma(1,"2"),
    error3: suma("loco","aldo")
})

// arrow function
// example 1
const exp = (par1,par2=2)=>{
  let resultado = par1*par2
  return resultado  
}

// example 2
const exp1 = (par1,par2=2)=> par1*par2  

// this object
const calculations = {
  suma,
  exp1
}

