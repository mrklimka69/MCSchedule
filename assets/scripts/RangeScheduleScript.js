document.getElementById('textToInput').onchange = getResult;

const textToChangeReadyRow = ' ';
const salary = 95.82;


function getResult() {
    let rowsAmount = getRowsAmount(document.getElementById('textToInput').value);
    let sum = 0;

    for (let i = 1; i <= rowsAmount; i++) {
        let row = getRow(document.getElementById('textToInput').value, i);


        sum += countMoneyFromTime(getTotalTime(row));
    }

    console.log(sum);
}

function getRow(text, rowNumber) {
    text = text.trim();
    let result = "";

    let index = 0;
    let row = "";
    for (let i = 0; i < rowNumber; i++) {
        row = "";
        index = 0;

        while (text[index] != "\n") {
            row += text[index];
            index++;

            if (index > text.length - 1) break;
        }
        text = text.replace(row, textToChangeReadyRow);
        text = text.trim();
    }

    return row;
}

function getRowsAmount(text) {
    text = text.trim();
    let sum = 0;

    for (let i = 0; i < text.length - 1; i++) {
        if (text[i] == "\n") {
            sum++;
        }
    }

    return sum + 1;
}

function getTotalTime(text) {
    return text.substring(27, 32);
}

function countMoneyFromTime(text) {
    let hours = parseInt(text.substring(0, 2));
    let minutes = parseInt(text.substring(3, 5));

    let money = salary * hours + salary * (minutes / 60);

    return money;
}