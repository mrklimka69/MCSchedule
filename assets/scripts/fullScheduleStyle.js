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

document.getElementById('salaryPerHourInput').value = 0;

// document.getElementById('textToInput').onchange = countAndShowTime;

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
document.getElementById('button_116.03').onclick = countAndShowTime;
document.getElementById('button_119.03').onclick = countAndShowTime;

document.getElementById('pn_break').onchange = countAndShowTime;
document.getElementById('vt_break').onchange = countAndShowTime;
document.getElementById('sr_break').onchange = countAndShowTime;
document.getElementById('cht_break').onchange = countAndShowTime;
document.getElementById('pt_break').onchange = countAndShowTime;
document.getElementById('sb_break').onchange = countAndShowTime;
document.getElementById('vs_break').onchange = countAndShowTime;

document.getElementById('pn_job_title').onchange = countAndShowTime;
document.getElementById('vt_job_title').onchange = countAndShowTime;
document.getElementById('sr_job_title').onchange = countAndShowTime;
document.getElementById('cht_job_title').onchange = countAndShowTime;
document.getElementById('pt_job_title').onchange = countAndShowTime;
document.getElementById('sb_job_title').onchange = countAndShowTime;
document.getElementById('vs_job_title').onchange = countAndShowTime;

document.getElementById('pn_double_panch').onchange = countAndShowTime;
document.getElementById('vt_double_panch').onchange = countAndShowTime;
document.getElementById('sr_double_panch').onchange = countAndShowTime;
document.getElementById('cht_double_panch').onchange = countAndShowTime;
document.getElementById('pt_double_panch').onchange = countAndShowTime;
document.getElementById('sb_double_panch').onchange = countAndShowTime;
document.getElementById('vs_double_panch').onchange = countAndShowTime;

document.getElementById('salaryPerHourInput').onchange = countAndShowTime;


let moneyPerHour = 0;
function countAndShowTime() {
    moneyPerHour = document.getElementById('salaryPerHourInput').value;
    countAndShowClearSalary();
    ////////////////////////////// Понедельник
    let start = document.getElementById('pn_start').value;
    let finish = document.getElementById('pn_finish').value;
    let pn_break = document.getElementById('pn_break');

    let start_hours = start[0] + start[1];
    let start_minutes = start[3] + start[4];
    let finish_hours = finish[0] + finish[1];
    let finish_minutes = finish[3] + finish[4];

    let pn_total_ms = getMs((start_hours + ":" + start_minutes), (finish_hours + ":" + finish_minutes));
    if (pn_total_ms > 0) {
        if (pn_break.checked) {
            pn_total_ms += 1800000;
        }
    }


    document.getElementById('pn_result').innerHTML = getNormalTime(pn_total_ms);

    ////////////////////////////// Вторник

    let vt_start = document.getElementById('vt_start').value;
    let vt_finish = document.getElementById('vt_finish').value;
    let vt_break = document.getElementById('vt_break');

    let vt_start_hours = vt_start[0] + vt_start[1];
    let vt_start_minutes = vt_start[3] + vt_start[4];
    let vt_finish_hours = vt_finish[0] + vt_finish[1];
    let vt_finish_minutes = vt_finish[3] + vt_finish[4];

    let vt_total_ms = getMs((vt_start_hours + ":" + vt_start_minutes), (vt_finish_hours + ":" + vt_finish_minutes));
    if (vt_total_ms > 0) {
        if (vt_break.checked) {
            vt_total_ms += 1800000;
        }
    }


    document.getElementById('vt_result').innerHTML = getNormalTime(vt_total_ms);

    ////////////////////////////// Среда

    let sr_start = document.getElementById('sr_start').value;
    let sr_finish = document.getElementById('sr_finish').value;
    let sr_break = document.getElementById('sr_break');

    let sr_start_hours = sr_start[0] + sr_start[1];
    let sr_start_minutes = sr_start[3] + sr_start[4];
    let sr_finish_hours = sr_finish[0] + sr_finish[1];
    let sr_finish_minutes = sr_finish[3] + sr_finish[4];

    let sr_total_ms = getMs((sr_start_hours + ":" + sr_start_minutes), (sr_finish_hours + ":" + sr_finish_minutes));
    if (sr_total_ms > 0) {
        if (sr_break.checked) {
            sr_total_ms += 1800000;
        }
    }

    document.getElementById('sr_result').innerHTML = getNormalTime(sr_total_ms);

    ////////////////////////////// Четверг

    let cht_start = document.getElementById('cht_start').value;
    let cht_finish = document.getElementById('cht_finish').value;
    let cht_break = document.getElementById('cht_break');

    let cht_start_hours = cht_start[0] + cht_start[1];
    let cht_start_minutes = cht_start[3] + cht_start[4];
    let cht_finish_hours = cht_finish[0] + cht_finish[1];
    let cht_finish_minutes = cht_finish[3] + cht_finish[4];

    let cht_total_ms = getMs((cht_start_hours + ":" + cht_start_minutes), (cht_finish_hours + ":" + cht_finish_minutes));
    if (cht_total_ms > 0) {
        if (cht_break.checked) {
            cht_total_ms += 1800000;
        }
    }

    document.getElementById('cht_result').innerHTML = getNormalTime(cht_total_ms);

    ////////////////////////////// Пятница

    let pt_start = document.getElementById('pt_start').value;
    let pt_finish = document.getElementById('pt_finish').value;
    let pt_break = document.getElementById('pt_break');

    let pt_start_hours = pt_start[0] + pt_start[1];
    let pt_start_minutes = pt_start[3] + pt_start[4];
    let pt_finish_hours = pt_finish[0] + pt_finish[1];
    let pt_finish_minutes = pt_finish[3] + pt_finish[4];

    let pt_total_ms = getMs((pt_start_hours + ":" + pt_start_minutes), (pt_finish_hours + ":" + pt_finish_minutes));
    if (pt_total_ms > 0) {
        if (pt_break.checked) {
            pt_total_ms += 1800000;
        }
    }

    document.getElementById('pt_result').innerHTML = getNormalTime(pt_total_ms);

    ////////////////////////////// Суббота

    let sb_start = document.getElementById('sb_start').value;
    let sb_finish = document.getElementById('sb_finish').value;
    let sb_break = document.getElementById('sb_break');

    let sb_start_hours = sb_start[0] + sb_start[1];
    let sb_start_minutes = sb_start[3] + sb_start[4];
    let sb_finish_hours = sb_finish[0] + sb_finish[1];
    let sb_finish_minutes = sb_finish[3] + sb_finish[4];

    let sb_total_ms = getMs((sb_start_hours + ":" + sb_start_minutes), (sb_finish_hours + ":" + sb_finish_minutes));
    if (sb_total_ms > 0) {
        if (sb_break.checked) {
            sb_total_ms += 1800000;
        }
    }

    document.getElementById('sb_result').innerHTML = getNormalTime(sb_total_ms);

    ////////////////////////////// Воскресенье

    let vs_start = document.getElementById('vs_start').value;
    let vs_finish = document.getElementById('vs_finish').value;
    let vs_break = document.getElementById('vs_break');

    let vs_start_hours = vs_start[0] + vs_start[1];
    let vs_start_minutes = vs_start[3] + vs_start[4];
    let vs_finish_hours = vs_finish[0] + vs_finish[1];
    let vs_finish_minutes = vs_finish[3] + vs_finish[4];

    let vs_total_ms = getMs((vs_start_hours + ":" + vs_start_minutes), (vs_finish_hours + ":" + vs_finish_minutes));
    if (vs_total_ms > 0) {
        if (vs_break.checked) {
            vs_total_ms += 1800000;
        }
    }

    document.getElementById('vs_result').innerHTML = getNormalTime(vs_total_ms);

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


    all_ms = pn_total_ms + vt_total_ms + sr_total_ms + cht_total_ms + pt_total_ms + sb_total_ms + vs_total_ms;




    all_textToShow = getNormalTime(all_ms);
    document.getElementById('all_result').innerHTML = all_textToShow;

    // document.getElementById('all_salary').innerHTML = getMoneyFromMs(all_ms).toFixed(2);


    let dates = getDates();
    let years = getYearFromDate(document.querySelector("#date_start").value);

    let scheduleText = "////" + dates["res_pn"] + "." + years["pn"] + " - " + dates["res_vs"] + "." + years["vs"] + "////" + "\n";
    if (pn_total_ms > 0) {
        scheduleText += "Пн(" + dates["res_pn"] + ") > " + start + " - " + finish + " (" + getNormalTime(pn_total_ms);

        if (pn_break.checked) {
            scheduleText += " б"
        }
        if (document.getElementById('pn_double_panch').checked) {
            scheduleText += " дп"
        }

        scheduleText += ")";

        scheduleText += " " + getJobTitle(document.getElementById('pn_job_title').value);

        scheduleText += "\n";
    }
    if (vt_total_ms > 0) {
        scheduleText += "Вт(" + dates["res_vt"] + ") > " + vt_start + " - " + vt_finish + " (" + getNormalTime(vt_total_ms);

        if (vt_break.checked) {
            scheduleText += " б"
        }
        if (document.getElementById('vt_double_panch').checked) {
            scheduleText += " дп"
        }

        scheduleText += ")";

        scheduleText += " " + getJobTitle(document.getElementById('vt_job_title').value);

        scheduleText += "\n";
    }
    if (sr_total_ms > 0) {
        scheduleText += "Ср(" + dates["res_sr"] + ") > " + sr_start + " - " + sr_finish + " (" + getNormalTime(sr_total_ms);

        if (sr_break.checked) {
            scheduleText += " б"
        }
        if (document.getElementById('sr_double_panch').checked) {
            scheduleText += " дп"
        }

        scheduleText += ")";

        scheduleText += " " + getJobTitle(document.getElementById('sr_job_title').value);

        scheduleText += "\n";
    }
    if (cht_total_ms > 0) {
        scheduleText += "Чт(" + dates["res_cht"] + ") > " + cht_start + " - " + cht_finish + " (" + getNormalTime(cht_total_ms);

        if (cht_break.checked) {
            scheduleText += " б"
        }
        if (document.getElementById('cht_double_panch').checked) {
            scheduleText += " дп"
        }

        scheduleText += ")";

        scheduleText += " " + getJobTitle(document.getElementById('cht_job_title').value);

        scheduleText += "\n";
    }
    if (pt_total_ms > 0) {
        scheduleText += "Пт(" + dates["res_pt"] + ") > " + pt_start + " - " + pt_finish + " (" + getNormalTime(pt_total_ms);

        if (pt_break.checked) {
            scheduleText += " б"
        }
        if (document.getElementById('pt_double_panch').checked) {
            scheduleText += " дп"
        }

        scheduleText += ")";

        scheduleText += " " + getJobTitle(document.getElementById('pt_job_title').value);

        scheduleText += "\n";
    }
    if (sb_total_ms > 0) {
        scheduleText += "Сб(" + dates["res_sb"] + ") > " + sb_start + " - " + sb_finish + " (" + getNormalTime(sb_total_ms);

        if (sb_break.checked) {
            scheduleText += " б"
        }
        if (document.getElementById('sb_double_panch').checked) {
            scheduleText += " дп"
        }

        scheduleText += ")";

        scheduleText += " " + getJobTitle(document.getElementById('sb_job_title').value);

        scheduleText += "\n";
    }
    if (vs_total_ms > 0) {
        scheduleText += "Вс(" + dates["res_vs"] + ") > " + vs_start + " - " + vs_finish + " (" + getNormalTime(vs_total_ms);

        if (vs_break.checked) {
            scheduleText += " б"
        }
        if (document.getElementById('vs_double_panch').checked) {
            scheduleText += " дп"
        }

        scheduleText += ")";

        scheduleText += " " + getJobTitle(document.getElementById('vs_job_title').value);

        scheduleText += "\n";
    }


    /////////////////////// Проверка на двойные панчи
    if (document.getElementById('pn_double_panch').checked) {
        all_ms += pn_total_ms;
    }
    if (document.getElementById('vt_double_panch').checked) {
        all_ms += vt_total_ms;
    }
    if (document.getElementById('sr_double_panch').checked) {
        all_ms += sr_total_ms;
    }
    if (document.getElementById('cht_double_panch').checked) {
        all_ms += cht_total_ms;
    }
    if (document.getElementById('pt_double_panch').checked) {
        all_ms += pt_total_ms;
    }
    if (document.getElementById('sb_double_panch').checked) {
        all_ms += sb_total_ms;
    }
    if (document.getElementById('vs_double_panch').checked) {
        all_ms += vs_total_ms;
    }
    ///////////////////////

    if (all_ms > 0) {
        scheduleText += "Итого " + all_textToShow + " (~" + getMoneyFromMs(all_ms).toFixed(0) + "грн)";
    }


    document.getElementById('all_salary').innerHTML = getMoneyFromMs(all_ms).toFixed(2);
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

    let hours = ms / 3600000;

    let salary = moneyPerHour - (moneyPerHour * 0.195);

    return salary * hours;
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

function getYearFromDate(date) {
    let pn = date.toLocaleString().substring(0, 4);

    let vs = new Date(Date.parse(date) + 86400000 * 6).toISOString().substring(0, 4);

    return { pn, vs };
}

function getJobTitle(userTitle) {
    userTitle = userTitle.trim();

    const FRY = ["fry", "фри", "картошка"];
    const FRITYUR = ["kfr", "фритюр", "фритюрщик"];
    const GRILL = ["kgr", "гриль", "гриля", "грильщик"];
    const ZAPRAVSHIK = ["kas", "заправка", "заправщик", "грильщик"];
    const INITSIATOR = ["kip", "инициатор", "булки"];
    const FINISHER = ["kfi", "финиш", "финишер"];
    const ZAL = ["ll", "зал", "лл"];
    const OUT = ["out", "улица", "аут"];
    const BD = ["bd", "bdap", "бд", "бдап"];
    const KASSA = ["sot", "сот", "кассир", "касса", "каса"];
    const SBORSHIK = ["sru", "сру", "сборщик", "сборка"];
    const PREZENTER = ["spe", "спе", "презентёр", "презентер"];
    const EKSPEDITOR = ["sep", "сеп", "експедитор", "экспедитор"];
    const TABLE_SERVIS = ["sts", "стс", "тенты", "тент", "тейбл", "тэйбл", "разнос", "вынос", "тейбл сервис"];
    const DRIVE = ["dt", "дт", "драйв",];
    const DOSTAVKA = ["mds", "мдс", "доставка", "доставщик"];

    /////////////////////// Картошка
    for (let i = 0; i < FRY.length; i++) {
        if (FRY[i] === userTitle.toLowerCase()) {
            return "фри";
        }
    }

    /////////////////////// Фритюр
    for (let i = 0; i < FRITYUR.length; i++) {
        if (FRITYUR[i] === userTitle.toLowerCase()) {
            return "фритюрщик";
        }
    }

    /////////////////////// Гриля
    for (let i = 0; i < GRILL.length; i++) {
        if (GRILL[i] === userTitle.toLowerCase()) {
            return "гриля";
        }
    }

    /////////////////////// Заправщик
    for (let i = 0; i < ZAPRAVSHIK.length; i++) {
        if (ZAPRAVSHIK[i] === userTitle.toLowerCase()) {
            return "заправщик";
        }
    }

    /////////////////////// Зал
    for (let i = 0; i < ZAL.length; i++) {
        if (ZAL[i] === userTitle.toLowerCase()) {
            return "зал";
        }
    }

    /////////////////////// Аут
    for (let i = 0; i < OUT.length; i++) {
        if (OUT[i] === userTitle.toLowerCase()) {
            return "аут";
        }
    }

    /////////////////////// Бд
    for (let i = 0; i < BD.length; i++) {
        if (BD[i] === userTitle.toLowerCase()) {
            return "бд";
        }
    }

    /////////////////////// Касса
    for (let i = 0; i < KASSA.length; i++) {
        if (KASSA[i] === userTitle.toLowerCase()) {
            return "касса";
        }
    }

    /////////////////////// Сборщик
    for (let i = 0; i < SBORSHIK.length; i++) {
        if (SBORSHIK[i] === userTitle.toLowerCase()) {
            return "сборщик";
        }
    }

    /////////////////////// Презентёр
    for (let i = 0; i < PREZENTER.length; i++) {
        if (PREZENTER[i] === userTitle.toLowerCase()) {
            return "презентёр";
        }
    }

    /////////////////////// Экспедитор
    for (let i = 0; i < EKSPEDITOR.length; i++) {
        if (EKSPEDITOR[i] === userTitle.toLowerCase()) {
            return "экспедитор";
        }
    }

    /////////////////////// Тейбл сервис
    for (let i = 0; i < TABLE_SERVIS.length; i++) {
        if (TABLE_SERVIS[i] === userTitle.toLowerCase()) {
            return "тейбл сервис";
        }
    }

    /////////////////////// Инициатор
    for (let i = 0; i < INITSIATOR.length; i++) {
        if (INITSIATOR[i] === userTitle.toLowerCase()) {
            return "инициатор";
        }
    }

    /////////////////////// Финишер
    for (let i = 0; i < FINISHER.length; i++) {
        if (FINISHER[i] === userTitle.toLowerCase()) {
            return "финишер";
        }
    }

    /////////////////////// Драйв
    for (let i = 0; i < DRIVE.length; i++) {
        if (DRIVE[i] === userTitle.toLowerCase()) {
            return "драйв";
        }
    }

    /////////////////////// Доставка
    for (let i = 0; i < DOSTAVKA.length; i++) {
        if (DOSTAVKA[i] === userTitle.toLowerCase()) {
            return "доставка";
        }
    }

    return "";
}

function countAndShowClearSalary() {
    document.getElementById('clear_salary').innerHTML = (moneyPerHour - (moneyPerHour * 0.195)).toFixed(2) + "грн";
}