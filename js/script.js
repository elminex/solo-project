document.querySelector('.side-menu__hamburger').addEventListener('click', function(e) {
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

function toggleMenu(target, visible) {
    var topMenu = document.querySelector('.top-menu');
    var sideMenu = document.querySelector('.side-menu');
    if (target === 'hamburger') {
        topMenu.classList.toggle('top-menu--expand', visible)
        sideMenu.classList.toggle('side-menu--expand', visible)
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