function onSubmit() {
  var username = document.getElementById("username").value;
  var password = document.getElementById("password").value;
  var confirmpassword =  document.getElementById('confirm-password').value;
  let users = localStorage.getItem('users') ? localStorage.getItem('users'): '[]'
  var usersArr = JSON.parse(users)

  const found = usersArr.find((user) => username===user.username)
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
          usersArr.push({username: username, password: password})
          localStorage.removeItem('users')
          users = JSON.stringify(usersArr)
          localStorage.setItem('users', users)
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
