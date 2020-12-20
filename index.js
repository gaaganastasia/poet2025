const popupWindow = document.querySelector('.popup');
const startCardButton = document.querySelector('.drum__part_type_button');
const closeCardButon = document.querySelector('.popup__close');

function openPopupWindow(popup){
  popup.classList.add('popup_visible');
}

function closePopupWindow(popup){
  popup.classList.remove('popup_visible');
}

startCardButton.addEventListener('click', (evt) =>{
  openPopupWindow(popupWindow);
});

closeCardButon.addEventListener('click', (evt) =>{
  closePopupWindow(popupWindow);
});
