//const { json } = require("express")
//const { json } = require("express")

console.log("Este js va a ser procesado por el navegador")

//const button = document.querySelector("button")
const getbtn = document.querySelector("#get-task")
const createEditbtn = document.querySelector("#create-task")
const input = document.querySelector("#task-name")
const tasksDiv =  document.querySelector("#tasks")
const baseBackendUrl = "http://localhost:4000/api"
let TASK_TO_EDIT = null


getbtn.addEventListener("click",function(){
  console.log("Get tareas")
  fetch("http://localhost:4000/api/task")
})

createEditbtn.addEventListener("click",function(){
  //console.log("Crear tarea")

  const creating = !TASK_TO_EDIT
  //console.log({input})
  const path = creating ? "task" : `task/${TASK_TO_EDIT._id}`
  const method = creating ? "POST" : "PUT"
  fetch(`${baseBackendUrl}/${path}`,{
    method: method,
    headers: {"content-type":"Application/Json"},
    body: JSON.stringify({text: input.value})
}).then((res)=>{
  //console.log({res})
  gettask()
  input.value = ""
  createEditbtn.innerText = "Crear tarea"
  return res.json()
}).then((resjson=>{
    console.log({resjson})
}))
})

function gettask(){
  tasksDiv.innerHTML = null
  fetch(`${baseBackendUrl}/task`)  
  .then((res)=>{
  return res.json()
}).then((resjson)=>{
    const tasks = resjson.data
    for (const task of tasks){
      const taskparagraph = document.createElement('p')
      const deletetaskbtn =  document.createElement('button')
      const taskconteinerdiv =  document.createElement('div')
      deletetaskbtn.innerText = "Borrar"
      deletetaskbtn.setAttribute('id',task._id)
      taskparagraph.innerText = task.name
      //tasksDiv.appendChild(taskparagraph)
      //console.log({taskparagraph})
      deletetaskbtn.addEventListener('click',(e)=>{
        //console.log({e})
        const taskid = e.target.id
        deletetaskbtn.innerText = "..."
        fetch(`${baseBackendUrl}/task/${taskid}`,{
          method:"DELETE",
        }).then(()=>{
          const taskdiv = deletetaskbtn.parentElement
          //console.log({taskdiv})
          taskdiv.remove()
        })     
    })
    taskparagraph.addEventListener('click',(e)=>{
      //input.value = taskparagraph.innerText
      input.value = task.name
      createEditbtn.innerText =  "Editar tarea"
      TASK_TO_EDIT = task
      console.log({TASK_TO_EDIT})
    })
    taskconteinerdiv.appendChild(taskparagraph)
    taskconteinerdiv.appendChild(deletetaskbtn)
    tasksDiv.appendChild(taskconteinerdiv)
    console.log({tarea:task})
}})  
}

gettask()

//console.log({button})

// Desarrollar la funcionalidad a los botones

//button.addEventListener("click",function(){
//    fetch("http://localhost:4000/users")
//})

// Functions 
// syntan and definitions ( paramters and arguments)
// params : default values & order
// data type coertions & error handlgn
// named vs arrow
// anonymus function
// "this" object
// hoisting

// "named function" defintion
//function suma(para1,para2){
//  console.log({para1,para2})
//  if (typeof para1 !=="number" || typeof para2 !=="number"){
//    throw error("Ambos argumentos deben ser del tipo 'number'")
//  }
//  if (!para1 || !para2){
//    throw error("Ambos parametros son obligatorios")
//  }
  
//  let total = para1+para2
//  return total  
//} 

//const arg1 = 3
//const arg2 = 5

// invoke , call or execute a function
//console.table({
//    constans: suma(arg1,arg2),
//   values: suma(4,6),
//    expresions: suma(1+2,4*5),
//    error1: suma(1),
//    error2: suma(1,"2"),
//    error3: suma("loco","aldo")
//})

// arrow function
// example 1
//const exp = (par1,par2=2)=>{
//  let resultado = par1*par2
//  return resultado  
//}

// example 2
//const exp1 = (par1,par2=2)=> par1*par2  

// this object
//const calculations = {
//  suma,
//  exp1
//}

