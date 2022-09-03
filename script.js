var box = document.getElementById("animatedBox");
var name = document.getElementById("name");

//setting mystery box size
function boxSize() {
  if (screen.width < 650) {
    box.style.width = "100px";
    box.style.height = "100px";
  } else {
    box.style.width = "150px";
    box.style.height = "150px";
  }
}

window.onload = boxSize();

document.addEventListener('keydown', function(event) {
    if(event.key == "2") {
      window.location.href = "menu.html"
    }
});
