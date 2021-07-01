"use strict"

var hh = 0;
var mm = 25;
var ss = 0;
var alt = 1;
var tempo = 1000;
var temp;

//Inicia o temporizador
function start() {
    temp = setInterval(() => { timer(); }, tempo);
    document.getElementById("iniciar").disabled = true;

}


function pause() {
    clearInterval(temp);
    if (document.getElementById("iniciar").disabled = true) {
        document.getElementById("iniciar").disabled = false;
    }
}

function stop() {
    clearInterval(temp);
    hh = 0;
    mm = 25;
    ss = 1;

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
    if (alt == 0) {
        mm == 25;
        if (ss == 0) {
            ss = 59; bn
            mm--;
        }
        else {
            ss--;
        }
    }
}
