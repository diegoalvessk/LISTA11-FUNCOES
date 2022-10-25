/*
1. Você deve criar um programa que solicite ao seu usuário dois
números A e B.
2. Crie uma função que receba os dois valores fornecidos pelo
usuário e faça uma soma com eles, e retorne o resultado;
3. Crie uma função que receba os dois valores fornecidos pelo
usuário e faça uma subtração com eles, e retorne o resultado;
4. Crie uma função que receba os dois valores fornecidos pelo
usuário e faça uma multiplicação com eles, e retorne o
resultado;
5. Crie uma função que receba os dois valores fornecidos pelo
usuário e faça uma divisão com eles, e retorne o resultado;
6. Faça com que seu usuário escolha qual função ele deseja fazer
com os números que ele inseriu, e depois de realizar essa
operação pergunte se ele deseja fazer outra ou encerrar a
aplicação.
7. Crie um array para salvar o resultado das operações e crie
também uma função para exibir o histórico dos resultados.
*/

var numeroA = 0
var numeroB = 0

numeroA = parseInt(prompt("Informe o 1° número:"))
numeroB = parseInt(prompt("Informe o 2° número:"))

var soma = Somar(numeroA, numeroB)
var sub  = Sub(numeroA, numeroB)

alert("A soma dos dois número é: " + soma)
alert("A subtração dos dois número é: " + sub)

function Somar(num1, num2){
    var soma = (num1 + num2)
    return soma
}

function Sub(num1, num2){
    var sub = (num1 - num2)
    return sub
}

