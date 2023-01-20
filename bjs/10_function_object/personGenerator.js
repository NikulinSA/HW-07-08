const personGenerator = {
    surnameJson: `{  
        "count": 15,
        "list": {
            "id_1": "Иванов",
            "id_2": "Смирнов",
            "id_3": "Кузнецов",
            "id_4": "Васильев",
            "id_5": "Петров",
            "id_6": "Михайлов",
            "id_7": "Новиков",
            "id_8": "Федоров",
            "id_9": "Кравцов",
            "id_10": "Николаев",
            "id_11": "Семёнов",
            "id_12": "Славин",
            "id_13": "Степанов",
            "id_14": "Павлов",
            "id_15": "Александров",
            "id_16": "Морозов"
        }
    }`,
    firstNameMaleJson: `{
        "count": 10,
        "list": {     
            "id_1": "Александр",
            "id_2": "Максим",
            "id_3": "Иван",
            "id_4": "Артем",
            "id_5": "Дмитрий",
            "id_6": "Никита",
            "id_7": "Михаил",
            "id_8": "Даниил",
            "id_9": "Егор",
            "id_10": "Андрей"
        }
    }`,

    // secondNameMaleJson: `{
    //     "count": 10,
    //     "list": {     
    //         "id_1": "Александрович",
    //         "id_2": "Максимович",
    //         "id_3": "Иванович",
    //         "id_4": "Артемович",
    //         "id_5": "Дмитриевич",
    //         "id_6": "Никитович",
    //         "id_7": "Михаилович",
    //         "id_8": "Данилович",
    //         "id_9": "Егорович",
    //         "id_10": "Андреевич"
    //     }
    // }`,

    firstNameFemaleJson: `{
        "count": 10,
        "list": {     
            "id_1": "Александра",
            "id_2": "Дарья",
            "id_3": "Виктория",
            "id_4": "Анжела",
            "id_5": "Динара",
            "id_6": "Наталья",
            "id_7": "Мария",
            "id_8": "Екатерина",
            "id_9": "Елена",
            "id_10": "Анна"
        }
    }`,

    professionFemaleJson: `{
        "count": 10,
        "list": {     
            "id_1": "Парикмахер",
            "id_2": "Продавец",
            "id_3": "Стилист",
            "id_4": "Гинеколог",
            "id_5": "Няня",
            "id_6": "Мастер по наращиванию ресниц",
            "id_7": "Бухгалтер",
            "id_8": "Повар",
            "id_9": "Домохозяйка",
            "id_10": "Мерчендайзер"
        }
    }`,
    professionMaleJson: `{
        "count": 10,
        "list": {     
            "id_1": "Барбер",
            "id_2": "Продавец",
            "id_3": "Тракторист",
            "id_4": "Слесарь",
            "id_5": "Военнослужащий",
            "id_6": "Шахтер",
            "id_7": "Машинист",
            "id_8": "Повар",
            "id_9": "Сварщик",
            "id_10": "Пожарный"
        }
    }`,

    GENDER_MALE: 'Мужчина',
    GENDER_FEMALE: 'Женщина',

// генерация пола
    randomGender: function (){
        let gender = this.randomIntNumber();
        console.log(gender);
        return gender === this.randomIntNumber() ? this.GENDER_MALE : this.GENDER_FEMALE;
    },

    // Дата
    randomDate: function(){
        var birthDay = new Date(this.randomIntNumber(1950,2005), this.randomIntNumber(1,12), this.randomIntNumber(1,31));
        return birthDay.toLocaleDateString('ru',{day: 'numeric', month: 'long', year: 'numeric'});
    },

// рандомайзер
    randomIntNumber: (max = 1, min = 0) => Math.floor(Math.random() * (max - min + 1) + min),
// рандомайзер
    randomValue: function (json) {
        const obj = JSON.parse(json);
        const prop = `id_${this.randomIntNumber(obj.count, 1)}`;  // this = personGenerator
        return obj.list[prop];
    },
// генерация имени
    randomFirstName: function() {
        // genderVal == 1 ? this.GENDER_MALE : this.GENDER_FEMALE;
        if(this.person.gender == 'Мужчина'){
            return this.randomValue(this.firstNameMaleJson);
        }
        else{
            return this.randomValue(this.firstNameFemaleJson);
        }
    },
    // генерация отчества
    randomSecondName: function() {
            return this.randomValue(this.firstNameMaleJson);
    },
// генерация фамилии
     randomSurname: function() {
        return this.randomValue(this.surnameJson);
    },
// генерация профессии для мужчин
    randomProfessionMale: function(){
        return this.randomValue(this.professionMaleJson)
    },
// генерация профессии для женщин
    randomProfessionFemale: function(){
        return this.randomValue(this.professionFemaleJson)
    },
// генерация персональной карты
    getPerson: function () {
        this.person = {};
        this.person.gender = this.randomGender();
        this.person.birthDay = this.randomDate();
        this.person.secondName = this.randomSecondName();
        this.person.firstName = this.randomFirstName();
        this.person.surName = this.randomSurname();
        this.person.professionMaleJson = this.randomProfessionMale();
        this.person.professionFemaleJson = this.randomProfessionFemale();
        return this.person;
    },
// кнопка очистки формы
    clearPerson: function () {
        this.person = {};
        this.person.gender = ' ';
        this.person.birthDay = ' ';
        this.person.secondName = ' ';
        this.person.firstName = ' ';
        this.person.surName = ' ';
        this.person.professionMaleJson = ' ';
        return this.person;
    },
};

