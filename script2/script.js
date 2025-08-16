let numero = parseInt(prompt("Olá! Informe um número para gerar a tabuada:")); //Pede ao usuário que informe um número.

let i; //Multiplicador


if (isNaN(numero)){ //Emite uma mensagem caso o valor seja uma String
    alert("Opa! Valor inválido! Você deve informar um número, e não um caracter.");
} else{
    let resultado = "Tabuada feita!" + "\n";
    for (i = 1; i <= 10; i++){
        resultado += numero + " x " + i + " = " + (numero * i) + "\n";
    }

    alert(resultado);
}