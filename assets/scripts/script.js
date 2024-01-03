document.getElementById('button').onclick = countAndShowSalary;

document.getElementById('hours').onchange = countAndShowSalary;
document.getElementById('minutes').onchange = countAndShowSalary;

function countAndShowSalary() {
    let hours = document.getElementById('hours').value;
    let minutes = document.getElementById('minutes').value;
    while (minutes >= 60) {
        minutes -= 60;
        hours++;
    }
    hours++;
    hours--;
    minutes++;
    minutes--;
    if (hours == 0) {
        hours = 0;
    }
    if (minutes == 0) {
        minutes = 0;
    }

    let time = hours + ":" + minutes;
    const salary = countSalary(getMs(time), 103.5);

    let textToShow = "";

    if (hours < 10) {
        textToShow += "0";
    }
    textToShow += hours;
    textToShow += ":";
    if (minutes < 10) {
        textToShow += "0";
    }
    textToShow += minutes;
    textToShow += " = ";
    textToShow += salary.toFixed(2) + "грн";


    document.querySelector('span').innerHTML = textToShow;
}

function countSalary(ms, moneyPerHour) {
    console.log(ms);
    let hours = ms / 3600000;

    let salary = moneyPerHour - (moneyPerHour * 0.195);

    return salary * hours;
}

function getMs(start) {
    var ms;

    var val_start = start.split(":");

    var hrs_start = +val_start[0];
    var min_start = +val_start[1];


    ms = hrs_start * 3600000 + min_start * 60000;



    return ms;
}