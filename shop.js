var form = document.getElementById("form");
var sellingprice = document.getElementById("sp");
var productname = document.getElementById("pn");
var user = document.getElementById("users");
var sum = 0;
var totalsum = document.getElementById("sum");

axios
  .get("https://crudcrud.com/api/30e98c7935e443f49fa45c6042c9f006/data")
  .then((res) => {
    for (var i = 0; i < res.data.length; i++) {
      onscreen(res.data[i]);
    }
    totalsum.innerHTML = sum;
  })
  .catch((err) => err);

function onscreen(res) {
  const spres = res.price;
  const prname = res.pname;
  const id = res._id;
  sum = sum + Number(spres);
  const li = document.createElement("li");
  li.innerHTML = `<span class="space">${spres}</span><span class="space">${prname}</span>`;

  const del = document.createElement("button");
  del.innerHTML = "Delete Product";
  li.appendChild(del);

  user.appendChild(li);

  del.addEventListener("click", (e) => {
    sum = sum - Number(spres);
    totalsum.innerHTML = sum;
    axios
      .delete(
        `https://crudcrud.com/api/30e98c7935e443f49fa45c6042c9f006/data/${id}`
      )
      .then((res) => res)
      .catch((err) => err);
    del.parentElement.remove();
  });
}

form.addEventListener("submit", onsubmit);

function onsubmit(e) {
  e.preventDefault();
  let id;
  var obj = {
    price: sellingprice.value,
    pname: productname.value,
  };

  axios
    .post("https://crudcrud.com/api/30e98c7935e443f49fa45c6042c9f006/data", obj)
    .then((res) => {
      id = res.data._id;
      console.log(res, id);
      sum = sum + Number(sellingprice.value);
      const li = document.createElement("li");
      li.innerHTML = `<span class="space">${sellingprice.value}</span><span class="space">${productname.value}</span>`;

      const del = document.createElement("button");
      del.innerHTML = "Delete Product";
      li.appendChild(del);

      user.appendChild(li);

      del.addEventListener("click", (e) => {
        axios.delete(
          `https://crudcrud.com/api/30e98c7935e443f49fa45c6042c9f006/data/${id}`
        );
        del.parentElement.remove();
      });
      sellingprice.value = "";
      productname.value = "";
      totalsum.innerHTML = sum;
    })
    .catch((err) => err);
}
//console.log(sum);
