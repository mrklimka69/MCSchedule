let salary = 136.88;
setSalaryPerHour();

document.getElementById('button_116.03').onclick = () => {salary = 136.88; setSalaryPerHour();};
document.getElementById('button_119.03').onclick = () => {salary = 164.66; setSalaryPerHour();};


function setSalaryPerHour(){
    document.getElementById('salaryPerHourInput').value = salary;
}