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
    var topMenu = document.querySelector('.top-menu');
    var content = document.querySelector('.content');
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
        if (topMenu.classList.contains ('top-menu--expand')) {
            topMenu.classList.toggle('top-menu--expand-notifications', visible)
        }
    }
}
/*      SLIDER VALUE

var myRange = document.querySelector('.postback__range-input');
var myValue = document.querySelector('.postback__range-value');
var myUnits = 'myUnits';
var off = myRange.offsetWidth / (parseInt(myRange.max) - parseInt(myRange.min));
var px =  ((myRange.valueAsNumber - parseInt(myRange.min)) * off) - (myValue.offsetParent.offsetWidth / 2);

  myValue.style.left = px + 'px';
  myValue.style.top = myRange.offsetHeight + 'px';
  myValue.innerHTML = myRange.value + ' ' + myUnits;

  myRange.oninput =function(){
    let px = ((myRange.valueAsNumber - parseInt(myRange.min)) * off) - (myValue.offsetWidth / 2);
    myValue.innerHTML = myRange.value + ' ' + myUnits;
    myValue.style.left = px + 'px';
  };



 let slider, sliderfill, thumb, slidervalue;
 let initialValue = 104; //initial values for the sliders
 
 document.addEventListener('DOMContentLoaded', function (e) { init();});
 
 function init(){
   slider = document.querySelectorAll(".postback__range-input");
   sliderfill = document.querySelectorAll(".sliderfill");
   thumb = document.querySelectorAll(".sliderthumb");
   slidervalue = document.querySelectorAll(".slidervalue");
   // We need to change slider appearance to respond to both input and change events. 
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
   let size = getComputedStyle(elem).getPropertyValue("--thumbsize");
   let newx = `calc(${pc}% - ${parseInt(size)/2}px)`;
   elem.style.left = newx;
   elem.innerHTML = val;
 }
 function setThumb(elem,val){
   let size = getComputedStyle(elem).getPropertyValue("--thumbsize");
   let newx = `calc(${val}% - ${parseInt(size)/2}px)`;
   elem.style.left = newx;
   let max = 100;
   let degrees = 360 * (val/max);
   let rotation = `rotate(${degrees}deg)`;
     elem.style.transform = rotation;
 }
 function setSliderFill(elem,val){
   let fillcolor = getComputedStyle(elem).getPropertyValue("--accentcolor");
   let alphafillcolor = getComputedStyle(elem).getPropertyValue("--accentcoloralpha");
   // we create a linear gradient with a color stop based on the slider value
   let gradient = `linear-gradient(to right, ${fillcolor} 0%, 
 ${alphafillcolor} ${val}%, 
 rgba(255,255,255,0.1) ${Number(val) + 1}%, 
 rgba(255,255,255,0)  100%)`;
   elem.style.backgroundImage = gradient;
 }
 */