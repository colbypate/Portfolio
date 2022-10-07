const hamburgerButton = document.querySelector('.hamburger');
const navBar = document.querySelector('.nav-bar');

function toggleButton() {
    navBar.classList.toggle('show');
}

hamburgerButton.addEventListener('click', toggleButton);
