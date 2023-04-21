// const $ = document.querySelector.bind(document)
// const $$ = document.querySelectorAll.bind(document)



// const app = {
//     packages: [{
//             backgroundImage: './assets/img/container/destination-9.jpg',
//             Image: './assets/img/container/icons/arch.png',
//             name: 'Europe',
//             amount: 'items.length',
//             itemTour: items = ['Berlin', 'Amsterdam', 'Tuscany'],
//         },
//         {
//             backgroundImage: './assets/img/container/destination-9.jpg',
//             Image: './assets/img/container/icons/arch.png',
//             name: 'Europe',
//             amount: 'items.length',
//             itemTour: items = ['Berlin', 'Amsterdam', 'Tuscany'],
//         },
//         {
//             backgroundImage: './assets/img/container/destination-9.jpg',
//             Image: './assets/img/container/icons/arch.png',
//             name: 'Europe',
//             amount: 'items.length',
//             itemTour: items = ['Berlin', 'Amsterdam', 'Tuscany'],
//         },
//         {
//             backgroundImage: './assets/img/container/destination-9.jpg',
//             Image: './assets/img/container/icons/arch.png',
//             name: 'Europe',
//             amount: 'items.length',
//             itemTour: items = ['Berlin', 'Amsterdam', 'Tuscany'],
//         },
//         {
//             backgroundImage: './assets/img/container/destination-9.jpg',
//             Image: './assets/img/container/icons/arch.png',
//             name: 'Europe',
//             amount: 'items.length',
//             itemTour: items = ['Berlin', 'Amsterdam', 'Tuscany'],
//         },
//         {
//             backgroundImage: './assets/img/container/destination-9.jpg',
//             Image: './assets/img/container/icons/arch.png',
//             name: 'Europe',
//             amount: 'items.length',
//             itemTour: items = ['Berlin', 'Amsterdam', 'Tuscany'],
//         },
//     ],

// }


const menu = document.getElementById('menu');
const navbar = document.getElementById('navbar');
const menuClose = document.getElementById('menu-close');
const app = document.querySelector('app');

menu.addEventListener('click', () => {
    menu.classList.remove('fa-bars')
    menuClose.classList.toggle('fa-times');
    navbar.classList.toggle('navbar-toggle');
})

menuClose.addEventListener('click', () => {
    menu.classList.toggle('fa-bars');
    menuClose.classList.remove('fa-times');
    navbar.classList.remove('navbar-toggle');
})

// window.onclick = function(event) {
//     if (event.target == app) {
//         navbar.style.transform = "scale(0)";
//         navbar.style.opacity = "0";
//     }

// }

// navbar.addEventListener('click', function(event) {
//             const self = event.target.closest(navbar);
//             if (!self) {
//                 navbar.style.transform = "scale(0)";
//                 navbar.style.opacity = "0";
//             }
//         }