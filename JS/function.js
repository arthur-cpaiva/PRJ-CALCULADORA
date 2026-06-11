function saudar(nome) { //dentro do parenteses fica o parâmetro
    alert(`${nome}, Seja bem vindo ao nosso site!`);
}



function media(numero1, numero2) { //com parâmetro
    let media;
    media = (numero1 + numero2) / 2;
    return media;
}

function helloWorld() { //sem parâmetro sem retorno
    alert("Hello World");
}

function mostrarPI() { //sem parâmetro e com retorno
    return Math.PI;
}

//function com parâmetro e sem retorno
saudar("Juquinha");


//function com parâmetro e com retorno
//o retorno pode ser adicionado a uma variável
let testandoRetorno = media(8, 10);
//ou exibido na tela
console.log(media(8, 10));
alert(media(8, 10));
document.getElementById('resultado').innerHTML = media(8, 10);

helloWorld();

//function sem parâmetro e sem retorno
console.log(helloWorld());

console.log(mostrarPI());
alert(mostrarPI());
document.getElementById('resultado').innerHTML = mostrarPI();