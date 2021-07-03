"use strict"

var hh = 0;
var mm = window.prompt("Quantos minutos o timer terá?");
var ss = 0;
var tempo = 1000;
var temp;
var contador = 0;
var controle = mm;
var notification = new Audio('https://d9olupt5igjta.cloudfront.net/samples/sample_files/9040/e2b7b882993ddcd25771fc9cedac07ca8635f603/mp3/72127-sweetalertsound3-wav.mp3?1512767707');
var notification2 = new Audio('https://d9olupt5igjta.cloudfront.net/samples/sample_files/71017/6002484fa6ed0e3f78e984542caecdd0a4b3c6b6/mp3/_Discord_Message.mp3?1619010662');
//0 --> Tarefa
//1 --> Pausa
var tarefa = 0;

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


function pause() {
    clearInterval(temp);
    if (document.getElementById("iniciar").disabled = true) {
        document.getElementById("iniciar").disabled = false;
    }
    if (document.getElementById("iniciar1").disabled = true) {
        document.getElementById("iniciar1").disabled = false;
    }
}

function stop() {
    clearInterval(temp);
    hh = 0;
    mm = 25;
    ss = 0;

    document.getElementById('counter').innerText = '00:25:00';
    if (document.getElementById("iniciar").disabled = true) {
        document.getElementById("iniciar").disabled = false;
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
        if (mm == 0 && ss == 0) {
            alt = 0;
        }
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

function carrega() {

    var format = (hh < 10 ? '0' + hh : hh) + ':' + (mm < 10 ? '0' + mm : mm) + ':' + (ss < 10 ? '0' + ss : ss);

    //Insere o valor tratado no elemento counter
    document.getElementById('counter').innerText = format;

    //Insere o valor do contador no elemento tasks
    document.getElementById('tasks').innerText = contador;

    return format;
}

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
