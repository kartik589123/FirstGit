const myform = document.querySelector("#my-form");
const nameinput = document.querySelector("#name");

myform.addEventListener("submit", onsubmit);

function onsubmit(e) {
  e.preventDefault();
  localStorage.setItem("Name", document.getElementById("name").value);
  localStorage.setItem("Email", document.getElementById("email").value);
}
