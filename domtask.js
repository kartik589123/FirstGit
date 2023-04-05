// console.log(document.domain);
// console.log(document.URL);
// console.log(document.title);
// document.title = "123";
// console.log(document.doctype);
// console.log(document.all[10]);
// //document.all[10].textContent = "hello";

console.log(document.getElementById("header-title"));
var h = document.getElementById("main-header");
console.log(h);
// h.textContent = "hello";
// h.innerText = "dsad€sd";
// h.innerHTML = "<h3>hello</h3>";

h.style.borderBottom = "solid 5px #000";

// var add = document.getElementsByClassName("title");
// add[0].style.fontWeight = "bold";
// add[0].style.color = "green";

// var items = document.getElementsByClassName("list-group-item");

// console.log((items[0].textContent = "hello"));

// items[2].style.backgroundColor = "green";

// for (item of items) {
//   item.style.fontWeight = "bold";
// }

// var li = document.getElementsByTagName("li");

// console.log((li[0].textContent = "hello"));

// li[2].style.backgroundColor = "green";

// for (item of li) {
//   item.style.fontWeight = "bold";
// }
// var query = document.querySelectorAll("li");
// query[1].style.color = "green";

// var queryodd = document.querySelectorAll("li:nth-child(odd");
// for (item of queryodd) {
//   item.style.backgroundColor = "green";
// }

// var query = document.querySelectorAll("li");

// query[1].style.backgroundColor = "green";
// query[2].style.display = "none";

// var itemslist = document.querySelector("#items");
// itemslist.parentElement.style.backgroundColor = "grey";

// itemslist.firstChild;
// itemslist.firstElementChild.textContent = "HELLO";
// itemslist.lastChild.textContent = "Hello";
// itemslist.lastElementChild.textContent = "HELLO";

// itemslist.nextSibling.textContent = "8050";
// itemslist.nextElementSibling.textContent = "1234";

// itemslist.previousSibling;
// itemslist.previousElementSibling.style.color = "red";

// var newdiv = document.createElement("div");

// newdiv.className = "hello";
// newdiv.setAttribute = ("title", "hello div");

// var newdivtext = document.createTextNode("hello world");
// newdiv.appendChild(newdivtext);

// var container = document.querySelector("header .container");
// var h1 = document.querySelector("header h1");
// newdiv.style.fontSize="30px"
// container.insertBefore(newdiv, h1);
// var itemslist = document.querySelector("#items");
// itemslist.parentElement.style.backgroundColor = "grey";

// itemslist.firstChild;
// itemslist.firstElementChild.textContent = "HELLO";
// itemslist.lastChild.textContent = "Hello";
// itemslist.lastElementChild.textContent = "HELLO";

// itemslist.nextSibling.textContent = "8050";
// itemslist.nextElementSibling.textContent = "1234";

// itemslist.previousSibling;
// itemslist.previousElementSibling.style.color = "red";

// var newdiv = document.createElement("div");

// newdiv.className = "hello";
// newdiv.setAttribute = ("title", "hello div");

// var newdivtext = document.createTextNode("hello world");
// newdiv.appendChild(newdivtext);

// var container = document.querySelector("header .container");
// var h1 = document.querySelector("header h1");
// newdiv.style.fontSize = "30px";
// container.insertBefore(newdiv, h1);
var form = document.getElementById("addForm");
var itemlist = document.getElementById("items");

form.addEventListener("submit", addItem);

itemlist.addEventListener("click", removeitem);

function addItem(e) {
  e.preventDefault();

  var newitem = document.getElementById("item").value;

  var li = document.createElement("li");

  li.className = "list-group-item";

  li.appendChild(document.createTextNode(newitem));

  var deletebtn = document.createElement("button");
  deletebtn.className = "btn btn-danger btn-sm float-right delete";

  deletebtn.appendChild(document.createTextNode("X"));

  var editbtn = document.createElement("button");
  editbtn.className = "btn btn-danger btn-sm float-right delete";
  editbtn.appendChild(document.createTextNode("edit"));

  li.appendChild(deletebtn);
  li.appendChild(editbtn);
  itemlist.appendChild(li);
}

function removeitem(e) {
  if (e.target.classList.contains("delete")) {
    if (confirm("are you sure?")) {
      var li = e.target.parentElement;
      itemlist.removeChild(li);
    }
  }
}
