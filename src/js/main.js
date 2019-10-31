let menuButton = document.querySelector(".ham4");
let header = document.querySelector(".header");
let mobileNavigation = document.querySelector('.header--navigation');
let body = document.querySelector('body');
let banner = document.querySelector('.banner');
let enter = document.querySelector('.header--enter');
let modal = document.querySelector('.modal');
let modalBtn = document.querySelector('.modal-btn');
let oldScrollY = 0;

menuButton.addEventListener("click", function () {
  menuButton.classList.toggle('active');
  mobileNavigation.classList.toggle('show');
  body.classList.toggle('overflow');
});

enter.addEventListener("click", function () {
  modal.classList.add('show-modal');
});

modalBtn.addEventListener("click", function () {
  modal.classList.remove('show-modal');
});

window.onscroll = function () {
  let scrolled = window.pageYOffset || document.documentElement.scrollTop;
  let dY = scrolled - oldScrollY;

  if (dY > 0) {
    header.className = ('header fixed fixed-bottom');
    banner.classList.add('padding');

  } else {
    header.className = ('header fixed fixed-top');
  }
  oldScrollY = scrolled;
};

