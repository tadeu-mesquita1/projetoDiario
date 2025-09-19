const resultadoCadastro = document.querySelectorAll("resultados")
const formulario = document.querySelectorAll("form")

formulario.forEach((form)=>{
   form.addEventListener("submit", formularios)
})

function formularios(evento){
   const envioFormulario = evento.target
   const inputLogin = envioFormulario.querySelector("input[name = nome]")
   const inputLoginSenha = envioFormulario.querySelector("input[name = senha]")
   const inputCadastro = envioFormulario.querySelector("input[name = nomecadastro]")
   const inputCadastroSenha = envioFormulario.querySelector("input[name = criasenha]")
   const inputRecupera = envioFormulario.querySelector("input[name = nomeRecup]")
   const inputRecuperaSenha = envioFormulario.querySelector("input[name =novaSenha]" )
}