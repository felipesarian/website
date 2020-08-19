function onSubmit() {
  var username = document.getElementById("username").value;
  var password = document.getElementById("password").value;

  console.log({
    name: username,
    password: password,
  });
}
