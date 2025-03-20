/* deze variablen daar kan elke functie bij want ze zijn globaal gedeclareerd*/
const startbutton = document.getElementById('js--start');
const stopbutton = document.getElementById('js--stop');
const resetbutton = document.getElementById('js--reset');
const secondsTimer = document.getElementById('js--secondstimer');
const minuutTimer = document.getElementById('js--minuutTimer');
let seconds = 0;
let minutes = 0;
let running = false; /*standaard is hij false*/



startbutton.onclick = function(){
    if(running === true){  /*als stopwatch loopt mag je niks doen*/
        return
    }
    running = true;

    timer = setInterval(function(){
        seconds = seconds + 1; 
        if(seconds === 60){
            minutes = minutes + 1;
            minuutTimer.innerHTML = minutes;
            seconds = 0;
        }
        secondsTimer.innerHTML = seconds; /* dit zorgt ervoor dat de seconden worden weergegeven*/
    }, 1000   ); /*dit is een miliseconden, 1000ms is 1 seconden*/
}

stopbutton.onclick = function(){
    clearInterval(timer);
    running = false;
}


resetbutton.onclick = function(){
    clearInterval(timer);
    running = false;
    seconds = 0;
    minutes = 0;
    minuutTimer.innerText = '0';
    secondsTimer.innerText = '0';
}

//hier eindigt de stopwatch en begint de slider//
const rangeValue = document.getElementById('js--rangeValue');
const slider = document.getElementById('js--slider');
const body = document.getElementById('js--body');

slider.value = 2;
rangeValue.innerText = slider.value + "x";

slider.oninput = function(){
    rangeValue.innerText = slider.value + "x";
    body.style.fontSize = slider.value + "rem";
};





const paragraph = document.getElementById('js--text');
const img = document.getElementById('js--image');
//data ophalen
let data = fetch("../data.json").then(
    function(BinnenGekomenData){
        return BinnenGekomenData.json();
    }).then(
        function(echtedata){
            paragraph.innerHTML = echtedata.text;
            img.setAttribute('src', echtedata.img);
        }
    );







