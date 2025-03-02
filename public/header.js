const menu = document.querySelector('.logo-mbox')
const nav = document.querySelector('.menu-container')

menu.addEventListener('click', () => {
   nav.classList.toggle('hidden')
})
