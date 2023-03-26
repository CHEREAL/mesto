const profileButton = document.querySelector('.profile__button');
const popup = document.querySelector('.popup_type_profile');
const closeButton = popup.querySelector('.popup__button-close');
const nameInput = document.querySelector('#name');
const jobInput = document.querySelector('#text');
const formElement = document.querySelector('.popup__form');
const profileName = document.querySelector('.profile__name');
const profileText = document.querySelector('.profile__text');
const profileButtonAdd = document.querySelector('.profile__button-add');
const popupCard = document.querySelector('.popup_type_card');
const cardCloseButton = popupCard.querySelector('.popup__button-close');

// Открытие попапа
 toggleOpenPopup = () => {
    popup.classList.add('popup_opened');
    nameInput.value = profileName.textContent;
    jobInput.value = profileText.textContent;
}
// Закрытие попапа
 toggleClosePopup = () => {
  popup.classList.remove('popup_opened');
}

// функция формы
handleFormSubmit  = (evt) => {
  evt.preventDefault(); 

  profileName.textContent = nameInput.value;
  profileText.textContent = jobInput.value;
  toggleClosePopup();
}

// функция добавления popup-card
buttonOpenCard = () => {
  popupCard.classList.add('popup_opened');
}
// функция закрытия popup-card 
buttonCloseCard = () => {
  popupCard.classList.remove('popup_opened');
}
// слушатели
profileButton.addEventListener('click', toggleOpenPopup);
closeButton.addEventListener('click', toggleClosePopup);
formElement.addEventListener('submit', handleFormSubmit); 

profileButtonAdd.addEventListener('click', buttonOpenCard);
cardCloseButton.addEventListener('click', buttonCloseCard);

console.log(closeButton)
console.log(cardCloseButton)


const initialCards = [
  {
    name: 'Архыз',
    link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/arkhyz.jpg'
  },
  {
    name: 'Челябинская область',
    link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/chelyabinsk-oblast.jpg'
  },
  {
    name: 'Иваново',
    link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/ivanovo.jpg'
  },
  {
    name: 'Камчатка',
    link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/kamchatka.jpg'
  },
  {
    name: 'Холмогорский район',
    link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/kholmogorsky-rayon.jpg'
  },
  {
    name: 'Байкал',
    link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/baikal.jpg'
  }
]; 