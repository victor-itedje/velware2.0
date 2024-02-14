var speed = 100;
var txt4 = "Services";
var i = 0;

function servicesType() {
    if(i < txt4.length) {
         document.getElementById("bigservices").innerHTML += txt4.charAt(i);
    i++;
    setTimeout(servicesType, speed)
    }else {
         document.getElementById("bigservices").innerHTML += txt4.charAt(i);
         i++;
         setTimeout(servicesType, speed);
    }
}

servicesType();


function victor() {
     let x = "goat"
     let i = "man"
}

function bottle() {
     let x = "hat"
     let i = "shoe"
}

function computer(){
     let x = "bag"
}