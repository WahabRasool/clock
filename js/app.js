let deg = 6;
let hr = document.getElementById("hr");
let mn = document.getElementById("mn");
let sc = document.getElementById("sc");


function displayTime() {
    let date = new Date();

    let hh = date.getHours();
    let mm = date.getMinutes();
    let ss = date.getUTCSeconds();

    let hRotate = 30*hh + mm/2;
    let mRotate = 6*mm;
    let sRotate = 6*ss;

    hr.style.transform = `rotate(${hRotate}deg)`;
    mn.style.transform = `rotate(${mRotate}deg)`;
    sc.style.transform = `rotate(${sRotate}deg)`;
}

setInterval(displayTime, 1000);