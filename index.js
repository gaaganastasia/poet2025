const popupWindow = document.querySelector('.popup');
const startCardButton = document.querySelector('.drum__part_type_button');
const closeCardButon = document.querySelector('.popup__close');
const pageDoc = document.querySelector('.page__wrapper');
const footer = document.querySelector('.footer');
const drumPart = document.querySelector('.drum__part_type_item');

function addClass(elem , classlist){
  elem.classList.add(`${classlist}`);
}
function remClass(elem , classlist){
  elem.classList.remove(`${classlist}`);
}

function openPopupWindow(popup){
  addClass(popup, 'popup_visible');
}

function closePopupWindow(popup){
  remClass(popup, 'popup_visible');
}

const authors = {
  1:  'Анна Ахматова',
  2:  'Михаил Лермонтов',
  3:  'Александ Блок',
  6:  'Владимир Маяковский',
  7:  'Сергей Есенин',
  10: 'Марина Цветаева',
  11: 'Иван Бунин',
  13: 'Иосиф Бродский',
  14: 'Фёдор Тютчев',
}

getRandomInt = (max) => Math.floor(Math.random() * Math.floor(max));
let randAuthor = getRandomInt(Object.keys(authors).length);
console.log(authors[randAuthor]);

function sleep(ms) {
  return new Promise(
    resolve => setTimeout(resolve, ms)
  );
}

async function rotateDrum(){
  var delayInMilliseconds = 2000;
  addClass(drumPart, 'drum_rotation');
  await sleep(delayInMilliseconds);
  drumPart.style.transform = `rotate(${randAuthor*25}deg)`;
}

async function handleStartButton(){
  var delayInMilliseconds = 3000;
  rotateDrum();
  await sleep(delayInMilliseconds);
  //addClass(pageDoc, 'page_height');
  openPopupWindow(popupWindow)
  //setTimeout(openPopupWindow(popupWindow), delayInMilliseconds);
}
startCardButton.addEventListener('click', handleStartButton);

closeCardButon.addEventListener('click', (evt) =>{
  //remClass(drumPart, 'page_height2');
  remClass(pageDoc, 'page_height');
  closePopupWindow(popupWindow);
});

////////////

const cardText = document.querySelector('.popup__poem');
const cardAuthor = document.querySelector('.popup__poem-author');
const cardTitle = document.querySelector('.popup__poem-title');

function getPoem() {
  fetch('https://buymebuyme.xyz', {
    method: 'GET',
    headers: {
      'Content-Type': 'application/json'
    },
  })
  .then((res) => {
    return res.json();
  }).then((res) => {
    let rand = Math.random() * (res.length + 1);
    const randomNumber = Math.floor(rand);
    const randomPoem = res[randomNumber - 1];
    const poemStr = randomPoem.fields.text.split('\n', 4);
    cardText.textContent = poemStr.join('\n');
    cardTitle.textContent = randomPoem.fields.name;
    const poemDate = randomPoem.fields.date_from;
    if (randomPoem.fields.date_to) {
      cardAuthor.textContent = `${randomPoem.fields.author}, ${poemDate}`
    }
    else {
      cardAuthor.textContent = `${randomPoem.fields.author}`
    }
  })

  /*fetch('http://buymebuyme.xyz', {
    method: 'GET',
    headers: {
      'Content-Type': 'application/json'
    },
  })
  .then((res) => {
    return res.json();
  }).then((res) => {
    let arr = [];
    res.forEach((item) => {
      if (item.fields.author === 'Марина Цветаева') {
        arr.push(item)
      }
    })
    console.log(arr);
  })*/
}

getPoem()
