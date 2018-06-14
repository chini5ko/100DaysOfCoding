const HOURHAND = document.querySelector("#hour");
const MINUTEHAND = document.querySelector("#minute");
const SECONDHAND = document.querySelector("#second");

var date = new Date();
console.log(date);
let hr = date.getHours();
let min = date.getMinutes();
let sec = date.getSeconds();

if (hr>12){
  hr = hr-12;
};


console.log("Hour: " + hr + " Minute: " + min + " Second: " + sec);
hr= hr+3;
min = min+15;
sec = sec +15;

let hrPosition = ((hr*360)/12) + (min*(360/60)/12) ; //(hr*360/12)+(min*(360/60)/12);
let minPosition = min*(360/60) + (sec*(360/60)/60);//*360/60) ;//(min*360/60) +(sec*(360/60)/60);
let secPosition = sec*(360/60);//sec*360/60;

console.log("Postition \n Hour: " + hrPosition + " minPosition: " + min + " secPosition: " + sec);


function runTheClock() {

   hrPosition = hrPosition+ (3/360);
   minPosition = minPosition + (6/60);
    secPosition = secPosition + 6;

// why this guy is using a contantc

    HOURHAND.style.transform = "rotate(" + hrPosition + "deg) translate(-275px)";
    MINUTEHAND.style.transform = "rotate(" + minPosition + "deg) \n translate(-173px)";
    SECONDHAND.style.transform = "rotate(" + secPosition + "deg) \n translate(-50px)";
}

var interval = setInterval(runTheClock, 1000);
