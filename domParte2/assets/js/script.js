/*
var a = document.getElementById('container'); //ligação com elemento 
a.addEventListener('click', clicar);
a.addEventListener('mouseenter', entrar);
a.addEventListener('mouseout', sair);

function clicar(){
       a.innerText='olá mundo';
       a.style.background='green';
}

function sair(){
    a.innerText='saiu';
    a.style.background='blue';
}

function entrar(){
    a.innerText='entrou';
    a.style.background='red';
}

 */
function somar(){
    var n1 = document.getElementById('txtn1'); //com element
    var n2 = document.querySelector('input#txtn2');// com querySelector
    var res = document.getElementById('res');
    var tnt1 = Number(n1.value);
    var tnt2 = Number(n2.value);
    var resultado = tnt1 + tnt2;
    res.innerHTML= `a soma de ${tnt1} com ${tnt2} é: ${resultado}`;

}

function multiplicar(){
    var m1 = document.getElementById('mult1');
    var m2 = document.getElementById('mult2');
    var res = document.getElementById('mult');
    var num1 = Number(m1.value);
    var num2 = Number(m2.value);
    var resultado = num1*num2;
    res.innerHTML= `a multiplição de ${num1} com ${num2} é: ${resultado}`;
}
