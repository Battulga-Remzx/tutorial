let emoji = ['../photos/slots/emoji1.png','../photos/slots/emoji2.png','../photos/slots/emoji3.png','../photos/slots/emoji4.png','../photos/slots/emoji5.png','../photos/slots/emoji6.png','../photos/slots/emoji7.png']
let slot1 = document.getElementById("emoji1");
let slot2 = document.getElementById("emoji2");
let slot3 = document.getElementById("emoji3");
let result = document.getElementById("result");
let button = document.getElementById("button");

let num = [];
button.addEventListener('click', () => {
  let num = [];
  
  for(let i = 1; i <= 3; i++) {
    num[i] = Math.floor(Math.random()*emoji.length);
  }

  function start() {
  slot1.innerHTML = '?'
  slot2.innerHTML = '?'
  slot3.innerHTML = '?'
  result.innerHTML = 'Тооцоолж байна...'
  result.style.background = 'orange'
  result.style.color = 'black'
}

function fSpin() {
  slot1.src = emoji[num[1]];
  slot2.innerHTML = '?'
  slot3.innerHTML = '?'
}

function sSpin() {
  slot1.src = emoji[num[1]];
  slot2.src = emoji[num[2]]
  slot3.innerHTML = '?'
}
function lSpin() {
  slot1.src = emoji[num[1]];
  slot2.src = emoji[num[2]];
  slot3.src = emoji[num[3]];
}

function lost() {
  slot1.src = emoji[num[1]];
  slot2.src = emoji[num[2]];
  slot3.src = emoji[num[3]];
  result.innerHTML = 'Таарсангүй'
  result.style.background = 'red';
  result.style.color = 'black'
  setTimeout(()=> {
    alert('Таарсангүй')
  }, 10000)
}

function win() {
  slot1.src = emoji[num[1]];
  slot2.src = emoji[num[2]];
  slot3.src = emoji[num[3]];
  result.innerHTML = 'Хожлоо'
  result.style.background = 'green';
  result.style.color = 'black'
  setTimeout(()=> {
    alert('Баяр хүргэе')
  }, 10000)
}
  
  if(num[1] == num[2] && num[2] == num[3]) {
    start()
    setTimeout(() => {
      fSpin()
    },3000)
    setTimeout(() => {
      sSpin()
    },6000)
    setTimeout(() => {
      win()
    },9000)
  } else if(num[1] == num[2] || num[1] == num[3] || num[2] == num[3]) {
    start()
    setTimeout(() => {
      fSpin()
    },3000)
    setTimeout(() => {
      sSpin()
    },6000)
    setTimeout(() => {
      win()
    },9000)
  } else {
    start()
    setTimeout(() => {
      fSpin()
    },3000)
    setTimeout(() => {
      sSpin()
    },6000)
    setTimeout(() => {
      lost()
    },9000)
  }
})