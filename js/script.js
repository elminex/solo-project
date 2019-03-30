// MENU

const topMenu = document.querySelector('.top-menu');
const content = document.querySelector('.content');
const sideMenu = document.querySelector('.side-menu');
const walletTrigger = document.querySelector('.top-menu__wallet');
const notificationsTrigger = document.querySelector('.top-menu__notifications-button');

//set menu state and close sub menus on load and window resize,
document.addEventListener('DOMContentLoaded', function () {
  setMenu();
})

window.addEventListener('resize', function () {
  setMenu();
  walletListener('expanded');
  notificationsListener('expanded');
})

function setMenu() {
  if (window.matchMedia("(min-width: 992px)").matches) {
    showMenu();
  } else {
    hideMenu();
  }
}

function showMenu() {
  topMenu.classList.remove('top-menu--expand');
  sideMenu.classList.add('side-menu--expand');
  content.classList.remove('content--margin');
}

function hideMenu() {
  topMenu.classList.add('top-menu--expand');
  sideMenu.classList.remove('side-menu--expand');
  content.classList.add('content--margin');
}

// menu toggle and sub-menu toggle

document.querySelector('.side-menu__button').addEventListener('click', function (e) {
  e.preventDefault();
  iconAnimation();
  let state;
  if (sideMenu.classList.contains('side-menu--expand') === true) {
    state = 'expanded';
  } else {
    state = 'small'
  }
  toggleMenu(state);
  if (window.matchMedia("(max-width: 992px)").matches) {
    walletListener(state);
    notificationsListener(state);
  }
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

function walletListener(state) {
  switch (state) {
    case 'small':
      walletTrigger.addEventListener('click', walletToggle);
      break;
    case 'expanded':
      topMenu.classList.remove('top-menu--expand-wallet');
      walletTrigger.removeEventListener('click', walletToggle);
  }
}

function notificationsListener(state) {
  switch (state) {
    case 'small':
      notificationsTrigger.addEventListener('click', notificationToggle);
      break;
    case 'expanded':
      topMenu.classList.remove('top-menu--expand-notifications');
      notificationsTrigger.removeEventListener('click', notificationToggle);
  }
}

function notificationToggle() {
  topMenu.classList.toggle('top-menu--expand-notifications');
}

function walletToggle() {
  topMenu.classList.toggle('top-menu--expand-wallet');
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
    popup.classList.remove('show')
  }
}

/*

//jedna klasa do otwierania wallet i notifications
//popup triggers i notification triggers

*/