let btnOpen = document.querySelector('#open-menu')
let btnClose = document.querySelector('#close-menu')
let menu = document.querySelector('#mobile-menu')

btnOpen.addEventListener('click', () => {
  menu.classList.remove('disabled')
})

btnClose.addEventListener('click', () => {
  menu.classList.add('disabled')
})

