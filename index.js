const popupWindow = document.querySelector('.popup');
const startCardButton = document.querySelector('.drum__part_type_button');
const closeCardButon = document.querySelector('.popup__close');
const pageDoc = document.querySelector('.page__wrapper');
const footer = document.querySelector('.footer');
const drumPart = document.querySelector('.drum__part');

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



startCardButton.addEventListener('click', (evt) =>{
  //addClass(drumPart, 'page_height2');
  addClass(pageDoc, 'page_height');
  openPopupWindow(popupWindow);
});

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
