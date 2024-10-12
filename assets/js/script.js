var username = prompt("username")
var link = "https://t.me/"+username;

document.querySelector(".social").addEventListener("click", function () {
    window.location.href = link;
})

document.querySelector(".tntCount").addEventListener("click", function () {
    if (document.querySelector(".tntCount img").classList.contains("1")) {
        document.querySelector(".tntCount img").src = src = "assets/img/2-removebg-preview.png"
        document.querySelector(".tntCount img").classList.remove("1")
        document.querySelector(".tntCount img").classList.add("2")
    }
    else if (document.querySelector(".tntCount img").classList.contains("2")) {
        document.querySelector(".tntCount img").src = src = "assets/img/1-removebg-preview.png"
        document.querySelector(".tntCount img").classList.remove("2")
        document.querySelector(".tntCount img").classList.add("1")
    }

})
var rate1 = 10.00
var rate2 = 12.00
var rate3 = 22.00
var rate4 = 32.00
var rate5 = 42.00
var rate6 = 52.00
var rate7 = 62.00
var rate8 = 72.00
var rate9 = 82.00
var rate10 = 92.00
var rate11 = 102.00
var rate12 = 112.00
var rate13 = 122.00
var rate14 = 132.00
var rate15 = 142.00
var rate16 = 152.00
var rate17 = 162.00
var rate18 = 172.00
var rate19 = 182.00
var rate20 = 192.00
var rate21 = 202.00
var rate22 = 212.00
var rate23 = 222.00
var rate24 = 232.00
var rate25 = 242.00
var rate26 = 252.00
var rate27 = 262.00
var rate28 = 272.00
var rate29 = 282.00
var rate30 = 292.00

var clickCounter = 0;

document.querySelector(".buttonWrapper").addEventListener("click", function () {
    if (document.querySelector("p.counter").innerText == "Başlat") {
        clickCounter++
        console.log(clickCounter)
        document.getElementsByClassName("loader")[0].classList.remove("hidden")
        document.getElementsByClassName("rate")[0].classList.add("hidden")

        setTimeout(() => {
            document.getElementsByClassName("loader")[0].classList.add("hidden");
            document.getElementsByClassName("rate")[0].classList.remove("hidden");
            if(clickCounter==1){
                document.getElementsByClassName("rate")[0].innerHTML = rate1 + "x";
            }
            else if(clickCounter==2){
                document.getElementsByClassName("rate")[0].innerHTML = rate2 + "x";
            }
            else if(clickCounter==3){
                document.getElementsByClassName("rate")[0].innerHTML = rate3 + "x";
            }
            else if(clickCounter==4){
                document.getElementsByClassName("rate")[0].innerHTML = rate4 + "x";
            }
            else if(clickCounter==5){
                document.getElementsByClassName("rate")[0].innerHTML = rate5 + "x";
            }
            else if(clickCounter==6){
                document.getElementsByClassName("rate")[0].innerHTML = rate6 + "x";
            }
            else if(clickCounter==7){
                document.getElementsByClassName("rate")[0].innerHTML = rate7 + "x";
            }
            else if(clickCounter==8){
                document.getElementsByClassName("rate")[0].innerHTML = rate8 + "x";
            }
            else if(clickCounter==9){
                document.getElementsByClassName("rate")[0].innerHTML = rate9 + "x";
            }
            else if(clickCounter==10){
                document.getElementsByClassName("rate")[0].innerHTML = rate10 + "x";
            }
            else if(clickCounter==11){
                document.getElementsByClassName("rate")[0].innerHTML = rate11 + "x";
            }
            else if(clickCounter==12){
                document.getElementsByClassName("rate")[0].innerHTML = rate12 + "x";
            }
            else if(clickCounter==13){
                document.getElementsByClassName("rate")[0].innerHTML = rate13 + "x";
            }
            else if(clickCounter==14){
                document.getElementsByClassName("rate")[0].innerHTML = rate14 + "x";
            }
            else if(clickCounter==15){
                document.getElementsByClassName("rate")[0].innerHTML = rate15 + "x";
            }
            else if(clickCounter==16){
                document.getElementsByClassName("rate")[0].innerHTML = rate16 + "x";
            }
            else if(clickCounter==17){
                document.getElementsByClassName("rate")[0].innerHTML = rate17 + "x";
            }
            else if(clickCounter==18){
                document.getElementsByClassName("rate")[0].innerHTML = rate18 + "x";
            }
            else if(clickCounter==19){
                document.getElementsByClassName("rate")[0].innerHTML = rate19 + "x";
            }
            else if(clickCounter==20){
                document.getElementsByClassName("rate")[0].innerHTML = rate20 + "x";
            }
            else if(clickCounter==21){
                document.getElementsByClassName("rate")[0].innerHTML = rate21 + "x";
            }
            else if(clickCounter==22){
                document.getElementsByClassName("rate")[0].innerHTML = rate22 + "x";
            }
            else if(clickCounter==23){
                document.getElementsByClassName("rate")[0].innerHTML = rate23 + "x";
            }
            else if(clickCounter==24){
                document.getElementsByClassName("rate")[0].innerHTML = rate24 + "x";
            }
            else if(clickCounter==25){
                document.getElementsByClassName("rate")[0].innerHTML = rate25 + "x";
            }
            else if(clickCounter==26){
                document.getElementsByClassName("rate")[0].innerHTML = rate26 + "x";
            }
            else if(clickCounter==27){
                document.getElementsByClassName("rate")[0].innerHTML = rate27 + "x";
            }
            else if(clickCounter==28){
                document.getElementsByClassName("rate")[0].innerHTML = rate28 + "x";
            }
            else if(clickCounter==29){
                document.getElementsByClassName("rate")[0].innerHTML = rate29 + "x";
            }
            else if(clickCounter==30){
                document.getElementsByClassName("rate")[0].innerHTML = rate30 + "x";
            }
        }, 500);
        document.querySelector("p.counter").innerText = "Sıfırla"
        var timer = 15
        var myTimer = setInterval(() => {
            timer--
            if (timer >= 10) {
                document.querySelector("p.counter").innerText = "00:" + timer + ""
            }
            else {
                document.querySelector("p.counter").innerText = "00:0" + timer + ""

            }
            if (timer == 0) {
                document.querySelector("p.counter").innerText = "Başlat"
                clearInterval(myTimer)
            }
        }, 1000);
    }

})

document.querySelector(".rate").addEventListener("click", function () {
    clickCounter=0;
    rate1 = prompt("Sinyal1")
    rate2 = prompt("Sinyal2")
    rate3 = prompt("Sinyal3")
    rate4 = prompt("Sinyal4")
    rate5 = prompt("Sinyal5")
    rate6 = prompt("Sinyal6")
    rate7 = prompt("Sinyal7")
    rate8 = prompt("Sinyal8")
    rate9 = prompt("Sinyal9")
    rate10 = prompt("Sinyal10")
    rate11 = prompt("Sinyal11")
    rate12 = prompt("Sinyal12")
    rate13 = prompt("Sinyal13")
    rate14 = prompt("Sinyal14")
    rate15 = prompt("Sinyal15")
    rate16 = prompt("Sinyal16")
    rate17 = prompt("Sinyal17")
    rate18 = prompt("Sinyal18")
    rate19 = prompt("Sinyal19")
    rate20 = prompt("Sinyal20")
    rate21 = prompt("Sinyal21")
    rate22 = prompt("Sinyal22")
    rate23 = prompt("Sinyal23")
    rate24 = prompt("Sinyal24")
    rate25 = prompt("Sinyal25")
    rate26 = prompt("Sinyal26")
    rate27 = prompt("Sinyal27")
    rate28 = prompt("Sinyal28")
    rate29 = prompt("Sinyal29")
    rate30 = prompt("Sinyal30")
})










