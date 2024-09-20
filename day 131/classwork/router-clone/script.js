const pages = {
    home: `<div><h1>Welcome Home!</h1></div>`,
    about: `<div><h1>Welcome in About!</h1></div>`
}

const home = document.getElementById('home');
const about = document.getElementById('about');
const info = document.getElementById('info');

info.innerHTML = pages.home;
home.addEventListener('click', () => info.innerHTML = pages.home);
about.addEventListener('click', () => info.innerHTML = pages.about);