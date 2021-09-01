window.onload = function() {
    document.getElementById("form1").onsubmit = validar;
    document.getElementById('login').onfocus = resetErrorLogin;
    document.getElementById('passw').onfocus = resetErrorSenha;
}

validar = function() {
    let temErro = false;

    if (document.getElementById("login").value != 'otaciliow') {
        temErro = true;
        document.getElementById('login-erro').classList.add('visible');
        console.log('deu ruim');
    }

    if (document.getElementById('passw').value != '54321') {
        temErro = true;
        document.getElementById('senha-erro').classList.add('visible');
    }
    
    return !temErro;
}

function resetErrorLogin () {
    document.getElementById('login-erro').classList.remove('visible');

}

function resetErrorSenha() {
    document.getElementById('senha-erro').classList.remove('visible');

}

