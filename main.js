

const openNav = document.getElementById('open-menu');

const nav = document.querySelector('nav');

const closeNav  = document.getElementById('close-menu');


openNav.addEventListener('click', () => {
    
    nav.classList.add('add')
})


// closeNav.addEventListener('click', () => {
    
//     nav.classList.add('rotate')
// })



closeNav.addEventListener('click', () => {
    
    nav.classList.remove('add')
})