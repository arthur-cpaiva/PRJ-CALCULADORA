//declaração de variáveis constantes
const botao = document.querySelector("#btnCalcular");
const numero1 = document.querySelector("#num1");
const numero2 = document.querySelector("#num2");
const resultado = document.querySelector("#resultado");


//área das funções
function somar() {

    let num1, num2, resCalculo;

    num1 = Number(numero1.value);
    num2 = Number(numero2.value);

    console.log(isNaN(num1));
    console.log(isNaN(num2));
    
    resCalculo = num1 + num2;
    resultado.innerHTML = resCalculo;
}

function validarEntradas() {
    if (isNaN(numero1.value) || isNaN(numero2.value)) {
        resultado.innerHTML = "Valores inválidos. Insira novos valores (números)"
        return false
    } else {
        return true
    }
}

function mostrarMensagemdeErro() {
    resultado.innerHTML = "Valores inválidos. Insira novos valores (números)"
}

//O programa começa aqui

if (validarEntradas() == true) {
    botao.addEventListener("click", somar)
} else {
    mostrarMensagemdeErro();
}



botao.addEventListener("click", somar);