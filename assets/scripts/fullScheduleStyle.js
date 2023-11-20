document.getElementById('pn_start').value = "00:00";
document.getElementById('pn_finish').value = "00:00";
document.getElementById('vt_start').value = "00:00";
document.getElementById('vt_finish').value = "00:00";
document.getElementById('sr_start').value = "00:00";
document.getElementById('sr_finish').value = "00:00";
document.getElementById('cht_start').value = "00:00";
document.getElementById('cht_finish').value = "00:00";
document.getElementById('pt_start').value = "00:00";
document.getElementById('pt_finish').value = "00:00";
document.getElementById('sb_start').value = "00:00";
document.getElementById('sb_finish').value = "00:00";
document.getElementById('vs_start').value = "00:00";
document.getElementById('vs_finish').value = "00:00";

document.getElementById('pn_start').onchange = countAndShowTime;
document.getElementById('pn_finish').onchange = countAndShowTime;

document.getElementById('vt_start').onchange = countAndShowTime;
document.getElementById('vt_finish').onchange = countAndShowTime;

document.getElementById('sr_start').onchange = countAndShowTime;
document.getElementById('sr_finish').onchange = countAndShowTime;

document.getElementById('cht_start').onchange = countAndShowTime;
document.getElementById('cht_finish').onchange = countAndShowTime;

document.getElementById('pt_start').onchange = countAndShowTime;
document.getElementById('pt_finish').onchange = countAndShowTime;

document.getElementById('sb_start').onchange = countAndShowTime;
document.getElementById('sb_finish').onchange = countAndShowTime;

document.getElementById('vs_start').onchange = countAndShowTime;
document.getElementById('vs_finish').onchange = countAndShowTime;

document.getElementById('date_start').onchange = countAndShowTime;

document.getElementById('button').onclick = countAndShowTime;



function countAndShowTime() {
    ////////////////////////////// Понедельник
    let start = document.getElementById('pn_start').value;
    let finish = document.getElementById('pn_finish').value;

    let start_hours = start[0] + start[1];
    let start_minutes = start[3] + start[4];
    let finish_hours = finish[0] + finish[1];
    let finish_minutes = finish[3] + finish[4];

    let textToShow = "";
    //Обработка минут
    let minutes_result = finish_minutes - start_minutes;
    minutes_result -= 30;
    while (minutes_result < 0) {
        minutes_result += 60;
        finish_hours--;
    }
    if (minutes_result < 10) {
        minutes_result = "0" + minutes_result;
    }
    //Обработка часов
    let hours_result = finish_hours - start_hours;
    if (hours_result < 10) {
        hours_result = "0" + hours_result;
    }


    textToShow = hours_result + ":" + minutes_result;
    if (textToShow.includes("-")) {
        textToShow = "00:00";
    }
    if (textToShow.includes("N")) {
        textToShow = "00:00";
    }
    document.getElementById('pn_result').innerHTML = textToShow;

    if (hours_result < 0) {
        hours_result = 0;
    }

    ////////////////////////////// Вторник

    let vt_start = document.getElementById('vt_start').value;
    let vt_finish = document.getElementById('vt_finish').value;

    let vt_start_hours = vt_start[0] + vt_start[1];
    let vt_start_minutes = vt_start[3] + vt_start[4];
    let vt_finish_hours = vt_finish[0] + vt_finish[1];
    let vt_finish_minutes = vt_finish[3] + vt_finish[4];

    let vt_textToShow = "";
    //Обработка минут
    let vt_minutes_result = vt_finish_minutes - vt_start_minutes;
    vt_minutes_result -= 30;
    while (vt_minutes_result < 0) {
        vt_minutes_result += 60;
        vt_finish_hours--;
    }
    if (vt_minutes_result < 10) {
        vt_minutes_result = "0" + vt_minutes_result;
    }
    //Обработка часов
    let vt_hours_result = vt_finish_hours - vt_start_hours;
    if (vt_hours_result < 10) {
        vt_hours_result = "0" + vt_hours_result;
    }

    vt_textToShow = vt_hours_result + ":" + vt_minutes_result;
    if (vt_textToShow.includes("-")) {
        vt_textToShow = "00:00";
    }
    if (vt_textToShow.includes("N")) {
        vt_textToShow = "00:00";
    }
    document.getElementById('vt_result').innerHTML = vt_textToShow;

    if (vt_hours_result < 0) {
        vt_hours_result = 0;
    }

    ////////////////////////////// Среда

    let sr_start = document.getElementById('sr_start').value;
    let sr_finish = document.getElementById('sr_finish').value;

    let sr_start_hours = sr_start[0] + sr_start[1];
    let sr_start_minutes = sr_start[3] + sr_start[4];
    let sr_finish_hours = sr_finish[0] + sr_finish[1];
    let sr_finish_minutes = sr_finish[3] + sr_finish[4];

    let sr_textToShow = "";
    //Обработка минут
    let sr_minutes_result = sr_finish_minutes - sr_start_minutes;
    sr_minutes_result -= 30;
    while (sr_minutes_result < 0) {
        sr_minutes_result += 60;
        sr_finish_hours--;
    }
    if (sr_minutes_result < 10) {
        sr_minutes_result = "0" + sr_minutes_result;
    }
    //Обработка часов
    let sr_hours_result = sr_finish_hours - sr_start_hours;
    if (sr_hours_result < 10) {
        sr_hours_result = "0" + sr_hours_result;
    }

    sr_textToShow = sr_hours_result + ":" + sr_minutes_result;
    if (sr_textToShow.includes("-")) {
        sr_textToShow = "00:00";
    }
    if (sr_textToShow.includes("N")) {
        sr_textToShow = "00:00";
    }
    document.getElementById('sr_result').innerHTML = sr_textToShow;

    if (sr_hours_result < 0) {
        sr_hours_result = 0;
    }

    ////////////////////////////// Четверг

    let cht_start = document.getElementById('cht_start').value;
    let cht_finish = document.getElementById('cht_finish').value;

    let cht_start_hours = cht_start[0] + cht_start[1];
    let cht_start_minutes = cht_start[3] + cht_start[4];
    let cht_finish_hours = cht_finish[0] + cht_finish[1];
    let cht_finish_minutes = cht_finish[3] + cht_finish[4];

    let cht_textToShow = "";
    //Обработка минут
    let cht_minutes_result = cht_finish_minutes - cht_start_minutes;
    cht_minutes_result -= 30;
    while (cht_minutes_result < 0) {
        cht_minutes_result += 60;
        cht_finish_hours--;
    }
    if (cht_minutes_result < 10) {
        cht_minutes_result = "0" + cht_minutes_result;
    }
    //Обработка часов
    let cht_hours_result = cht_finish_hours - cht_start_hours;
    if (cht_hours_result < 10) {
        cht_hours_result = "0" + cht_hours_result;
    }

    cht_textToShow = cht_hours_result + ":" + cht_minutes_result;
    if (cht_textToShow.includes("-")) {
        cht_textToShow = "00:00";
    }
    if (cht_textToShow.includes("N")) {
        cht_textToShow = "00:00";
    }
    document.getElementById('cht_result').innerHTML = cht_textToShow;

    if (cht_hours_result < 0) {
        cht_hours_result = 0;
    }

    ////////////////////////////// Пятница

    let pt_start = document.getElementById('pt_start').value;
    let pt_finish = document.getElementById('pt_finish').value;

    let pt_start_hours = pt_start[0] + pt_start[1];
    let pt_start_minutes = pt_start[3] + pt_start[4];
    let pt_finish_hours = pt_finish[0] + pt_finish[1];
    let pt_finish_minutes = pt_finish[3] + pt_finish[4];

    let pt_textToShow = "";
    //Обработка минут
    let pt_minutes_result = pt_finish_minutes - pt_start_minutes;
    pt_minutes_result -= 30;
    while (pt_minutes_result < 0) {
        pt_minutes_result += 60;
        pt_finish_hours--;
    }
    if (pt_minutes_result < 10) {
        pt_minutes_result = "0" + pt_minutes_result;
    }
    //Обработка часов
    let pt_hours_result = pt_finish_hours - pt_start_hours;
    if (pt_hours_result < 10) {
        pt_hours_result = "0" + pt_hours_result;
    }


    pt_textToShow = pt_hours_result + ":" + pt_minutes_result;
    if (pt_textToShow.includes("-")) {
        pt_textToShow = "00:00";
    }
    if (pt_textToShow.includes("N")) {
        pt_textToShow = "00:00";
    }
    document.getElementById('pt_result').innerHTML = pt_textToShow;

    if (pt_hours_result < 0) {
        pt_hours_result = 0;
    }

    ////////////////////////////// Понедельник

    let sb_start = document.getElementById('sb_start').value;
    let sb_finish = document.getElementById('sb_finish').value;

    let sb_start_hours = sb_start[0] + sb_start[1];
    let sb_start_minutes = sb_start[3] + sb_start[4];
    let sb_finish_hours = sb_finish[0] + sb_finish[1];
    let sb_finish_minutes = sb_finish[3] + sb_finish[4];

    let sb_textToShow = "";
    //Обработка минут
    let sb_minutes_result = sb_finish_minutes - sb_start_minutes;
    sb_minutes_result -= 30;
    while (sb_minutes_result < 0) {
        sb_minutes_result += 60;
        sb_finish_hours--;
    }
    if (sb_minutes_result < 10) {
        sb_minutes_result = "0" + sb_minutes_result;
    }
    //Обработка часов
    let sb_hours_result = sb_finish_hours - sb_start_hours;
    if (sb_hours_result < 10) {
        sb_hours_result = "0" + sb_hours_result;
    }


    sb_textToShow = sb_hours_result + ":" + sb_minutes_result;
    if (sb_textToShow.includes("-")) {
        sb_textToShow = "00:00";
    }
    if (sb_textToShow.includes("N")) {
        sb_textToShow = "00:00";
    }
    document.getElementById('sb_result').innerHTML = sb_textToShow;

    if (sb_hours_result < 0) {
        sb_hours_result = 0;
    }

    ////////////////////////////// Понедельник

    let vs_start = document.getElementById('vs_start').value;
    let vs_finish = document.getElementById('vs_finish').value;

    let vs_start_hours = vs_start[0] + vs_start[1];
    let vs_start_minutes = vs_start[3] + vs_start[4];
    let vs_finish_hours = vs_finish[0] + vs_finish[1];
    let vs_finish_minutes = vs_finish[3] + vs_finish[4];

    let vs_textToShow = "";
    //Обработка минут
    let vs_minutes_result = vs_finish_minutes - vs_start_minutes;
    vs_minutes_result -= 30;
    while (vs_minutes_result < 0) {
        vs_minutes_result += 60;
        vs_finish_hours--;
    }
    if (vs_minutes_result < 10) {
        vs_minutes_result = "0" + vs_minutes_result;
    }
    //Обработка часов
    let vs_hours_result = vs_finish_hours - vs_start_hours;
    if (vs_hours_result < 10) {
        vs_hours_result = "0" + vs_hours_result;
    }


    vs_textToShow = vs_hours_result + ":" + vs_minutes_result;
    if (vs_textToShow.includes("-")) {
        vs_textToShow = "00:00";
    }
    if (vs_textToShow.includes("N")) {
        vs_textToShow = "00:00";
    }
    document.getElementById('vs_result').innerHTML = vs_textToShow;

    if (vs_hours_result < 0) {
        vs_hours_result = 0;
    }

    ////////////////////////////// ИТОГ

    let all_textToShow = "";

    all_pn_hours = finish_hours - start_hours;
    if (all_pn_hours < 0) {
        all_pn_hours = 0;
    }
    all_vt_hours = vt_finish_hours - vt_start_hours;
    if (all_vt_hours < 0) {
        all_vt_hours = 0;
    }
    all_sr_hours = sr_finish_hours - sr_start_hours;
    if (all_sr_hours < 0) {
        all_sr_hours = 0;
    }
    all_cht_hours = cht_finish_hours - cht_start_hours;
    if (all_cht_hours < 0) {
        all_cht_hours = 0;
    }
    all_pt_hours = pt_finish_hours - pt_start_hours;
    if (all_pt_hours < 0) {
        all_pt_hours = 0;
    }
    all_sb_hours = sb_finish_hours - sb_start_hours;
    if (all_sb_hours < 0) {
        all_sb_hours = 0;
    }
    all_vs_hours = vs_finish_hours - vs_start_hours;
    if (all_vs_hours < 0) {
        all_vs_hours = 0;
    }

    all_hours = all_pn_hours +
        all_vt_hours +
        all_sr_hours +
        all_cht_hours +
        all_pt_hours +
        all_sb_hours +
        all_vs_hours;
    if (all_hours <= 0) {
        all_hours = 0;
    }



    pn_ms = getMs(document.getElementById('pn_start').value, document.getElementById('pn_finish').value);
    vt_ms = getMs(document.getElementById('vt_start').value, document.getElementById('vt_finish').value);
    sr_ms = getMs(document.getElementById('sr_start').value, document.getElementById('sr_finish').value);
    cht_ms = getMs(document.getElementById('cht_start').value, document.getElementById('cht_finish').value);
    pt_ms = getMs(document.getElementById('pt_start').value, document.getElementById('pt_finish').value);
    sb_ms = getMs(document.getElementById('sb_start').value, document.getElementById('sb_finish').value);
    vs_ms = getMs(document.getElementById('vs_start').value, document.getElementById('vs_finish').value);

    all_ms = pn_ms + vt_ms + sr_ms + cht_ms + pt_ms + sb_ms + vs_ms;


    all_textToShow = getNormalTime(all_ms);
    document.getElementById('all_result').innerHTML = all_textToShow;

    document.getElementById('all_salary').innerHTML = getMoneyFromMs(all_ms).toFixed(2);


    let dates = getDates();

    let scheduleText = "////" + dates["res_pn"] + "." + getCurrYear() + " - " + dates["res_vs"] + "." + getCurrYear() + "////" + "\n";
    if (pn_ms > 0) {
        scheduleText += "Пн(" + dates["res_pn"] + ") > " + start + " - " + finish + " (" + textToShow + ")" + "\n";
    }
    if (vt_ms > 0) {
        scheduleText += "Вт(" + dates["res_vt"] + ") > " + vt_start + " - " + vt_finish + " (" + vt_textToShow + ")" + "\n";
    }
    if (sr_ms > 0) {
        scheduleText += "Ср(" + dates["res_sr"] + ") > " + sr_start + " - " + sr_finish + " (" + sr_textToShow + ")" + "\n";
    }
    if (cht_ms > 0) {
        scheduleText += "Чт(" + dates["res_cht"] + ") > " + cht_start + " - " + cht_finish + " (" + cht_textToShow + ")" + "\n";
    }
    if (pt_ms > 0) {
        scheduleText += "Пт(" + dates["res_pt"] + ") > " + pt_start + " - " + pt_finish + " (" + pt_textToShow + ")" + "\n";
    }
    if (sb_ms > 0) {
        scheduleText += "Сб(" + dates["res_sb"] + ") > " + sb_start + " - " + sb_finish + " (" + sb_textToShow + ")" + "\n";
    }
    if (vs_ms > 0) {
        scheduleText += "Вс(" + dates["res_vs"] + ") > " + vs_start + " - " + vs_finish + " (" + vs_textToShow + ")" + "\n";
    }

    if (all_ms > 0) {
        scheduleText += "Итого " + all_textToShow + " (~" + getMoneyFromMs(all_ms).toFixed(0) + "грн)";
    }



    document.getElementById('textToCopy').innerHTML = scheduleText;
}

function getMs(start, finish) {
    var ms;

    var val_start = start.split(":");
    var val_finish = finish.split(":");

    var hrs_start = +val_start[0];
    var min_start = +val_start[1];

    var hrs_finish = +val_finish[0];
    var min_finish = +val_finish[1];

    var ms_start = hrs_start * 3600000 + min_start * 60000;
    var ms_finish = hrs_finish * 3600000 + min_finish * 60000;

    if (ms_finish - ms_start > 1800000) {
        ms = ms_finish - ms_start - 1800000;
    } else {
        ms = ms_finish - ms_start;
    }

    return ms;
}

function getNormalTime(ms) {

    var hours = 0;
    while (ms >= 3600000) {
        hours++;
        ms -= 3600000;
    }
    if (hours < 10) {
        hours = "0" + hours;
    }

    var minutes = 0;
    while (ms >= 60000) {
        minutes++;
        ms -= 60000;
    }
    if (minutes < 10) {
        minutes = "0" + minutes;
    }



    return hours + ":" + minutes;
}

function getMoneyFromMs(ms) {
    var hours = 0;
    while (ms >= 3600000) {
        hours++;
        ms -= 3600000;
    }

    var minutes = 0;
    while (ms >= 60000) {
        minutes++;
        ms -= 60000;
    }

    const workTime = (minutes / 60) + hours / 1;

    return workTime * 83.3175;
}

function getDates() {
    let startDate = document.querySelector("#date_start").value;

    let pn_date = Date.parse(startDate);
    let vt_date = Date.parse(startDate) + 86400000;
    let sr_date = Date.parse(startDate) + 86400000 * 2;
    let cht_date = Date.parse(startDate) + 86400000 * 3;
    let pt_date = Date.parse(startDate) + 86400000 * 4;
    let sb_date = Date.parse(startDate) + 86400000 * 5;
    let vs_date = Date.parse(startDate) + 86400000 * 6;

    let temp = new Date(pn_date).toISOString().substring(0, 10);
    let res_pn = temp[8] + temp[9] + "." + temp[5] + temp[6];

    temp = new Date(vt_date).toISOString().substring(0, 10);
    let res_vt = temp[8] + temp[9] + "." + temp[5] + temp[6];

    temp = new Date(sr_date).toISOString().substring(0, 10);
    let res_sr = temp[8] + temp[9] + "." + temp[5] + temp[6];

    temp = new Date(cht_date).toISOString().substring(0, 10);
    let res_cht = temp[8] + temp[9] + "." + temp[5] + temp[6];

    temp = new Date(pt_date).toISOString().substring(0, 10);
    let res_pt = temp[8] + temp[9] + "." + temp[5] + temp[6];

    temp = new Date(sb_date).toISOString().substring(0, 10);
    let res_sb = temp[8] + temp[9] + "." + temp[5] + temp[6];

    temp = new Date(vs_date).toISOString().substring(0, 10);
    let res_vs = temp[8] + temp[9] + "." + temp[5] + temp[6];

    let result = { res_pn, res_vt, res_sr, res_cht, res_pt, res_sb, res_vs };

    return result;
}

function getCurrYear() {
    var today = new Date();
    return today.toLocaleString().substring(6, 10);
}