//declaração de variáveis constantes
const botao = document.querySelector("#btnCalcular");
const numero1 = document.querySelector("#num1");
const numero2 = document.querySelector("#num2");
const resultado = document.querySelector("#resultado");


//área das funções
function somar() {

    let num1, num2, resCalculo;

    if (validarEntradas() === true) { // sem parâmetro e com retorno /*sempre que criar uma função, adicionar o parenteses, mesmo que não tenha nada*/
        num1 = Number(numero1.value);
        num2 = Number(numero2.value);
        resCalculo = num1 + num2;
        exibirResultado(resCalculo); //com parâmetro e sem retorno
    } else {
        mostrarMensagemErro(); //sem parâmetro e sem retorno
    }

}

function validarEntradas() { //sem parâmetro e com retorno
    if (isNaN(numero1.value) || isNaN(numero2.value)) { //com parâmetro e com retorno
        return false
    } else {
        return true
    }
}

//O programa começa aqui

function mostrarMensagemErro() { //sem parâmetro e com retorno
    resultado.innerHTML = "Valores inválidos. Insira novos valores (números)";
}

function exibirResultado(valor) {  //com parâmetro e sem retorno /*sempre que criar uma função, adicionar o parenteses, mesmo que não tenha nada*/
    resultado.innerHTML = valor;
}


botao.addEventListener("click", somar); //com parâemtro e sem retorno