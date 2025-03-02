const menu = document.getElementById('menu-icon')
const nav = document.querySelector('.menu-container')

menu.addEventListener('click', () => {
   nav.classList.toggle('hidden')
})