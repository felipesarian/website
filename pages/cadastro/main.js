let users=[
    {username:'warlen', password:'123'}, {username:'felipe', password:'abc'}
]
var lista = JSON.stringify(users)
var lista2 = JSON.parse(lista)

function onSubmit() {
  var username = document.getElementById("username").value;
  var password = document.getElementById("password").value;
  var confirmpassword =  document.getElementById('confirm-password').value;

  const found = lista2.find((user) => username===user.username)
  if(found){
      alert('Usuario ja esta na base de dados')
      return
  }
  else{
      if(username === ''){
          alert('voce precisa inserir um nome')
          return
      }
      if(password.length >= 3){

      if(password===confirmpassword){
          localStorage.setItem('lastname', 'smith')
          alert('voce foi cadastrado')
          return
      }
      else{
          alert('as senhas nao sao iguais')
          return
      }
    } else{
       alert('sua senha precisa ter pelo menos 3 caracteres')
       return
    }
  }
}
