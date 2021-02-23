const input = document.getElementById("userInput");
const button = document.getElementById("buttonClick");
button.addEventListener("click", callBack);

function callBack(){
    const value = input.value;

    fetch('https://pokeapi.co/api/v2/pokemon/${value}')
  .then(response => response.json())
  .then(data => console.log(data));
}