
const dayEl = document.getElementById("day");
const hourEl = document.getElementById("hour");
const minuteEl = document.getElementById("minute");
const secondEl = document.getElementById("second");

const newYearTime = new Date("Jan 1, 2024 00:00:00").getTime();
// console.log( newYearTime);


updateCoundown();
function updateCoundown(){

    const currentTime = new Date().getTime();
    // console.log( currentTime);
    const gap = newYearTime - currentTime;
    // console.log( gap);
    const second = 1000;
    const minutes =  second * 60;
    const hours   = minutes * 60;
    const days    =  hours * 24;

    let d = Math.floor( gap / days);
    let h = Math.floor((gap % days) / hours );
    let m = Math.floor( (gap % hours) / minutes);
    let s = Math.floor((gap % minutes) / second);
    // for double digits
     d= d<10 ? "0"+ d : d;
     h = h<10 ? "0"+h : h;
     m = m< 10 ? "0"+ m : m;
     s = s <10 ? "0"+s : s;

    dayEl.innerText = d;
    hourEl.innerText = h;
    minuteEl.innerText = m;
    secondEl.innerText = s;

    setTimeout( updateCoundown, 1000);
}