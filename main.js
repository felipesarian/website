function signup(){
    window.location.href='pages/cadastro/index.html'
}

function onSubmit() {
  var username = document.getElementById("username").value;
  var password = document.getElementById("password").value;

  const loginInfo={
    username:username,
    password:password
  }
  const users = JSON.parse(localStorage.getItem('users')) ? JSON.parse(localStorage.getItem('users')) : []
  const found = users.find((user) => loginInfo.username===user.username)
  if(!found){
      alert('Usuario nao encontrado')
  }
  else{
      if(found.password===loginInfo.password){
          window.location.href='pages/contador/index.html'
      }
      else{
          alert('a senha esta errada')
      }
  }
  console.log(found)
}
