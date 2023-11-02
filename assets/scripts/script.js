document.getElementById('button').onclick = countAndShowSalary;

document.getElementById('hours').onchange = countAndShowSalary;
document.getElementById('minutes').onchange = countAndShowSalary;

function countAndShowSalary(){
    let hours = document.getElementById('hours').value;
    let minutes = document.getElementById('minutes').value;


    const workTime = (minutes / 60) + hours / 1;

    const salary = workTime * 83.3175;

    let textToShow = "";
    
    if (hours < 10){
        textToShow += "0";
    }
    textToShow += hours;
    textToShow += ":";
    if (minutes < 10){
        textToShow += "0";
    }
    textToShow += minutes;
    textToShow += " = ";
    textToShow += salary.toFixed(2) + "грн";


    document.querySelector('span').innerHTML = textToShow;
}