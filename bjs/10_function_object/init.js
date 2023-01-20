
// функция генерации персональной карты
function generate() {
    const initPerson = personGenerator.getPerson();
    let i = initPerson.secondName.length;
    // console.log(i);
    // console.log(initPerson.secondName[i-1]);
    document.querySelector('#genderOutput').innerText = initPerson.gender;
    document.querySelector('#firstNameOutput').innerText = initPerson.firstName;
    // проверка пола
    if (document.querySelector('#genderOutput').innerText == 'Женщина'){
        document.querySelector('#surnameOutput').innerText = initPerson.surName + 'а';
        // изменение окончания отчества
        if (initPerson.secondName[i-1] == 'й'){
            document.querySelector('#secondNameOutput').innerText = initPerson.secondName.substring(0, initPerson.secondName.length - 1) + 'евна';
        }else if (initPerson.secondName[i-1] == 'а'){
            document.querySelector('#secondNameOutput').innerText = initPerson.secondName.substring(0, initPerson.secondName.length - 1) + 'ична';
        } else{
            document.querySelector('#secondNameOutput').innerText = initPerson.secondName.substring(0, initPerson.secondName.length) + 'овна';
        }
        document.querySelector('#profOutput').innerText = initPerson.professionFemaleJson;
    }else{
        document.querySelector('#surnameOutput').innerText = initPerson.surName;
        if (initPerson.secondName[i-1] == 'й'){
            document.querySelector('#secondNameOutput').innerText = initPerson.secondName.substring(0, initPerson.secondName.length - 1) + 'евич';
        }else if (initPerson.secondName[i-1] == 'а'){
            document.querySelector('#secondNameOutput').innerText = initPerson.secondName.substring(0, initPerson.secondName.length - 1) + 'ич';
        } else{
            document.querySelector('#secondNameOutput').innerText = initPerson.secondName.substring(0, initPerson.secondName.length) + 'ович';
        }
        document.querySelector('#profOutput').innerText = initPerson.professionMaleJson;
        }
    document.querySelector('#birthYearOutput').innerText = initPerson.birthDay;
};
// события загрузки страницы или нажатие кнопки сгенерирует карту
window.onload = generate();
document.querySelector('#start').addEventListener('click', generate);

// кнопка очистки сгенерированных значений
document.querySelector('#clear').addEventListener('click', function(){
    const initPerson = personGenerator.clearPerson();
    document.querySelector('#genderOutput').innerText = initPerson.gender;
    document.querySelector('#firstNameOutput').innerText = initPerson.firstName;
    document.querySelector('#surnameOutput').innerText = initPerson.surName;
    document.querySelector('#secondNameOutput').innerText = initPerson.secondName;
    document.querySelector('#birthYearOutput').innerText = initPerson.birthDay;
    document.querySelector('#profOutput').innerText = initPerson.professionMaleJson;
});
