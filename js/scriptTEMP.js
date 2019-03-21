
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
