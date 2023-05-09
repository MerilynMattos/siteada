// document.getElementById("botaoEnviar").addEventListener("click",validaFormulario)

// function validaFormulario(){ 
 // if(document.getElementById("nome").value != "" && document.getElementById("email").value != ""){
 //     alert("Prontinho! você receberá as Novidades por email")  
 // }else{
 //     alert("Por favor, preencha o campo de nome e email")
 // }
/// }

var nome = document.getElementById("nome")
var email = document.getElementById("email")
var telefone = document.getElementById("telefone")

document.getElementById("botaoEnviar").addEventListener("click",validaFormulario)

function validaFormulario(){ 
  if(nome.value != "" && email.value != "" && telefone.value != ""){
      alert("Prontinho! você receberá as Novidades por email")  
  }else{
      alert("Por favor, preencha os campos de nome, email e telefone")
  }
}