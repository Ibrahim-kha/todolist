
function add(item) {
  var ul = document.getElementById("task");
  var Item = document.getElementById(item).value;
  var li = document.createElement("li");
  li.style.Id="ui";
if(Item != ""){
  li.appendChild(document.createTextNode(Item));
  ul.appendChild(li);
  document.getElementById(item).value="";
}
var cross = document.createElement("SPAN");
  var mark = document.createTextNode("\u00D7");
  cross.className = "cross";
  cross.appendChild(mark);
  li.appendChild(cross);
var close = document.getElementsByClassName("cross");
for (let i = 0; i < close.length; i++) {
    close[i].onclick = function() {
      var div = this.parentElement;
      div.style.display = "none";
    }
  }
}


function clears(clr) {
   var u = document.getElementById("task");
   u.innerHTML="";
    
}