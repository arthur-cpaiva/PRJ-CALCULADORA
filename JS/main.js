//declaração de variáveis constantes
const botao = document.querySelector("#btnSomar");
const numero1 = document.querySelector("#num1");
const numero2 = document.querySelector("#num2");
const resultado = document.querySelector("#resultado");
const botaoSubtracao = document.querySelector("#btnSubtrair")
const botaoMultiplicacao = document.querySelector("#btnMultiplicar")
const botaoDivisao = document.querySelector("#btnDividir")
const botaoLimpar = document.querySelector("#btnLimpar")
const caixaResultado = document.querySelectorAll(".box")[1];



//área das funções
function somar() { //sem parâmetro e sem retorno

    let num1, num2, resCalculo;

    if (validarEntradas() === true) { // sem parâmetro e com retorno /*sempre que criar uma função, adicionar o parenteses, mesmo que não tenha nada*/
        num1 = Number(numero1.value);
        num2 = Number(numero2.value);
        resCalculo = num1 + num2;
        caixaResultado.classList.remove("invisible");
        limparCaixa(numero1.value & numero2.value);
        exibirResultado(resCalculo); //com parâmetro e sem retorno
    } else {
        mostrarMensagemErro(); //sem parâmetro e sem retorno
    }

}

function subtrair() {
    let num1, num2, resCalculo;

    if (validarEntradas() === true) { // sem parâmetro e com retorno /*sempre que criar uma função, adicionar o parenteses, mesmo que não tenha nada*/
        num1 = Number(numero1.value);
        num2 = Number(numero2.value);
        resCalculo = num1 - num2;
        caixaResultado.classList.remove("invisible");
        limparCaixa(numero1.value & numero2.value);
        exibirResultado(resCalculo); //com parâmetro e sem retorno
    } else {
        mostrarMensagemErro(); //sem parâmetro e sem retorno
    }


}

function multiplicar() {
    let num1, num2, resCalculo;

    if (validarEntradas() === true) { // sem parâmetro e com retorno /*sempre que criar uma função, adicionar o parenteses, mesmo que não tenha nada*/
        num1 = Number(numero1.value);
        num2 = Number(numero2.value);
        resCalculo = num1 * num2;
        caixaResultado.classList.remove("invisible");
        limparCaixa(numero1.value & numero2.value);
        exibirResultado(resCalculo); //com parâmetro e sem retorno
    } else {
        mostrarMensagemErro(); //sem parâmetro e sem retorno
    }
}

function dividir() {
    let num1, num2, resCalculo;

    if (validarEntradas() === true) { // sem parâmetro e com retorno /*sempre que criar uma função, adicionar o parenteses, mesmo que não tenha nada*/
        num1 = Number(numero1.value);
        num2 = Number(numero2.value);
        if (num2 = Number(numero2.value) === 0) {
            caixaResultado.classList.remove("invisible");
            erroDivisao();
        }

        else {
            resCalculo = num1 / num2;
            caixaResultado.classList.remove("invisible");
            limparCaixa(numero1.value & numero2.value);
            exibirResultado(resCalculo); //com parâmetro e sem retorno
        }
    } else {
        mostrarMensagemErro(); //sem parâmetro e sem retorno
    }
}

function limparCampos() {
    numero1.value = "";
    numero2.value = "";
    resultado.innerHTML = "";
    caixaResultado.classList.add("invisible");
}

function limparCaixa() {
    numero1.value = "";
    numero2.value = "";
}


function validarEntradas() { //sem parâmetro e com retorno
    if (isNaN(numero1.value) || isNaN(numero2.value)) { //com parâmetro e com retorno
        return false
    } else {
        return true
    }
}


function mostrarMensagemErro() { //sem parâmetro e com retorno
    resultado.innerHTML = "Valores inválidos. Insira novos valores (números)";
}

function erroDivisao() {
    resultado.innerHTML = "Valores inválidos - Divisão por zero";
}

function exibirResultado(valor) {  //com parâmetro e sem retorno /*sempre que criar uma função, adicionar o parenteses, mesmo que não tenha nada*/
    resultado.innerHTML = "Resultado: " + valor;

    if (valor>=0) {
        resultado.style.color = "#66C726"
    } else {
        resultado.style.color = "#DB5E27"
    }
}

//O programa começa aqui
botao.addEventListener("click", somar); //com parâemtro e sem retorno
botaoSubtracao.addEventListener("click", subtrair);
botaoMultiplicacao.addEventListener("click", multiplicar);
botaoDivisao.addEventListener("click", dividir);
botaoLimpar.addEventListener("click", limparCampos);

// botaoMultiplicacao.addEventListener("click", ()=>{
//   let num1, num2, resCalculo;
//   if (validarEntradas() === true) {
//     num1 = Number(numero1.value);
//     num2 = Number(numero2.value);
//     resCalculo = num1 * num2;
//     caixaResultado.classList.remove("invisible");
//     exibirResultado(resCalculo);
//   } else {
//     mostrarMensagemErro();
//   }
// })

// function dividir() {
// let num1, num2, resCalculo;
 
//num1 = Number(numero1.value);
//num2 = Number(numero2.value);
 
//if (num2===0) {
//alert("Erro! Divisão por zero!");    
//} else if (validarEntradas() === true) {
//resCalculo = num1 / num2;
//caixaResultado.classList.remove("invisible");
//exibirResultado(resCalculo);    
//} else {
//mostrarMensagemErro();    
//}