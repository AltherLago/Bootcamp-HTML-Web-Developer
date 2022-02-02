
/*
// class1

var nome = "Alther Lago";
var idade = 26;
var idade2 = 10;
var frase = "Japão é o melhor time do mundo"
//alert(nome + " tem " + idade + " anos");

console.log(nome);
console.log(idade + idade2);
console.log(frase.replace("Japão",  "Brasil"))
console.log(frase.toUpperCase());
*/

// class 2

/*
var lista = ["maça", "pêra", "laranja"];
lista.push("uva");
lista.pop();
console.log(lista);
console.log(lista[1]);
console.log(lista.length);
console.log(lista.reverse);
console.log(lista.toString());
console.log(lista.toString()[0]);
console.log(lista.join(" - "));

var frutas = [{nome: "maça", cor: "vermelha"}, {nome: "uva", cor: "roxa"}];
console.log(frutas);
*/

// class 3

/*
var idade = prompt("Qual é a sua idade?")

if (idade >= 18) {
    alert("Maior de idade")
} else {
    alert("Menor de idade")
}

var count = 0;

while (count < 5) {
    console.log(count);
    count ++;
}

for (count = 0; count <= 5; count++){
    //alert(count);
}

var d = new Date();
alert(d.getMonth() + 1);
alert(d.getMinutes());
alert(d.getUTCMinutes());

*/

// class 4

/*

function soma(n1,n2){
    return n1 + n2;
}

alert(soma(5,10));

var validar;

function validaIdade(idade){
    
    validar;
    if (idade >= 18){
        validar = true;
    } else {
        validar = false;
    }
    return validar;
}

var idade = prompt("Qual a sua idade?");
console.log(validaIdade(idade));

*/

// class 5

function botão(){
    document.getElementById("Agradecimento");
    console.log(document.getElementById("Agradecimento"));
    //alert("Obrigado por clicar");
}


