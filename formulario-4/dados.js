window.onload = function() {
    document.getElementById('navbar-open').onclick = navbarOpen;
    document.getElementById('navbar-close').onclick = navbarClose;
    document.getElementById('about-me').onclick = togglePage1;
    document.getElementById('projects').onclick = togglePage2;
    document.getElementById('contacts').onclick = togglePage3;
    document.getElementById('mentions').onclick = togglePage4;
}

const divMain = document.querySelector('.container-main');

function navbarOpen () {
    divMain.classList.toggle('active');
}

function navbarClose () {
    divMain.classList.toggle('active');
}

function togglePage1 () {
    document.getElementById('container1').style.display = 'flex'
    document.getElementById('container2').style.display = 'none'
    document.getElementById('container3').style.display = 'none'
    document.getElementById('container4').style.display = 'none'
}

function togglePage2 () {
    document.getElementById('container1').style.display = 'none'
    document.getElementById('container2').style.display = 'flex'
    document.getElementById('container3').style.display = 'none'
    document.getElementById('container4').style.display = 'none'
}

function togglePage3 () {
    document.getElementById('container1').style.display = 'none'
    document.getElementById('container2').style.display= 'none'
    document.getElementById('container3').style.display = 'flex'
    document.getElementById('container4').style.display = 'none'
}

function togglePage4 () {
    document.getElementById('container1').style.display = 'none'
    document.getElementById('container2').style.display = 'none'
    document.getElementById('container3').style.display = 'none'
    document.getElementById('container4').style.display = 'flex'
}