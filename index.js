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
