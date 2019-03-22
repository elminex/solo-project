
//  popups
/*
var login = document.querySelector('.top-menu__user');
var logout = document.querySelector('#logout-button');
var chat = document.querySelector('.side-menu__chat-link');

var loginPopup = document.querySelector('#login');
var logoutPopup = document.querySelector('#logout');
var chatPopup = document.querySelector('#chat');

login.addEventListener("click", function(){
  openPopup('login');
});
logout.addEventListener('click', function(){
  openPopup('logout');
});
chat.addEventListener('click', function(){
  openPopup('chat');
});

window.onclick = function (event) {
  var popup = document.querySelectorAll('.popup');
  var i;
  for (i = 0; i < popup.length; i++) { 
    if (event.target == popup[i]) {
      popup[i].style.display = 'none';
    }
  }
}
*/


// popups

document.addEventListener('click', function (event) {
  let trigger = event.target.getAttribute('id');
  let loginPopup = document.querySelector('#login');
  let logoutPopup = document.querySelector('#logout');
  let chatPopup = document.querySelector('#chat');
  switch(trigger) {
    case 'login-trigger':
    case 'login-trigger-wrap':
      loginPopup.style.display = 'block';
      closePopup(loginPopup);
      break;
    case 'logout-trigger':
    case 'logout-trigger-wrap':
      logoutPopup.style.display = 'block';
      closePopup(logoutPopup);
      break;
    case 'chat-trigger':
    case 'chat-trigger-portrait':
      chatPopup.style.display = 'block';
      let close = document.querySelector('.popup-chat__close');
      close.onclick = function () {
        chatPopup.style.display = 'none';
      }
      closePopup(chatPopup);
      break;
  }
});

function closePopup(popup) {
  window.onclick = function (event) {
    if (event.target == popup)
      popup.style.display = 'none';
  }
}


//      MENU

document.querySelector('.side-menu__button').addEventListener('click', function(e) {
  e.preventDefault();
  toggleMenu('hamburger')
});
document.querySelector('.top-menu__wallet').addEventListener('click', function(e) {
  e.preventDefault();
  toggleMenu('wallet')
});
document.querySelector('.top-menu__notifications-bell').addEventListener('click', function(e) {
  e.preventDefault();
  toggleMenu('notifications')
});

var sideMenu = document.querySelector('.side-menu');
if (window.matchMedia("(min-width: 992px)").matches) {
  sideMenu.classList.add('side-menu--expand')
};

function toggleMenu(target) {
  let topMenu = document.querySelector('.top-menu');
  let content = document.querySelector('.content');
  if (target === 'hamburger') {
      topMenu.classList.toggle('top-menu--expand')
      sideMenu.classList.toggle('side-menu--expand')
      content.classList.toggle('content--margin')
  }
  else if (target === 'wallet') {
      if (topMenu.classList.contains ('top-menu--expand')) {
          topMenu.classList.toggle('top-menu--expand-wallet')
      }
  }
  else if (target === 'notifications') {
    if (topMenu.classList.contains('top-menu--expand')) {
      topMenu.classList.toggle('top-menu--expand-notifications');
      }
  }
}


function setMenu() {
  if (window.matchMedia("(min-width: 992px)").matches) {
    sideMenu.classList.add('side-menu--expand');
  };
};
