const profileButton = document.querySelector('.profile__button');
const popup = document.querySelector('.popup');
const closeButton = document.querySelector('.popup__button-close');
const nameInput = document.querySelector('#name');
const jobInput = document.querySelector('#text');
const formElement = document.querySelector('.popup__form');
const profileName = document.querySelector('.profile__name');
const profileText = document.querySelector('.profile__text');

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
// слушатели
profileButton.addEventListener('click', toggleOpenPopup);
closeButton.addEventListener('click', toggleClosePopup);
formElement.addEventListener('submit', handleFormSubmit); 


