const form = document.getElementById("form");
const username = document.getElementById("username");
const email = document.getElementById("email");
const phone = document.getElementById("phone");
const user = document.getElementById("ul");

async function getdata() {
  const get = await axios.get("http://localhost:4000/");
  console.log(get.data);
  for (let i = 0; i < get.data.length; i++) {
    onscreen(get.data[i]);
  }
}
getdata();

function onscreen(get) {
  let uid = get.id;
  let uname = get.name;
  let uemail = get.email;
  let uphone = get.phone;
  console.log(uid);
  const li = document.createElement("li");
  li.innerHTML = `<span class="space">${uname}</span><span class="space">${uemail}</span><span class="space">${uphone}</span>`;

  const del = document.createElement("button");
  del.innerHTML = "Delete ";
  li.appendChild(del);
  const edit = document.createElement("button");
  edit.innerHTML = "Edit";
  li.appendChild(edit);

  user.appendChild(li);

  del.addEventListener("click", async (e) => {
    console.log(uid);
    del.parentElement.remove();
    await axios.delete(`http://localhost:4000/appointments/${uid}`);
  });

  edit.addEventListener("click", async () => {
    console.log(username.value);
    username.value =
      edit.previousSibling.previousSibling.previousSibling.previousSibling.innerHTML;
    email.value =
      edit.previousSibling.previousSibling.previousSibling.innerHTML;
    phone.value = edit.previousSibling.previousSibling.innerHTML;

    edit.parentElement.remove();
    await axios.delete(`http://localhost:4000/appointments/${uid}`);
  });
}

form.addEventListener("submit", onsubmit);
function onsubmit(e) {
  e.preventDefault();
  const obj = {
    username: username.value,
    email: email.value,
    phone: phone.value,
  };

  const li = document.createElement("li");
  li.innerHTML = `<span class="space">${username.value}</span><span  class="space">${email.value}</span><span  class="space">${phone.value}</span>`;

  const del = document.createElement("button");
  del.innerHTML = "Delete Product";
  li.appendChild(del);
  const edit = document.createElement("button");
  edit.innerHTML = "Edit";
  li.appendChild(edit);

  user.appendChild(li);

  del.addEventListener("click", async (e) => {
    await axios.delete(`http://localhost:4000/appointments/${id}`);
    del.parentElement.remove();
  });

  edit.addEventListener("click", async () => {
    username.value =
      edit.previousSibling.previousSibling.previousSibling.previousSibling.innerHTML;
    email.value =
      edit.previousSibling.previousSibling.previousSibling.innerHTML;
    phone.value = edit.previousSibling.previousSibling.innerHTML;

    await axios.delete(`http://localhost:4000/appointments/${uid}`);
    edit.parentElement.remove();
  });

  postdata();
  async function postdata() {
    const post = await axios.post("http://localhost:4000/", obj);
  }

  username.value = "";
  email.value = "";
  phone.value = "";
}
