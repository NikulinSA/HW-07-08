
function generate() {
    const initPerson = personGenerator.getPerson();
    document.querySelector('#genderOutput').innerText = initPerson.gender;
    document.querySelector('#firstNameOutput').innerText = initPerson.firstName;
    if (document.querySelector('#genderOutput').innerText == 'Женщина'){
        document.querySelector('#surnameOutput').innerText = initPerson.surName + 'а';
        document.querySelector('#secondNameOutput').innerText = initPerson.secondName.substring(0, initPerson.secondName.length - 2) + 'на';
        document.querySelector('#profOutput').innerText = initPerson.professionFemaleJson;
    }else{
        document.querySelector('#surnameOutput').innerText = initPerson.surName;
        document.querySelector('#secondNameOutput').innerText = initPerson.secondName;
        document.querySelector('#profOutput').innerText = initPerson.professionMaleJson;
        }
    document.querySelector('#birthYearOutput').innerText = initPerson.birthDay;
};

window.onload = generate();
document.querySelector('#start').addEventListener('click', generate);

document.querySelector('#clear').addEventListener('click', function(){
    const initPerson = personGenerator.clearPerson();
    document.querySelector('#genderOutput').innerText = initPerson.gender;
    document.querySelector('#firstNameOutput').innerText = initPerson.firstName;
    document.querySelector('#surnameOutput').innerText = initPerson.surName;
    document.querySelector('#secondNameOutput').innerText = initPerson.secondName;
    document.querySelector('#birthYearOutput').innerText = initPerson.birthDay;
    document.querySelector('#profOutput').innerText = initPerson.professionMaleJson;
});
