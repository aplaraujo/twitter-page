const textarea = document.querySelector("#autoresizing"); 
textarea.addEventListener('input', autoResize, false); 
      
function autoResize () { 
  this.style.height = 'auto'; 
  this.style.height = this.scrollHeight + 'px'; 
}

const elementText = document.querySelector('.content');
const length = elementText.getAttribute("maxlength");
const countCharacter = document.querySelector('#count');
countCharacter.innerHTML = length;
elementText.onkeyup = function () {
  document.querySelector('#count').innerHTML = (length - this.value.length);
  if(elementText.value === ""){
    document.querySelector('#btn').disabled = true;
  }
  else { 
    document.querySelector('#btn').disabled = false;
  }
};

const messageForm = document.querySelector('form');
const ul = document.querySelector('ul');
const tweetButton = document.querySelector('#post');
const createInput = document.querySelector('.content');
let itemsArray = localStorage.getItem('messages') ? JSON.parse(localStorage.getItem('messages')) : [];

localStorage.setItem('messages', JSON.stringify(itemsArray))
const data = JSON.parse(localStorage.getItem('messages'))

const createLi = text => {
  const li = document.createElement('li')
  li.textContent = text
  ul.appendChild(li)
}

messageForm.addEventListener('submit', (event) => {
  event.preventDefault()
  itemsArray.push(createInput.value)
  localStorage.setItem('messages', JSON.stringify(itemsArray))
  createLi(createInput.value)
  createInput.value = ''
})

data.forEach(item => createLi(item));