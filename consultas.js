"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
let reportAcudits = [];
function getAPITemperature() {
    return __awaiter(this, void 0, void 0, function* () {
        const uri = "https://api.openweathermap.org/data/2.5/weather?q=Barcelona&APPID=36186b9d10d0073dd0551fb3d0367789";
        fetch(uri)
            .then((response) => response.json())
            .then((temperatura) => {
            console.log("data recieved > ", temperatura);
            console.log(temperatura.weather[0].description);
            //ESTO ERA PARA QUE ME APAREZCA LA IMAGEN, TENIA UNA API QUE ME DABA LA IMAGEN PERO ME DEJO DE FUNCIONAR PORQUE ERA POR UNAS POCAS ENTRADAS Y A LA PAGINA Y NO ME DI CUENTA Y EN ESTA API NO FUNCIONA, HE TENIDO BASTANTES PROBLEMAS CON LAS APIS DEL CLIMA PORQUE SON GRATIS POR UN DETERMINADO LIMITE DE TIEMPO O TIENEN SUS LIMITACIONES, LO DEJO PARA MOSTRAR COMO LO HARÍA.
            let temp = document.getElementById("temperatura");
            temp.innerHTML = /*`<img class="img-fluid" style="width:30px;border-right:2px solid black" src="" alt="">` +*/ " " + temperatura.weather[0].description;
        });
    });
}
getAPITemperature();
function getAPIJokes() {
    return __awaiter(this, void 0, void 0, function* () {
        const uri = "https://icanhazdadjoke.com/slack";
        fetch(uri)
            .then((response) => response.json())
            .then((chiste) => {
            console.log("data recieved > ", chiste);
            console.log(chiste.attachments[0].text);
            let div = document.getElementById("chiste");
            div.innerHTML = '"' + chiste.attachments[0].text + '"';
            reportAcudits[reportAcudits.length] = { joke: chiste.attachments[0].text, result: "", date: "" };
            const d = new Date();
            let text = d.toISOString();
            reportAcudits[reportAcudits.length - 1].date = text;
            let buttons = document.getElementById("botones");
            buttons.innerHTML = `<div class="btn me-3" onclick="puntuacion(1)"><img src="./images/triste.png" style=" width: 60px; height: 60px;" alt=""></div><div class="btn me-3" onclick="puntuacion(2)"><img src="./images/pensando.png" style=" width: 60px; height: 60px;" alt=""></div><div class="btn me-3" onclick="puntuacion(3)"><img src="./images/sonriente.png" style=" width: 60px; height: 60px;" alt=""></div>`;
        });
    });
}
function getAPIJokesChuck() {
    return __awaiter(this, void 0, void 0, function* () {
        const uri = "https://api.chucknorris.io/jokes/random";
        fetch(uri)
            .then((response) => response.json())
            .then((chiste) => {
            console.log("data recieved > ", chiste);
            console.log(chiste.value);
            let div = document.getElementById("chiste");
            div.innerHTML = '"' + chiste.value + '"';
            reportAcudits[reportAcudits.length] = { joke: chiste.value, result: "", date: "" };
            const d = new Date();
            let text = d.toISOString();
            reportAcudits[reportAcudits.length - 1].date = text;
            let buttons = document.getElementById("botones");
            buttons.innerHTML = `<div class="btn me-3" onclick="puntuacion(1)"><img src="./images/triste.png" style=" width: 60px; height: 60px;" alt=""></div><div class="btn me-3" onclick="puntuacion(2)"><img src="./images/pensando.png" style=" width: 60px; height: 60px;" alt=""></div><div class="btn me-3" onclick="puntuacion(3)"><img src="./images/sonriente.png" style=" width: 60px; height: 60px;" alt=""></div>`;
        });
    });
}
function puntuacion(n) {
    reportAcudits[reportAcudits.length - 1].result = n;
    console.log(reportAcudits);
}
function chistes() {
    changeBack();
    var num = Math.random() * 10;
    if (num > 5) {
        getAPIJokes();
    }
    else {
        getAPIJokesChuck();
    }
}
function changeBack() {
    let imagenes = ['url("./images/blob (2).svg")', 'url("./images/blob.svg")', 'url("./images/blob ().svg")'];
    let numero = Math.floor(Math.random() * 3);
    let chan = document.getElementById("change");
    chan.style.backgroundImage = imagenes[numero];
}
