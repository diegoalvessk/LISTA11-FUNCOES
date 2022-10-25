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

var escolha = 0
var condicao = 1
var arraysoma = []
var arraysub = []
var arraymulti = []
var arraydiv = []
var indexsoma = 0
var indexsub = 0
var indexmulti = 0
var indexdiv = 0

while(condicao ==  1){

            escolha = parseInt(prompt("Escolha qual operação deseja realizar: 1 = Somar; 2 = Subtrair; 3 = Multiplicar; 4 = Dividir"))

            if(escolha == 1){
                arraysoma[indexsoma] = Somar(numeroA, numeroB)
                alert("A soma dos dois número é: " + arraysoma[indexsoma])
                indexsoma++
            }

            if(escolha == 2){
                arraysub[indexsub]  = Sub(numeroA, numeroB)
                alert("A subtração dos dois número é: " + arraysub[indexsub])
                indexsub++
            }

            if(escolha == 3){
                arraymulti[arraymulti] = Multi(numeroA, numeroB)
                alert("A multiplicação dos dois número é: " + arraymulti[arraymulti])
                indexmulti++
            }

            if(escolha == 4){
                arraydiv[indexdiv] = Div(numeroA, numeroB)
                alert("A divisão dos dois número é: " +  arraydiv[indexdiv])
                indexdiv++
            }
    condicao = prompt("Deseja continuar? sim = 1 e nao = 2")
}

exibirHistorico(arraydiv, arraymulti, arraysoma, arraysub)

function Somar(num1, num2){
    var soma = (num1 + num2)
    return soma
}

function Sub(num1, num2){
    var sub = (num1 - num2)
    return sub
}

function Multi(num1, num2){
    var multi = (num1 * num2)
    return multi
}

function Div(num1, num2){
    var div = (num1 / num2)
    return div
}

function exibirHistorico(arraydiv, arraymulti, arraysoma, arraysub){
   console.log("Historico do resultado das somas: " + arraysoma)
   console.log("Historico do resultado das subtrações: " + arraysub)
   console.log("Historico do resultado das divisões: " + arraydiv)
   console.log("Historico do resultado das multiplicações: " + arraymulti)

}


