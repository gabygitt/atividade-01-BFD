let ano = parseInt(prompt("Olá! Informe um ano:")); //Pede ao usuário que informe um ano.


if (isNaN(ano)){ //Emite uma mensagem caso o valor seja uma String
    alert("Ano inválido! O valor informado é um caracter, e não um número.");
} else{ //Aplicando condições e regras para o ano bissexto
if (ano < 1582){
    alert("Opa! Ano inválido."); 
} else if (ano % 400 === 0){
    alert(ano + " é bissexto! Já que é divisível por 400.");
} else if (ano % 4 === 0){
    alert(ano + " é bissexto! Já que é divisível por 4.");
} else if (ano % 100 === 0){
    alert("Opa! " + ano + " não é bissexto! Já que é divisível por 100, e não por 400.");
} else {
    alert(ano + " não é bissexto!");
} 
}