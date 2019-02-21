const maxLength = 140;

let text = document.getElementById("myTextarea");
let button = document.getElementById("myButton");
let message = document.getElementById("myMessage");
let count = document.getElementById("characterCounter");

button.addEventListener("click", addText);

function addText(event){
  let newList = document.createElement("li");
  newList.textContent = text.value;
  message.appendChild(newList);
  text.value = "";
}

text.addEventListener("keyup", changeCount);

function changeCount(event){
  let countValue = maxLength - text.value.length;
  count.textContent = countValue;
  if(countValue === maxLength || countValue < 0){
    button.setAttribute("disabled", "");
  }
  else{
    button.removeAttribute("disabled");
  }

  if(countValue < 0){
    characterCounter.setAttribute("class", "red");
  }
  else if(text.value.length > 120){
    characterCounter.setAttribute = ("class", "green");
  }
  else{
    characterCounter.setAttribute = ("class", "red");
  }
}

