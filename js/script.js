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