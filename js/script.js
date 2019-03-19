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
let initialValue = [104,50,63,88]; //initial values for the sliders

document.addEventListener('DOMContentLoaded', function (e) { init();});

function init(){
  sliders = document.querySelectorAll(".postback__range-input");
  sliderfills = document.querySelectorAll(".sliderfill");
  thumbs = document.querySelectorAll(".sliderthumb");
  slidervalues = document.querySelectorAll(".slidervalue");
  /* We need to change slider appearance to respond to both input and change events. */
  for (let i=0;i<sliders.length;i++){
    sliders[i].addEventListener("input",function(e){updateSlider(i,sliders[i].value);});
    sliders[i].addEventListener("change",function(e){updateSlider(i,sliders[i].value);});
    //set initial values for the sliders
    sliders[i].value = initialValue[i];
    //update each slider
    updateSlider(i,sliders[i].value);
  }
}
function updateSlider(fillindex,val){

  //sets the text display and location for each thumb and the slider fill  
  let min = Number(sliders[fillindex].getAttribute("min"));
  let max = Number(sliders[fillindex].getAttribute("max"));
  let pc = (val/(max-min)) * 100
  setThumbText(slidervalues[fillindex],val,pc);
  setThumb(thumbs[fillindex],pc);
  setSliderFill(sliderfills[fillindex],pc);
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

  // we create a linear gradient with a color stop based on the slider value
  let gradient = `linear-gradient(to right, 
${alphafillcolor} ${val}%, 
rgba(255,255,255,0.1) ${Number(val) + 1}%, 
rgba(255,255,255,0)  100%)`;
  elem.style.backgroundImage = gradient;
};


//  popups

let login = document.querySelector('.top-menu__user');
let logout = document.querySelector('#logout-button');
let chat = document.querySelector('.side-menu__chat-link');

let loginPopup = document.querySelector('#login');
let logoutPopup = document.querySelector('#logout');
let chatPopup = document.querySelector('#chat');

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
  let popup = document.querySelectorAll('.popup');
  var i;
  for (i = 0; i < popup.length; i++) { 
    if (event.target == popup[i]) {
      popup[i].style.display = 'none';
    }
  }
}

let close = document.querySelector('.popup-chat__close');
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