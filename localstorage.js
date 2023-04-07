const myform = document.querySelector("#my-form");
const nameinput = document.querySelector("#name");
const emailinput = document.querySelector("#email");
const userlist = document.querySelector("#users");

if (localStorage.length !== 0) {
  for (var i = 0; i < localStorage.length; i++) {
    let prevEmail = JSON.parse(localStorage.key(i));
    let prevName = JSON.parse(localStorage.getItem(localStorage.key(i)));

    const li = document.createElement("li");
    li.innerHTML = `<span> ${prevEmail}</span><span>${prevName}</span>`;
    const btn = document.createElement("button");
    btn.innerHTML = "Delete";
    li.appendChild(btn);
    userlist.appendChild(li);

    btn.addEventListener("click", (e) => {
      localStorage.removeItem(JSON.stringify(prevEmail));
      btn.parentElement.remove();
    });
  }
}

myform.addEventListener("submit", onsubmit);

function onsubmit(e) {
  e.preventDefault();

  var name = document.getElementById("name").value;
  var email = document.getElementById("email").value;

  const obj = {
    name: name,
    email: email,
  };

  const li = document.createElement("li");
  li.innerHTML = `<span>${nameinput.value}</span><span>${emailinput.value}</span>`;
  const btn = document.createElement("button");
  btn.innerHTML = "delete";
  li.appendChild(btn);
  userlist.appendChild(li);

  btn.addEventListener("click", (e) => {
    localStorage.removeItem(JSON.stringify(btn.previousSibling.innerHTML));
    btn.parentElement.remove();
  });

  nameinput.value = "";
  emailinput.value = "";

  localStorage.setItem(JSON.stringify(obj.email), JSON.stringify(obj.name));
}
