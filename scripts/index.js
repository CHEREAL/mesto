const profileButton = document.querySelector('.profile__button');
const popup = document.querySelector('.popup');
const closeButton = document.querySelector('.popup__button-close');




const toggleOpenPopup = () => {
    popup.classList.toggle('popup__opened');
}
const handleAboutButtonClick = () => {
  toggleOpenPopup();
};
const handleCloseButtonClick = () => {
  toggleOpenPopup();
};
const handleOverlayClick = (event) => {
  
  if(event.target ===  event.currentTarget) {
    toggleOpenPopup();
  }
};

profileButton.addEventListener('click', handleAboutButtonClick);
closeButton.addEventListener('click', handleCloseButtonClick);
popup.addEventListener('click', handleOverlayClick);