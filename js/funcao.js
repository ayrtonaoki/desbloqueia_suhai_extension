//PEGA OS ULTIMOS 3 DIGITOS DO CAMPO DE LOGIN E PREENCHE O CAMPO DE SENHA COM bidu@'ultimos 3 digitos do login'
var login = document.getElementById("login").value;
document.getElementById("password").value ="bidu@" + login.substr(-3);
var button = document.getElementById("loginBtn");
button.click();