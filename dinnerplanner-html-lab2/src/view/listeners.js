var btn= document.getElementById("startBtn");
var listener= function(evt){
  alert(evt.type+' event on "'+evt.target.innerHTML+'"');
}
btn.addEventListener("click", listener , false);