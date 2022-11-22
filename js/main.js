
let menubar = document.querySelector('.menu__bars')
let menu = document.querySelector('.header__mobile-wrap .menu')
let overlay = document.querySelector('.overlay_container')
let hideMenu = document.querySelector('.hide__menu')

menubar.addEventListener('click', (e) => {
  console.log('1');
  e.stopPropagation();
  e.stopImmediatePropagation();
  menu.classList.toggle('show__menu')
  overlay.classList.toggle('menu_bars_overlay')
})

overlay.addEventListener('click', (e) => {
  menu.classList.remove('show__menu')
  overlay.classList.remove('menu_bars_overlay')
})

hideMenu.addEventListener('click', () => {
  menu.classList.remove('show__menu')
  overlay.classList.remove('menu_bars_overlay')
})

