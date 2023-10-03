document.getElementById("taskbutton").addEventListener("click", newElement);
var myNodelist = document.getElementsByTagName("LI");
var i;
for (i = 0; i < myNodelist.length; i++) {
  var span = document.createElement("SPAN");
  var txt = document.createTextNode("\u00D7");
  span.className = "close";
  span.appendChild(txt);
  myNodelist[i].appendChild(span);
}
var close = document.getElementsByClassName("close");
var i;
for (i = 0; i < close.length; i++) {
  close[i].onclick = function () {
    var div = this.parentElement;
    div.style.display = "none";
  };
}
var list = document.querySelector("ul");
list.addEventListener(
  "click",
  function (ev) {
    if (ev.target.tagName === "LI") {
      ev.target.classList.toggle("checked");
    }
  },
  false
);

function newElement() {
  let inputvalue = document.getElementById("myInput").value;
  const newbtn = document.createElement("li");
  const textnode = document.createTextNode(inputvalue);
  newbtn.appendChild(textnode);
  document.getElementById("mainList").appendChild(newbtn);

  var span = document.createElement("SPAN");
  var txt = document.createTextNode("\u00D7");
  span.className = "close";
  span.appendChild(txt);
  newbtn.appendChild(span);

  for (i = 0; i < close.length; i++) {
    close[i].onclick = function () {
      var div = this.parentElement;
      div.style.display = "none";
    };
  }
}
