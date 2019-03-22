// MENU
document.addEventListener('DOMContentLoaded', function () {
  setMenu();
});
window.addEventListener('resize', function () {
  setMenu();
  document.querySelector('.top-menu__wallet').removeEventListener('click', walletToggle);
  document.querySelector('.top-menu__notifications-bell').removeEventListener('click', notificationToggle);
});
function setMenu() {
  if (window.matchMedia("(min-width: 992px)").matches) {
    showMenu();
  }
  else {
    hideMenu();
  };
};

function showMenu() {
  topMenu.classList.remove('top-menu--expand');
  sideMenu.classList.add('side-menu--expand');
  content.classList.remove('content--margin');
};

function hideMenu() {
  topMenu.classList.add('top-menu--expand');
  sideMenu.classList.remove('side-menu--expand');
  content.classList.add('content--margin');
};

let topMenu = document.querySelector('.top-menu');
let content = document.querySelector('.content');
let sideMenu = document.querySelector('.side-menu');

document.querySelector('.side-menu__button').addEventListener('click', function (e) {
  e.preventDefault();
  let state 
  if (sideMenu.classList.contains('side-menu--expand') === true) {
    state = 'expanded';
  }
  else {
    state = 'small'
  }
  toggleMenu(state);
  walletListener(state);
  notificationsListener(state);
});

function toggleMenu(state) {
  switch (state) {
    case 'expanded':
      hideMenu();
      break;
    case 'small':
      showMenu();
  };
};
function walletListener(state) {
  switch (state) {
    case 'small':
      document.querySelector('.top-menu__wallet').addEventListener('click', walletToggle);
      break;
    case 'expanded':
      topMenu.classList.remove('top-menu--expand-wallet');
      document.querySelector('.top-menu__wallet').removeEventListener('click', walletToggle);
  };
};
function notificationsListener(state) {
  switch (state) {
    case 'small':
      document.querySelector('.top-menu__notifications-bell').addEventListener('click', notificationToggle);
      break;
    case 'expanded':
      topMenu.classList.remove('top-menu--expand-notifications');
      document.querySelector('.top-menu__notifications-bell').removeEventListener('click', notificationToggle);
  };
};

function notificationToggle() {
  topMenu.classList.toggle('top-menu--expand-notifications');
};
function walletToggle() {
  topMenu.classList.toggle('top-menu--expand-wallet');
};


//    Range slider

let sliders, sliderfills, thumbs, slidervalues;
let initialValue = 104 //initial values for the sliders

document.addEventListener('DOMContentLoaded', function (e) { init(); });

function init(){
  sliders = document.querySelector(".postback__range-input");
  sliderfills = document.querySelector(".sliderfill");
  thumbs = document.querySelector(".sliderthumb");
  slidervalues = document.querySelector(".slidervalue");
  sliders.addEventListener("input",function(e){updateSlider(sliders.value);});
  sliders.addEventListener("change",function(e){updateSlider(sliders.value);});
  sliders.value = initialValue;
  updateSlider(sliders.value);
}
function updateSlider(val){
  let min = Number(sliders.getAttribute("min"));
  let max = Number(sliders.getAttribute("max"));
  let pc = (val/(max-min)) * 100
  setThumbText(slidervalues,val,pc);
  setThumb(thumbs,pc);
  setSliderFill(sliderfills,pc);
}
function setThumbText(elem,val,pc){
  let size = 60;
  let newx = `calc(${pc}% - ${parseInt(size)/2}px)`;
  elem.style.left = newx;
  elem.innerHTML = val + ' hours';
}
function setThumb(elem,val){
  let size = 22;
  let newx = `calc(${val}% - ${parseInt(size)/2}px)`;
  elem.style.left = newx;
}
function setSliderFill(elem,val){
  let alphafillcolor = getComputedStyle(elem).getPropertyValue("color");
  let gradient = `linear-gradient(to right, 
${alphafillcolor} ${val}%, 
rgba(255,255,255,0.1) ${Number(val) + 1}%, 
rgba(255,255,255,0)  100%)`;
  elem.style.backgroundImage = gradient;
};

// popups

let popupTriggers = document.querySelectorAll('.popup-trigger');
for (let i = 0; i < popupTriggers.length; i++) {
  let trigger = popupTriggers[i];
  trigger.addEventListener('click', function () {
    openPopup(i);
  });
};

function openPopup(i) {
  let loginPopup = document.querySelector('#login');
  let logoutPopup = document.querySelector('#logout');
  let chatPopup = document.querySelector('#chat');
  let trigger = popupTriggers[i].getAttribute('id');
  switch (trigger) {
    case 'login-trigger':
      loginPopup.style.display = 'block';
      closePopup(loginPopup);
      break;
    case 'logout-trigger':
      logoutPopup.style.display = 'block';
      closePopup(logoutPopup);
      break;
    case 'chat-trigger':
      chatPopup.style.display = 'block';
      closePopup(chatPopup);
  };
};
function closePopup(popup) {
  window.onclick = function (event) {
    if (event.target == popup)
      popup.style.display = 'none';
  };
  let close = document.querySelector('.popup-chat__close');
  close.onclick = function () {
    popup.style.display = 'none';
  };
};