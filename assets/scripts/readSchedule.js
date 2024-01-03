
document.getElementById('textToInput').onchange = uploadSchedule;

function uploadSchedule() {
    let text = document.getElementById('textToInput').value.trim();

    let row = '';

    const textToChangeReadyRow = ' ';

    while (text.length > 1) {
        row = getRow(text);
        text = text.replace(`${row}`, textToChangeReadyRow);
        text = text.trim();

        inputRowInSchedule(row);

        console.log(row);
    }
}

function inputRowInSchedule(row) {
    const day = getDay(row);
    const startTime = getStartTime(row);
    const finishTime = getFinishTime(row);
    const title = getTitle(row);

    if (day === "Пн") {
        document.getElementById('pn_start').value = startTime;
        document.getElementById('pn_finish').value = finishTime;
        document.getElementById('pn_job_title').value = title;
    }
    if (day === "Вт") {
        document.getElementById('vt_start').value = startTime;
        document.getElementById('vt_finish').value = finishTime;
        document.getElementById('vt_job_title').value = title;
    }
    if (day === "Ср") {
        document.getElementById('sr_start').value = startTime;
        document.getElementById('sr_finish').value = finishTime;
        document.getElementById('sr_job_title').value = title;
    }
    if (day === "Чт") {
        document.getElementById('cht_start').value = startTime;
        document.getElementById('cht_finish').value = finishTime;
        document.getElementById('cht_job_title').value = title;
    }
    if (day === "Пт") {
        document.getElementById('pt_start').value = startTime;
        document.getElementById('pt_finish').value = finishTime;
        document.getElementById('pt_job_title').value = title;
    }
    if (day === "Сб") {
        document.getElementById('sb_start').value = startTime;
        document.getElementById('sb_finish').value = finishTime;
        document.getElementById('sb_job_title').value = title;
    }
    if (day === "Вс") {
        document.getElementById('vs_start').value = startTime;
        document.getElementById('vs_finish').value = finishTime;
        document.getElementById('vs_job_title').value = title;
    }
}

function getRow(text) {
    text = text.trim();

    let result = "";

    let index = 0;
    while (text[index] != "\n") {
        result += text[index];
        index++;

        if (index > text.length - 1) break;
    }

    return result;
}

function getDay(text) {
    return text.substring(0, 2);
}

function getDate(text) {
    return text.substring(3, 8);
}

function getStartTime(text) {
    return text.substring(12, 17);
}

function getFinishTime(text) {
    return text.substring(20, 25);
}

function getTotalTime(text) {
    return text.substring(27, 32);
}

function getTitle(text) {
    let indexOfLastChar = text.length - 1;
    let result = "";

    let index = indexOfLastChar;
    while (text[index] != ")") {
        index--;
    }
    index += 2;

    while (index <= indexOfLastChar) {
        result += text[index];
        index++;
    }

    return result;
}