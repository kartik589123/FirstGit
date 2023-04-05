var form = document.getElementById("addForm");
var itemlist = document.getElementById("items");
var filter = document.getElementById("filter");

form.addEventListener("submit", addItem);

itemlist.addEventListener("click", removeitem);

filter.addEventListener("keyup", filteritems);

function addItem(e) {
  e.preventDefault();

  var newitem = document.getElementById("item").value;
  var li = document.createElement("li");
  li.className = "list-group-item";
  li.appendChild(document.createTextNode(newitem + " "));

  var newitem1 = document.getElementById("itemm").value;
  var lii = document.createTextNode(newitem1);
  li.append(lii);

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

function filteritems(e) {
  var text = e.target.value.toLowerCase();
  var items = itemlist.getElementsByTagName("li");

  Array.from(items).forEach(function (item) {
    var itemname = item.firstChild.textContent;
    if (itemname.toLowerCase().indexOf(text) != -1) {
      item.style.display = "block";
    } else {
      item.style.display = "none";
    }
  });
}
