"use strict"

var hh = 0;
var mm = window.prompt("Quantos minutos o timer terá?"); //Armazena o valor inserido pelo usuário
var ss = 0;
var tempo = 1000;
var temp;
var contador = 0;
var controle = mm; //Variável utiizada para armazenar o valor inserido pelo usuário dentro da variável 'mm'
var notification = new Audio('https://d9olupt5igjta.cloudfront.net/samples/sample_files/9040/e2b7b882993ddcd25771fc9cedac07ca8635f603/mp3/72127-sweetalertsound3-wav.mp3?1512767707');
var notification2 = new Audio('https://d9olupt5igjta.cloudfront.net/samples/sample_files/71017/6002484fa6ed0e3f78e984542caecdd0a4b3c6b6/mp3/_Discord_Message.mp3?1619010662');

//0 --> Tarefa
//1 --> Pausa
var tarefa = 0;

while (isNaN(mm) == true || mm < 0) {
    var mm = window.prompt("O valor inserido é inválido. Quantos minutos o timer terá?");
}

//Inicia o temporizador
function start() {
    if (mm < 0) {
        mm = controle;
        ss = 0;
    } else {
        temp = setInterval(() => { timer(); }, tempo);

        document.getElementById("iniciar").disabled = true;
        document.getElementById("iniciar1").disabled = true;
    }
}

//Pausa o temporizador
function pause() {
    clearInterval(temp);
    if (document.getElementById("iniciar").disabled = true) {
        document.getElementById("iniciar").disabled = false;
    }
    if (document.getElementById("iniciar1").disabled = true) {
        document.getElementById("iniciar1").disabled = false;
    }
}

//Interrompe a contagem do tempo
function stop() {
    clearInterval(temp);

    if (tarefa == 0) {
        if (contador < 4) {
            hh = 0;
            mm = 5;
            ss = 0;
        }
        if (contador == 4) {
            var pergunta = window.prompt("Você já fez 4 Pomodoros! Quer descansar por 10 minutos? S - Sim N - Não");
        } if (pergunta == "S") {
            hh = 0;
            mm = 10;
            ss = 0;
        } else {
            hh = 0;
            mm = 5;
            ss = 0;
        }
        if (contador > 4) {
            hh = 0;
            mm = 5;
            ss = 0;
        }
        document.getElementById("iniciar").disabled = true;
        document.getElementById("pausar").disabled = true;
        document.getElementById("parar").disabled = true;

        document.getElementById("iniciar1").disabled = false;
        document.getElementById("pausar1").disabled = false;
        document.getElementById("parar1").disabled = false;

        tarefa = 1;

        document.getElementById('counter').innerText = "00:00:00";
    } else {

        hh = 0;
        mm = controle;
        ss = 0;

        document.getElementById("iniciar").disabled = false;
        document.getElementById("pausar").disabled = false;
        document.getElementById("parar").disabled = false;

        document.getElementById("iniciar1").disabled = true;
        document.getElementById("pausar1").disabled = true;
        document.getElementById("parar1").disabled = true;

        tarefa = 0;
        document.getElementById('counter').innerText = "00:00:00";
    }

}

//Faz a contagem do tempo e exibição
function timer() {

    if ((mm > 0) || (ss > 0)) {
        if (ss == 0) {
            ss = 59;
            mm--;
        }
        else {
            ss--;
        }
        if (hh == 0 && mm == 0 && ss == 0) {

            notification.loop = false;
            notification.play();
            if (tarefa == 0) {
                window.alert("Hora do intervalo!");
                contador++;
            } else {
                window.alert("Hora da tarefa!");
            }
        }
    }

    if (hh == 0 && mm == 0 && ss == 0) {
        stop();
    }

    //Cria uma variável com o valor tratado HH:MM:SS
    var format = (hh < 10 ? '0' + hh : hh) + ':' + (mm < 10 ? '0' + mm : mm) + ':' + (ss < 10 ? '0' + ss : ss);

    //Insere o valor tratado no elemento counter
    if (tarefa == 0) {
        document.getElementById('counter').innerText = format;
    } else {
        document.getElementById('counter1').innerText = format;
    }

    document.getElementById('tasks').innerText = contador;


}

//Serve para inserir o código do programa dentro do HTML
function carrega() {

    //Cria uma variável com o valor tratado HH:MM:SS
    var format = (hh < 10 ? '0' + hh : hh) + ':' + (mm < 10 ? '0' + mm : mm) + ':' + (ss < 10 ? '0' + ss : ss);

    //Insere o valor tratado no elemento counter
    document.getElementById('counter').innerText = format;

    //Insere o valor do contador no elemento tasks
    document.getElementById('tasks').innerText = contador;

    return format;
}

//Encerra o programa e desabilita todas as suas funcionalidades
function finish() {
    notification2.loop = false;
    notification2.play();
    clearInterval(temp);
    document.getElementById("encerrar").disabled = true;
    document.getElementById("iniciar").disabled = true;
    document.getElementById("pausar").disabled = true;
    document.getElementById("parar").disabled = true;
    document.getElementById("iniciar1").disabled = true;
    document.getElementById("pausar1").disabled = true;
    document.getElementById("parar1").disabled = true;
    window.alert("Você terminou a contagem. A sua quantidade de pomodoros foi: " + contador);
}