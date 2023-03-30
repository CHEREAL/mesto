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
const likeButton = document.querySelector('.elements__item-button');




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
const itemTemplate = document.querySelector(".item__template").content;
const list = document.querySelector(".elements__list");
const formCard = popupCard.querySelector('.popup__form-card');
const formButton = popupCard.querySelector(".popup__button-submit_type_card");
const formInput = document.querySelector("#cardName");
const formInputSrc = document.querySelector('#cardSrc');



// функция вставит карточку

initialCards.forEach(renderItem)

function renderItem (item) {
  list.insertAdjacentHTML('beforeend', `<li class="elements__item">
  <button
    class="elements__trash-button"
    type="button"
    title="delete"
  ></button>
  <img
    src="${item.link}"
    alt="${item.name}"
    class="elements__item-image"
  />
  <div class="elements__item-container">
    <h2 class="elements__item-title">${item.name}</h2>
      <button class="elements__item-like" type="button"></button>
    </div>
  </div>
  </li>`)
}

handleFormCard  = (evt) => {
  evt.preventDefault(); 
const newCard = {
  name: formInput.value,
  link: formInputSrc.value
}
renderItem(newCard);
  toggleClosePopupCard();


}



formCard.addEventListener('submit', handleFormCard);

function toggleLike(el) {
  el.classList.toggle('elements__item-like_active')
}


list.addEventListener('click', function(e) { 
  if (e.target.className === 'elements__trash-button') cardDelete(e.target);
  if (e.target.classList.contains('elements__item-like')) {
    toggleLike(e.target) 
  }
});


function cardDelete(btn) {
  let card = btn.closest('.elements__item');
  list.removeChild(card);
}





// Открытие попапа
 toggleOpenPopup = () => {
    popup.classList.add('popup_opened');
    nameInput.value = profileName.textContent;
    jobInput.value = profileText.textContent;
}
// Закрытие попапа card
 toggleClosePopupCard = () => {
  popupCard.classList.remove('popup_opened');
}
// закртыие popup 
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


