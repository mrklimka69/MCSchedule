let salary = 0;

document.getElementById('button_116.03').onclick = () => {salary = 116.03; setSalaryPerHour();};
document.getElementById('button_119.03').onclick = () => {salary = 119.03; setSalaryPerHour();};


function setSalaryPerHour(){
    document.getElementById('salaryPerHourInput').value = salary;

    // console.log(salary);
}