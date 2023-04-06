myform.addEventListener("submit", onsubmit);

function onsubmit(e) {
  e.preventDefault();

  var name = document.getElementById("name").value;
  var email = document.getElementById("email").value;

  const obj = {
    name: name,
    email: email,
  };
  localStorage.setItem("userdetails", JSON.stringify(obj));
}
