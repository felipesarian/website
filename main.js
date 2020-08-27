let users=[
    {username:'warlen', password:'123'}, {username:'felipe', password:'abc'}
]

function onSubmit() {
  var username = document.getElementById("username").value;
  var password = document.getElementById("password").value;

  const loginInfo={
    username:username,
    password:password
  }
  const found = users.find((user) => loginInfo.username===user.username)
  if(!found){
      console.log('usuario nao encontrado')
  }
  else{
      if(found.password===loginInfo.password){
          window.location.href=''
      }
      else{
          console.log('a senha esta errada')
      }
  }
  console.log(found)
}
