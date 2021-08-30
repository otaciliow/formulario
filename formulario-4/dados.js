window.onload = function() {
    document.getElementById('toggle-navbar').onclick = navbar;
}

function navbar() {
    let navbar = document.querySelector('nav');
    let content1 = document.querySelector('content1');

    navbar.classList.toggle('active');
    content1.classList.toggle('active');
    
}