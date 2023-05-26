const form = document.getElementById("form");
const candyname = document.getElementById("candyname");
const description = document.getElementById("description");
const price = document.getElementById("price");
const quantity = document.getElementById("quantity");
const user = document.getElementById("ul");

async function getdata() {
  const get = await axios.get("http://localhost:4000/");
  console.log("aaa");
  for (let i = 0; i < get.data.length; i++) {
    onscreen(get.data[i]);
  }
}
getdata();

function onscreen(get) {
  const cid = get.id;
  const cname = get.candyname;
  const cdescription = get.description;
  const cprice = get.price;
  const cquantity = get.quantity;

  const li = document.createElement("li");
  li.innerHTML = `<span class="space">${cname}</span><span class="space">${cdescription}</span><span class="space">${cprice}</span><span clas="space">${cquantity}</span><span class="space"></span>`;

  const buy1 = document.createElement("button");
  buy1.innerHTML = "BUY1";
  li.appendChild(buy1);

  const buy2 = document.createElement("button");
  buy2.innerHTML = "BUY2";
  li.appendChild(buy2);

  const buy3 = document.createElement("button");
  buy3.innerHTML = "BUY3";
  li.appendChild(buy3);

  const del = document.createElement("button");
  del.innerHTML = "delete";
  li.appendChild(del);

  user.appendChild(li);

  del.addEventListener("click", async () => {
    del.parentElement.remove();
    await axios.delete(`http://localhost:4000/candies/${cid}`);
  });

  buy1.addEventListener("click", async () => {
    if (cquantity < 1) {
      buy1.parentElement.remove();
      return await axios.get("http://localhost:4000/not-found");
    }
    await axios.patch(`http://localhost:4000/candies/${cid}`, {
      quantity: cquantity - 1,
    });
  });
  buy2.addEventListener("click", async () => {
    if (cquantity < 2) {
      buy2.parentElement.remove();
      return await axios.get("http://localhost:4000/not-found");
    }
    await axios.patch(`http://localhost:4000/candies/${cid}`, {
      quantity: cquantity - 2,
    });
  });
  buy3.addEventListener("click", async () => {
    if (cquantity < 3) {
      buy3.parentElement.remove();
      return await axios.get("http://localhost:4000/not-found");
    }
    await axios.patch(`http://localhost:4000/candies/${cid}`, {
      quantity: cquantity - 3,
    });
  });
}

form.addEventListener("submit", onsubmit);

function onsubmit(e) {
  e.preventDefault();
  console.log("aaa");
  const obj = {
    candyname: candyname.value,
    description: description.value,
    price: price.value,
    quantity: quantity.value,
  };

  const li = document.createElement("li");
  li.innerHTML = `<span class="space">${candyname.value}</span><span class="space">${description.value}</span><span class="space">${price.value}</span><span class="space">${quantity.value}</span>`;

  const buy1 = document.createElement("button");
  buy1.innerHTML = "BUY 1";
  li.appendChild(buy1);

  const buy2 = document.createElement("button");
  buy2.innerHTML = "BUY 2";
  li.appendChild(buy2);

  const buy3 = document.createElement("button");
  buy3.innerHTML = "BUY 3";
  li.appendChild(buy3);

  user.appendChild(li);

  async function postdata() {
    const post = await axios.post("http://localhost:4000/", obj);
  }
  postdata();
  candyname.value = "";
  description.value = "";
  price.value = "";
  quantity.value = "";
}
