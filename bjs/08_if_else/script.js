let minValue;
let maxValue;
let massiv = ['один','два','три','четыре','пять','шесть','семь','восемь','девять', 'десять','одинадцать','двенадцать','тринадцать','четырнадцать','пятнадцать','шестнадцать','семнадцать','восемнадцать','девятнадцать'];
let massiv1 = ['двадцать','тридцать','сорок','пятьдесят','шестьдесят','семьдесят','восемьдесят','девяносто'];
let massiv2 = ['сто','двести','триста','четыреста','пятьсот','шестьсот','семьсот','восемьсот','девятьсот'];
const answerField = document.querySelector('#answerField');
answerField.innerText = `Загадайте число`;

function stringValue (){
    const orderNumberField = document.querySelector('#orderNumberField');
    const answerField = document.querySelector('#answerField');
    orderNumberField.innerText = orderNumber;
    if (0 < answerNumber <= 19){
        answerField.innerText = `Вы загадали число ${massiv[answerNumber-1]}?`;
    }
    else if (answerNumber <0){
        answerField.innerText = `Вы загадали число: минус ${massiv[Math.abs(answerNumber)-1]}?`;
    }
    answerField.innerText = `Вы загадали число ${answerNumber}?`;
}

// проверка ввода пользователем
document.querySelector('#start').addEventListener('click', function(){
    minValue = Number(document.querySelector('#minVal').value);
    maxValue = Number(document.querySelector('#maxVal').value);
    // проверка на максимум и минимум
    if (minValue > maxValue) {
        let a = maxValue;
        maxValue = minValue;
        minValue = a;
    }
    if (minValue === '' || isNaN(minValue)){
                minValue = 0;
            }
            if (minValue < -999){
                minValue = -999;
            }

    if (maxValue === 0 || isNaN(maxValue)){
                maxValue = 100;
            }
            if (maxValue > 999){
                maxValue = 999;
            }
            // Вывод сообщения
    document.querySelector('#okno').textContent = `Загадайте любое целое число от ${minValue} до ${maxValue}, а я его угадаю`;
    document.querySelector('#minVal').toggleAttribute('disabled','true');
    document.querySelector('#maxVal').toggleAttribute('disabled','true');
    document.querySelector('#start').toggleAttribute('disabled');
    answerNumber  = Math.floor((minValue + maxValue) / 2);
    orderNumber = 1;
    gameRun = true;
    stringValue();
})
// кнопка заново
document.querySelector('#btnRetry').addEventListener('click', function () {
    // userInput();
    document.querySelector('#okno').textContent = `Загадайте любое целое число от ${minValue} до ${maxValue}, а я его угадаю`;
    document.querySelector('#minVal').removeAttribute('disabled','true');
    document.querySelector('#okno').textContent = `Загадайте любое целое число от ${minValue} до ${maxValue}, а я его угадаю`;
    document.querySelector('#maxVal').removeAttribute('disabled','true');
    document.querySelector('#start').removeAttribute('disabled','true');
    orderNumber = 1;
    document.querySelector('#minVal').value = '';
    document.querySelector('#maxVal').value = '';
    // answerNumber  = Math.floor((minValue + maxValue) / 2);
    orderNumberField.innerText = orderNumber;
    answerField.innerText = `Загадайте число`;
    // stringValue();
    gameRun = true;
})
// Кнопка больше
document.querySelector('#btnOver').addEventListener('click', function () {
    if (gameRun){
        if (minValue === maxValue){
            const slova = ["Вы загадали неправильное число!\n\u{1F914}", "Я сдаюсь..\n\u{1F92F}", "Мне надо подкачаться))..\n\u{1F92F}", "Я сдаюсь, но я вернусь..\n\u{1F92F}"];
            const phraseRandom = Math.round( Math.random()*3);
            const answerPhrase = (slova[phraseRandom]);

            answerField.innerText = answerPhrase;
            gameRun = false;
        } else {
            minValue = answerNumber  + 1;
            answerNumber  = Math.floor((minValue + maxValue) / 2);
            orderNumber++;
            orderNumberField.innerText = orderNumber;
            if (answerNumber > 0 && answerNumber <= 19){
                answerField.innerText = `Вы загадали число ${massiv[answerNumber-1]}?`;
            // } else if (answerNumber >= 20 && answerNumber < 100) {
            //     if (String(answerNumber).indexOf(0) === 2 && String(answerNumber).indexOf(1) === 0) {
            //         answerField.innerText = `Вы загадали число ${massiv1[0]}?`;
            //     }
            } else if (answerNumber > -20 && answerNumber < 0){
                answerField.innerText = `Вы загадали число: минус ${massiv[Math.abs(answerNumber)-1]}?`;
            } else{
                answerField.innerText = `Вы загадали число ${answerNumber}?`;
            }
    }
}})
// Кнопка меньше
document.querySelector('#btnLess').addEventListener('click', function () {
    if (gameRun){
        if (minValue === maxValue){
            const slova = ["Вы загадали неправильное число!\n\u{1F914}", "Я сдаюсь..\n\u{1F92F}", "Мне надо подкачаться))..\n\u{1F92F}", "Я сдаюсь, но я вернусь..\n\u{1F92F}"];
            const phraseRandom = Math.round( Math.random()*3);
            const answerPhrase = (slova[phraseRandom]);

            answerField.innerText = answerPhrase;
            gameRun = false;
        } else {
            maxValue = answerNumber--;
            answerNumber  = Math.floor((minValue + maxValue) / 2);
            orderNumber++;
            orderNumberField.innerText = orderNumber;
            if (answerNumber > 0 && answerNumber <= 19){
                answerField.innerText = `Вы загадали число ${massiv[answerNumber-1]}?`;
            } else if (answerNumber > -20 && answerNumber < 0){
                answerField.innerText = `Вы загадали число: минус ${massiv[Math.abs(answerNumber)-1]}?`;
            // } else if (answerNumber >= 20 && answerNumber < 100) {
            //     if (String(answerNumber).indexOf(0) == '2' && String(answerNumber).indexOf(1) == '0') {
            //         answerField.innerText = `Вы загадали число ${massiv1[0]}?`;
            //     }
            } else{
                answerField.innerText = `Вы загадали число ${answerNumber}?`;
            }
        }
    }
})
// Кнопка верно
document.querySelector('#btnEqual').addEventListener('click', function () {
    if (gameRun){
        const slova = ["Я всегда угадываю\n\u{1F60E}", "Мне крупно повезло\n\u{1F60E}", "Давай еще разок?\n\u{1F60E}", "Проще простого\n\u{1F60E}"];
            const phraseRandom = Math.round( Math.random()*3);
            const answerPhrase = (slova[phraseRandom]);

            answerField.innerText = answerPhrase;
        // answerField.innerText = `Я всегда угадываю\n\u{1F60E}`
        gameRun = false;
    }
})
