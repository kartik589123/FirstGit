function onsubmit(e) {
  e.preventDefault();

  var name = document.getElementById("name").value;
  var email = document.getElementById("email").value;

  const obj = {
    name: name,
    email: email,
  };
  localStorage.setItem(JSON.stringify(obj.email), JSON.stringify(obj));
}
