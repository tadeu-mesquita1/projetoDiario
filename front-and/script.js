const resultadoCadastro = document.querySelectorAll("resultados")
const formulario = document.querySelectorAll("form")

formulario.forEach((form)=>{
   form.addEventListener("submit", formularios)
})

function formularios(evento){
   evento.preventDefault();
   const envioFormulario = evento.target
   
        if (envioFormulario.id === "formLogin") {
            const inputLogin = envioFormulario.querySelector("input[name=nome]").value;
            const inputLoginSenha = envioFormulario.querySelector("input[name=senha]").value;
  
             if (inputLogin !== "" && inputLoginSenha !== "") {
               const envioDadosLogin ={
                  nome: inputLogin,
                  senha:inputLoginSenha
               }
               fetch("http://127.0.0.1:5000/login", {
                  method: "POST",
                  headers:{
                     "content-type":"application/json"
                  },
                  body: JSON.stringify(envioDadosLogin)
               })
               

              .then(resposta =>{

                  console.log("Resposta bruta do servidor:", resposta);
                  return resposta.json()
              })
              .then(dados =>{
               if(dados.mensagem == "Dados recebidos com sucesso!"){
                  window.alert("login bem-sucedido")
               } else{
                  window.alert("nome de usuario ou senha incorretos.")
               }

              }
              
            )
            } else {
                  window.alert("!!ERRO!! Digite nome e senha.")
             }

       } else if (envioFormulario.id === "formCadastro") {
         const inputCadastro = envioFormulario.querySelector("input[name = nomecadastro]").value
         const inputCadastroSenha = envioFormulario.querySelector("input[name = criasenha]").value
  
          if (inputCadastro !== "" && inputCadastroSenha !== "") {
            const envioDadosCadastro ={
               nome: inputCadastro,
               senha:inputCadastroSenha
            } 
            fetch("")
              .then(resposta =>{

                  return resposta.json()
              })
              .then(dados =>{
                  console.log(dados);
              })
         } else {
            window.alert("!!ERRO!! Digite nome e senha.")
          }

       } else if (envioFormulario.id === "FormRecup") {
          const inputRecupera = envioFormulario.querySelector("input[name = nomeRecup]").value
          const inputRecuperaSenha = envioFormulario.querySelector("input[name =novaSenha]" ).value
  
         if (inputRecupera !== "" && inputRecuperaSenha !== ""){
            const envioDadosRecupera ={
               nome: inputRecupera,
               senha: inputRecuperaSenha
            }
            fetch()
              .then(resposta =>{

                  return resposta.json()
              })
              .then(dados =>{

               console.log(dados);
              })
         } else {
            window.alert("!!ERRO!! Digite nome e senha.")
          }
       }
}


