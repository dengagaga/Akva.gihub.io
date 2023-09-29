const menu = document.querySelector('.nav')
const menuBtn = document.querySelector('.menu-icon')

const body = document.body

menuBtn.addEventListener('click', function () {
    menu.classList.toggle('open')
    menuBtn.classList.toggle('active')
})