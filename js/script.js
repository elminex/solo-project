// MENU

let topMenu = document.querySelector('.top-menu');
let content = document.querySelector('.content');
let sideMenu = document.querySelector('.side-menu');
let walletTrigger = document.querySelector('.top-menu__wallet');
let notificationsTrigger = document.querySelector('.top-menu__notifications-bell');

//set menu state and close sub menus on load and window resize,
document.addEventListener('DOMContentLoaded', function () {
  setMenu();
});

window.addEventListener('resize', function () {
  setMenu();
  walletListener('expanded');
  notificationsListener('expanded');
});

function setMenu() {
  if (window.matchMedia("(min-width: 992px)").matches) {
    showMenu();
  } else {
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

// menu toggle and sub-menu toggle

document.querySelector('.side-menu__button').addEventListener('click', function (e) {
  e.preventDefault();
  iconAnimation();
  let state
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
      walletTrigger.addEventListener('click', walletToggle);
      break;
    case 'expanded':
      topMenu.classList.remove('top-menu--expand-wallet');
      walletTrigger.removeEventListener('click', walletToggle);
  };
};

function notificationsListener(state) {
  switch (state) {
    case 'small':
      notificationsTrigger.addEventListener('click', notificationToggle);
      break;
    case 'expanded':
      topMenu.classList.remove('top-menu--expand-notifications');
      notificationsTrigger.removeEventListener('click', notificationToggle);
  };
};

function notificationToggle() {
  topMenu.classList.toggle('top-menu--expand-notifications');
};

function walletToggle() {
  topMenu.classList.toggle('top-menu--expand-wallet');
};


// icons 

function iconAnimation() {
  let icons
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
    });
  };
};

//    Range slider

let sliders, sliderfills, thumbs, slidervalues;
let initialValue = 104 //initial values for the sliders

document.addEventListener('DOMContentLoaded', function (e) {
  init();
});

function init() {
  sliders = document.querySelector(".postback__range-input");
  sliderfills = document.querySelector(".sliderfill");
  thumbs = document.querySelector(".sliderthumb");
  slidervalues = document.querySelector(".slidervalue");
  sliders.addEventListener("input", function (e) {
    updateSlider(sliders.value);
  });
  sliders.addEventListener("change", function (e) {
    updateSlider(sliders.value);
  });
  sliders.value = initialValue;
  updateSlider(sliders.value);
};

function updateSlider(val) {
  let min = Number(sliders.getAttribute("min"));
  let max = Number(sliders.getAttribute("max"));
  let pc = (val / (max - min)) * 100
  setThumbText(slidervalues, val, pc);
  setThumb(thumbs, pc);
  setSliderFill(sliderfills, pc);
};

function setThumbText(elem, val, pc) {
  let size = 60;
  let newx = `calc(${pc}% - ${parseInt(size)/2}px)`;
  elem.style.left = newx;
  elem.innerHTML = val + ' hours';
};

function setThumb(elem, val) {
  let size = 22;
  let newx = `calc(${val}% - ${parseInt(size)/2}px)`;
  elem.style.left = newx;
};

function setSliderFill(elem, val) {
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


// CHART 
var ctx = document.getElementById('general-chart').getContext('2d');

var chart = new Chart(ctx, {
  type: 'bar',
  data: {
    labels: ["01", "02", "03", "04", "05", "06", "07", "08", "09"],
    datasets: [{
        label: "Signups",
        backgroundColor: '#8DBEC8',
        borderColor: '#8DBEC8',
        data: [350, 205, 220, 380, 420, 400, 310, 280, 300],
      },
      {
        label: "FTD",
        backgroundColor: '#F29E4E',
        borderColor: '#F29E4E',
        data: [400, 190, 300, 260, 440, 90, 210, 501, 320],
      },
      {
        label: "Earned",
        backgroundColor: '#71B374',
        borderColor: '#71B374',
        data: [59, 49, 68, 90, 67, 41, 13, 38, 48, 48],
        hidden: true,
      }
    ]
  },
});