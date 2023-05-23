const form = document.getElementById("form");
const amount = document.getElementById("amt");
const description = document.getElementById("desc");
const category = document.getElementById("category");
const user = document.getElementById("ul");

async function getdata() {
  const get = await axios.get("http://localhost:3000/");

  for (let i = 0; i < get.data.length; i++) {
    onscreen(get.data[i]);
  }
}
getdata();

function onscreen(get) {
  const uid = get.id;
  const amt = get.amount;
  const desc = get.description;
  const cate = get.category;

  const li = document.createElement("li");
  li.innerHTML = `<span class="space">${amt}</span><span class="space">${desc}</span><span class="space">${cate}</span>`;

  const del = document.createElement("button");
  del.innerHTML = "Delete";
  li.appendChild(del);

  const edit = document.createElement("button");
  edit.innerHTML = "Edit";
  li.appendChild(edit);

  user.appendChild(li);

  del.addEventListener("click", async (e) => {
    del.parentElement.remove();

    await axios.delete(`http://localhost:3000/expenses/${uid}`);
  });

  edit.addEventListener("click", async (e) => {
    console.log("aaa");
    amount.value =
      edit.previousSibling.previousSibling.previousSibling.previousSibling.innerHTML;
    description.value =
      edit.previousSibling.previousSibling.previousSibling.innerHTML;
    category.value = edit.previousSibling.previousSibling.innerHTML;

    edit.parentElement.remove();
    await axios.delete(`http://localhost:3000/expenses/${uid}`);
  });
}

form.addEventListener("submit", onsubmit);

function onsubmit(e) {
  e.preventDefault();

  const obj = {
    amount: amount.value,
    description: description.value,
    category: category.value,
  };

  postdata();
  async function postdata() {
    const post = await axios.post("http://localhost:3000/", obj);
  }

  amount.value = "";
  description.value = "";
  category.value = "";
}
