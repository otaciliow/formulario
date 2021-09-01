window.onload = function() {
    document.getElementById('navbar-open').onclick = navbarOpen;
    document.getElementById('navbar-close').onclick = navbarClose;
}

// const divMain = document.querySelector('.container-main'); Todas as linhas de código abaixo podem ser resumidas nessa única linha aqui (as alterações principais são feitas diretamente no css)
const navbar = document.querySelector('nav');
const content1 = document.querySelector('.content1');
const listas = document.querySelector('.lista-nav');
const spanDesc = document.getElementsByClassName('about');
const div1 = document.getElementById('container1');

function navbarOpen () {
    // divMain.classList.toggle('active'); Todas as linhas de código abaixo podem ser resumidas nessa única linha aqui (as alterações principais são feitas diretamente no css)
    navbar.classList.add('active');
    document.getElementById('navbar-open').style.display = 'none';
    document.getElementById('navbar-close').style.display = 'flex';
    for (x=0;x<=spanDesc.length;x++) {
        spanDesc[x].style.opacity = '1';
        spanDesc[0].style.opacity = '1';
        spanDesc[1].style.opacity = '1';
        spanDesc[2].style.opacity = '1';
        spanDesc[3].style.opacity = '1';
    }
    div1.classList.add('active');
    for (x=0;x<=divs.length;x++) {
        divs[x].classList.add('active');
    }
}

function navbarClose () {
    // divMain.classList.toggle('active'); Todas as linhas de código abaixo podem ser resumidas nessa única linha aqui (as alterações principais são feitas diretamente no css)
    navbar.classList.remove('active');
    document.getElementById('navbar-close').style.display = 'none';
    document.getElementById('navbar-open').style.display = 'flex';
    for (x=0;x<=spanDesc.length;x++) {
        spanDesc[x].style.opacity = '0';
        spanDesc[0].style.opacity = '0';
        spanDesc[1].style.opacity = '0';
        spanDesc[2].style.opacity = '0';
        spanDesc[3].style.opacity = '0';
    }
    div1.classList.remove('active');
    for (x=0;x<=divs.length;x++) {
        divs[x].classList.remove('active');
    }
}