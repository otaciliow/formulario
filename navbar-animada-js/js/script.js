window.onload = function () { // para que o script externo funcione, sempre deve haver no início do documento o evento window.onload

let btn = document.querySelector("#btn"); //Seleciona o botão com a id btn
let sidebar = document.querySelector(".sidebar"); // seleciona a div de classe sidebar
let searchBtn = document.querySelector(".bx-search"); // seleciona o elemento de classe bx-search
let logoutBtn = document.querySelector("#log-out"); // seleciona o elemento de id log-out
let mainDiv = document.querySelector(".home-content");
let darkmodeBtn = document.querySelector(".dark-mode");
let textDarkMode = document.querySelector(".text");

btn.onclick = function () { //aciona uma função no momento em que o botão é clicado
    sidebar.classList.toggle("active"); //adiciona à lista de classes a classe active. clicar novamente remove a mesma
}
searchBtn.onclick = function () {
    sidebar.classList.toggle("active");
}
logoutBtn.onclick = function () {
    alert("Deseja mesmo fazer log-out?") //aciona um alerta do navegador, com a mensagem entre parênteses e aspas
}
darkmodeBtn.onclick = function () {
    mainDiv.classList.toggle("dark");
    textDarkMode.classList.toggle("dark");
}

}