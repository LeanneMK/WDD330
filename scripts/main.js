function toggleMenu() {
    document.querySelector('#nav').classList.toggle('open');
}

document.querySelector('#menu').addEventListener('click', toggleMenu);