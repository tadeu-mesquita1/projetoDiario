 const resultadoCadastro = document.getElementById("resultado") 

 const formulario = document.getElementById("formCadastro")

 formulario.addEventListener("submit",(evento)=>{
    evento.preventDefault();
    resultadoCadastro.style.display ="block"

 })