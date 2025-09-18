 const resultadoCadastro = document.getElementById("resultado") 

 const formulario = document.querySelectorAll("form")

formulario.forEach((form)=>{
   form.addEventListener("submit",Formularios)

})


function Formularios(evento){
   evento.preventDefault()
 }
 
