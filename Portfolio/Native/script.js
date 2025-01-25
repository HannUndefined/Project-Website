const navMenu = document.getElementById('nav-menu')

document.getElementById('nav-toggle').addEventListener('click', () => {
    navMenu.classList.add('show-menu')
})

document.getElementById('nav-close').addEventListener('click', () => {
    navMenu.classList.remove('show-menu')
})