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

function toggleMenu(target, visible) {
    let topMenu = document.querySelector('.top-menu');
    let content = document.querySelector('.content');
    if (target === 'hamburger') {
        topMenu.classList.toggle('top-menu--expand', visible)
        sideMenu.classList.toggle('side-menu--expand', visible)
        content.classList.toggle('content--margin', visible)
    }
    else if (target === 'wallet') {
        if (topMenu.classList.contains ('top-menu--expand')) {
            topMenu.classList.toggle('top-menu--expand-wallet', visible)
        }
    }
    else if (target === 'notifications') {
      if (topMenu.classList.contains('top-menu--expand')) {
        topMenu.classList.toggle('top-menu--expand-notifications', visible);
        }
    }
}

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

//  popups

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

window.onclick = function(event) {
  var popup = document.querySelectorAll('.popup');
  var i;
  for (i = 0; i < popup.length; i++) { 
    if (event.target == popup[i]) {
      popup[i].style.display = 'none';
    }
  }
}

var close = document.querySelector('.popup-chat__close');
close.onclick = function() {
  chatPopup.style.display = 'none';
}

function openPopup(element) {
  if(element === 'login') {
    loginPopup.style.display = 'block';
  }
  else if(element === 'logout') {
    logoutPopup.style.display = 'block';
  }
  else if(element === 'chat') {
    chatPopup.style.display = 'block';
  }
}