// MENU
const walletTrigger = document.querySelector('.top-menu__wallet');
const notificationsTrigger = document.querySelector('.top-menu__notifications-button');

//set menu state and close sub menus on load and window resize,
document.addEventListener('DOMContentLoaded', function () {
  setMenu();
})

window.addEventListener('resize', function () {
  setMenu();
})

function setMenu() {
  if (window.matchMedia("(min-width: 992px)").matches) {
    showMenu();
    walletTrigger.removeEventListener('click', toggleWallet)
    notificationsTrigger.removeEventListener('click', toggleNotifications);
  } else {
    hideMenu();
    walletTrigger.addEventListener('click', toggleWallet)
    notificationsTrigger.addEventListener('click', toggleNotifications);
  }
}

function showMenu() {
  document.body.classList.add('show-menu');
}

function hideMenu() {
  document.body.classList.remove('show-menu', 'expand-notifications', 'expand-wallet');
}

// menu toggle and sub-menu toggle

document.querySelector('.side-menu__button').addEventListener('click', function (e) {
  e.preventDefault();
  iconAnimation();
  let state = 'small';
  if (document.body.classList.contains('show-menu')) {
    state = 'expanded';
  }
  toggleMenu(state);
})

function toggleMenu(state) {
  switch (state) {
    case 'expanded':
      hideMenu();
      break;
    case 'small':
      showMenu();
  }
}

function toggleWallet() {
  document.body.classList.toggle('expand-wallet');
  showMenu();
}

function toggleNotifications() {
  document.body.classList.toggle('expand-notifications');
  showMenu();
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