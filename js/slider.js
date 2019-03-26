//    Range slider

let sliders, sliderfills, thumbs, slidervalues;
let initialValue = 104;

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
