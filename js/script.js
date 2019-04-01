//set menu state

document.addEventListener('DOMContentLoaded', function () {
  setMenu();
})

window.addEventListener('resize', function () {
  setMenu();
})

function setMenu() {
  if (window.matchMedia("(min-width: 992px)").matches) {
    document.body.classList.add('show-menu');
  } else {
    document.body.classList.remove('show-menu');
  }
}

// menu toggle and sub-menu toggle

document.querySelector('.side-menu__button').addEventListener('click', function (e) {
  e.preventDefault();
  iconAnimation();
  document.body.classList.toggle('show-menu');
  if (dropdownOpen > 0) {
    closeDropdowns();
  }
})

let dropdownOpen = 0;
const dropdownTriggers = document.querySelectorAll('.dropdown-trigger');
for (let i = 0; i < dropdownTriggers.length; i++) {
  const trigger = dropdownTriggers[i];
  trigger.addEventListener('click', function (event) {
    if (window.matchMedia("(max-width: 992px)").matches) {
      let button = event.currentTarget;
      if (button.parentElement.classList.contains('show')) {
        button.parentElement.classList.remove('show');
        dropdownOpen -= 1;
      }
      else {
        button.parentElement.classList.add('show');
        dropdownOpen += 1;
        document.body.classList.add('show-menu');
      }
    }
  })
}

function closeDropdowns() {
  for (let i = 0; i < dropdownTriggers.length; i++) {
    const trigger = dropdownTriggers[i];
    trigger.parentElement.classList.remove('show');
    dropdownOpen = 0;
  }
}

// icons 

function iconAnimation() {
  let icons;
  if (window.matchMedia("(max-width: 992px)").matches) {
    icons = document.querySelectorAll('.side-menu__icon, .top-menu__icon');
  } else {
    icons = document.querySelectorAll('.side-menu__icon');
  }
  for (let i = 0; i < icons.length; i++) {
    let iconsAll = icons[i];
    iconsAll.classList.add('animation-icons');
    iconsAll.addEventListener('animationend', function () {
      iconsAll.classList.remove('animation-icons');
    })
  }
}

// popups

const popupTriggers = document.querySelectorAll('.popup-trigger');
for (let i = 0; i < popupTriggers.length; i++) {
  const trigger = popupTriggers[i];
  const popupId = trigger.getAttribute('data-popup');
  trigger.addEventListener('click', function () {
    openPopup(popupId);
  })
}

function openPopup(id) {
  const popup = document.getElementById(id);
  popup.classList.add('show');
  closePopup(popup)
}

function closePopup(popup) {
  window.onclick = function (event) {
    if (event.target == popup)
      popup.classList.remove('show');
  }
  const close = document.querySelector('.popup-chat__close');
  close.onclick = function () {
    popup.classList.remove('show');
  }
  document.addEventListener('keyup', function(event) {
    if(event.keyCode === 27) {
      popup.classList.remove('show');
    }
  })
}