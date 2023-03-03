const profileButton = document.querySelector('.profile__button');
const popup = document.querySelector('.popup');
const closeButton = document.querySelector('.popup__button-close');
const buttonSubmit = document.querySelector('.popup__button-submit');
const nameInput = document.querySelector('#name');
const jobInput = document.querySelector('#text');
const formElement = document.querySelector('.popup__form');

const toggleOpenPopup = () => {
    popup.classList.add('popup_opened');
}
const toggleClosePopup = () => {
  popup.classList.remove('popup_opened');
}
const handleAboutButtonClick = () => {
  toggleOpenPopup();
};
const handleCloseButtonClick = () => {
  toggleClosePopup();
};
const handleFormSubmit  = (evt) => {
  evt.preventDefault(); 

  nameInput.textContent = nameInput.value;
  jobInput.textContent = jobInput.value;
}

profileButton.addEventListener('click', handleAboutButtonClick);
closeButton.addEventListener('click', handleCloseButtonClick);
buttonSubmit.addEventListener('click', )
formElement.addEventListener('submit', handleFormSubmit); 


