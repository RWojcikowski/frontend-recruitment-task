
const popup = document.getElementById("popup");

const btn = document.getElementById("btn");

const span = document.getElementsByClassName("close")[0];

let number = 0


// App.state = {
//   number: 0,
//   increment: () => {
//     App.state.number++;
//     updateTree();
    
//   }
// // };



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

  // button count click //
  let add = document.querySelector("#btn");

  add.addEventListener("click", function () {
    let number = document.querySelector("#number");
    let result = Number(number.innerText) + 1;
    number.innerText = result;
  });


// button reset clicks //

function reset() {
  number = 0

  document.getElementById("number").innerHTML = number; 

}

//button show if >= 5//

let btnReset = document.getElementById('btn');
btnReset.addEventListener('click', ()=>{
  let element = document.getElementById('reset');
  number++;

	if (number < 4 ){
    	element.style.display = 'none';
    } else if(number > 4 ){
    element.style.display = 'flex'
  }
})