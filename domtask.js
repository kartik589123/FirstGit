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

var add = document.getElementsByClassName("title");
add[0].style.fontWeight = "bold";
add[0].style.color = "green";

var items = document.getElementsByClassName("list-group-item");

console.log((items[0].textContent = "hello"));

items[2].style.backgroundColor = "green";

for (item of items) {
  item.style.fontWeight = "bold";
}
