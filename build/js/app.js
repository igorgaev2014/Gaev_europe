'use strict';

var pageHeader = document.querySelector('.page-header');
var headerToggle = document.querySelector('.main-nav__button');

// pageHeader.classList.remove('page-header--nojs');

headerToggle.addEventListener('click', function () {
  // console.log('clicked');
  if (pageHeader.classList.contains('page-header--closed')) {
    pageHeader.classList.remove('page-header--closed');
    pageHeader.classList.add('page-header--opened');

  } else {
    pageHeader.classList.add('page-header--closed');
    pageHeader.classList.remove('page-header--opened');
  }
});
