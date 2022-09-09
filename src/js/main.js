
const popup = document.getElementById("popup");

const btn = document.getElementById("btn");

const span = document.getElementsByClassName("close")[0];

btn.onclick = function() {
  popup.style.display = "flex";
}

span.onclick = function() {
  popup.style.display = "none";
}

  window.onclick = function(event) {
    if (event.target == popup) {
      popup.style.display = "none";
    }
  };