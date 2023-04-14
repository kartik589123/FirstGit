const myform = document.querySelector("#my-form");
const amt = document.querySelector("#amt");
const des = document.querySelector("#des");
const cat = document.querySelector("category");
const userlist = document.querySelector("#users");

if (localStorage.length != 0) {
  for (var i = 0; i < localStorage.length; i++) {
    let prevEmail = JSON.parse(localStorage.key(i));
    let prevName = JSON.parse(localStorage.getItem(localStorage.key(i)));

    const li = document.createElement("li");
    li.innerHTML = `<span> ${prevEmail}</span><span>${prevName}</span>`;
    const btn = document.createElement("button");
    btn.innerHTML = "Delete";
    li.appendChild(btn);
    const edit = document.createElement("button");
    edit.innerHTML = "Edit";
    li.append(edit);

    userlist.appendChild(li);

    btn.addEventListener("click", (e) => {
      localStorage.removeItem(JSON.stringify(prevEmail));
      btn.parentElement.remove();
    });

    edit.addEventListener("click", (e) => {
      localStorage.removeItem(
        JSON.stringify(edit.previousSibling.previousSibling.innerHTML)
      );
      amt.value = edit.previousSibling.previousSibling.innerHTML;
      des.value =
        edit.previousSibling.previousSibling.previousSibling.innerHTML;
      edit.parentElement.remove();
    });
  }
}

myform.addEventListener("submit", onsubmit);

function onsubmit(e) {
  e.preventDefault();

  const amount = document.getElementById("amt").value;
  const description = document.getElementById("des").value;
  const category = document.getElementById("category").value;

  const obj = {
    amount: amount,
    description: description,
  };

  const li = document.createElement("li");
  li.innerHTML = `<span>${amt.value}</span><span>${des.value}</span>`;

  const btn = document.createElement("button");
  btn.innerHTML = "Delete";
  li.appendChild(btn);

  const edit = document.createElement("button");
  edit.innerHTML = "Edit";
  li.appendChild(edit);

  userlist.appendChild(li);

  btn.addEventListener("click", (e) => {
    localStorage.removeItem(JSON.stringify(btn.previousSibling.innerHTML));
    btn.parentElement.remove();
  });

  edit.addEventListener("submit", (e) => {
    localStorage.removeItem(
      JSON.stringify(edit.previousSibling.previousSibling.innerHTML)
    );
    amt.value = edit.previousSibling.previousSibling.previousSibling.innerHTML;
    des.value = edit.previousSibling.previousSibling.innerHTML;
    edit.parentElement.remove();
  });

  amt.value = "";
  des.value = "";

  localStorage.setItem(
    JSON.stringify(obj.amount),
    JSON.stringify(obj.description)
  );
}
