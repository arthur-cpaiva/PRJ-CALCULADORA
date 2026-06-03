//Pegar elemento (TAG) pelo ID
document.getElementById;
//Pegar elemento (valor) pelo ID e colocar uma variável
let numero = document.getElementById('num1').value;
//atirbuir aoutro valor ao elemento pelo id
document.getElementById('num1').value = 30;

//Pegar elemento pela tag
document.getElementsByTagName('p');
//Pegar um array de tags pelo nome da tag
document.getElementsByTagName('p'); //array
//Pegar um item do array de tags pelo nome da tag
document.getElementsByTagName('p')[0] //seleciono a tag
//Pegar o conteúdo de uma tag específica dentro do array
getElementsByTagName('p')[0].innetHTML;//seleciono o conteúdo

//Pego um único elemento com class, tag ou id OU o primeiro que encontrar
document.querySelector('#num1');
document.querySelector('.box');
document.querySelector('p');

//Pego um array de elementos com class, tag ou id
document.querySelectorAll('#num1')[1]; //no gerak usado com querySelector
document.querySelectorAll('.box');
document.querySelectorAll('p');
