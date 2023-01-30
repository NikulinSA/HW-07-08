// элементы в DOM можно получить при помощи функции querySelector
const fruitsList = document.querySelector('.fruits__list');
const shuffleButton = document.querySelector('.shuffle__btn'); // кнопка перемешивания
const filterButton = document.querySelector('.filter__btn'); // кнопка фильтрации
const sortKindLabel = document.querySelector('.sort__kind'); // поле с названием сортировки
const sortTimeLabel = document.querySelector('.sort__time'); // поле с временем сортировки
const sortChangeButton = document.querySelector('.sort__change__btn'); // кнопка смены сортировки
const sortActionButton = document.querySelector('.sort__action__btn'); // кнопка сортировки
const kindInput = document.querySelector('.kind__input'); // поле с названием вида
const colorInput = document.querySelector('.color__input'); // поле с названием цвета
const weightInput = document.querySelector('.weight__input'); // поле с весом
const addActionButton = document.querySelector('.add__action__btn'); // кнопка добавления

// список фруктов в JSON формате
let fruitsJSON = `[
  {"kind": "Мангустин", "color": "фиолетовый", "weight": 13},
  {"kind": "Дуриан", "color": "зеленый", "weight": 35},
  {"kind": "Личи", "color": "розово-красный", "weight": 17},
  {"kind": "Карамбола", "color": "желтый", "weight": 28},
  {"kind": "Тамаринд", "color": "светло-коричневый", "weight": 22}
]`;

// преобразование JSON в объект JavaScript
let fruits = JSON.parse(fruitsJSON);
/*** ОТОБРАЖЕНИЕ ***/
const arr = ['1','2','3','4']
 // список карточек
// отрисовка карточек
const display = () => {
  // TODO: очищаем fruitsList от вложенных элементов,
  // чтобы заполнить актуальными данными из fruits
  for (let i = 0; i < fruits.length; i++) {
    if (i===0){
      while (fruitsList.firstChild){
        fruitsList.removeChild(fruitsList.firstChild);
      }
    }
    let li = document.createElement('li');
    li.classList.add('fruit__item');
    document.querySelector('.fruits__list').appendChild(li);
    let divInfo = document.createElement('div');
    divInfo.classList.add('fruit__info');
    li.appendChild(divInfo);
    let divIndex = document.createElement('div');
    divIndex.innerHTML = 'index: '+(i);
    divInfo.appendChild(divIndex);
    let divKind = document.createElement('div');
    divKind.innerHTML = `kind: ${fruits[i].kind}`;
    divInfo.appendChild(divKind);
    let divColor = document.createElement('div');
    divColor.innerHTML = `color: ${fruits[i].color}`;
    divInfo.appendChild(divColor);
    let divWeight = document.createElement('div');
    divWeight.innerHTML = `weight: ${fruits[i].weight}`;
    divInfo.appendChild(divWeight);

    if(divColor.innerText.includes('фиолетовый')) {
      li.classList.add('fruit_violet');
    }else if (divColor.innerText.includes('зеленый')){
      li.classList.add('fruit_green');
    } else if (divColor.innerText.includes('желтый')){
      li.classList.add('fruit_yellow');
    } else if (divColor.innerText.includes('красный')){
      li.classList.add('fruit_red');
    } else if (divColor.innerText.includes('коричневый')){
      li.classList.add('fruit_brown');
    } else if (divColor.innerText.includes('черный')){
      li.classList.add('fruit_black');
    } else if (divColor.innerText.includes('оранжевый')){
      li.classList.add('fruit_orange');
    } else if (divColor.innerText.includes('синий') || divColor.innerText.includes('голубой')){
      li.classList.add('fruit_blue');
    } else {
      li.classList.add('fruit_other');
    }
    // TODO: формируем новый элемент <li> при помощи document.createElement,
    // и добавляем в конец списка fruitsList при помощи document.appendChild
  }
};

// первая отрисовка карточек
display();

/*** ПЕРЕМЕШИВАНИЕ ***/

// генерация случайного числа в заданном диапазоне
const getRandomInt = (min, max) => {
  return Math.floor(Math.random() * (max - min + 1)) + min;
};

// перемешивание массива
const shuffleFruits = () => {
  let result = [];
  while (fruits.length > 0) {

    let randomFruit = getRandomInt(0, fruits.length - 1);
    let fruitsNewArr = fruits.splice(randomFruit, 1)[0];
    result.push(fruitsNewArr);
   }
   if(result == fruits){
    alert('Ничего не поменялось');
   } else {
    fruits = result;
   }
};

shuffleButton.addEventListener('click', () => {
  shuffleFruits();
  display();
});

/*** ФИЛЬТРАЦИЯ ***/

// фильтрация массива

function filterFruits (){ 
  let fF = fruits.filter(function(item) {
    return item.weight > parseInt(document.querySelector('.minweight__input').value) && item.weight < parseInt(document.querySelector('.maxweight__input').value);
  })
  // console.log(fF);
  fruits = fF;
};

filterButton.addEventListener('click', () => {
  filterFruits();
  display();
});

/*** СОРТИРОВКА ***/

let sortKind = 'bubbleSort'; // инициализация состояния вида сортировки
let sortTime = '-'; // инициализация состояния времени сортировки

function comparationColor() {
  let start = new Date().getTime();
  function byField(item) {
    return (a,b) => a[item] > b[item] ? 1 : -1;
  }
  fruits.sort(byField('color'));
  let end = new Date().getTime();
  sortTime = `${end - start} ms`;
  sortTimeLabel.textContent = sortTime;
  // fruits.forEach(user => console.log(user.color));
};

// ПУЗЫРЬКОВАЯ СОРТИРОВКА
const comparation = (clother1, clother2) => {
  return clother1.color > clother2.color ? true : false;
};

const bubbleSort = (arr, comparation) =>  // arr - массив, который нужно
{                                         // отсортировать по возрастанию.
  let start = new Date().getTime();
   const n = arr.length;
   // внешняя итерация по элементам
   for (let i = 0; i < n-1; i++) { 
       // внутренняя итерация для перестановки элемента в конец массива
       for (let j = 0; j < n-1-i; j++) { 
           // сравниваем элементы
           if (comparation(arr[j], arr[j+1])) { 
               // делаем обмен элементов
               let temp = arr[j+1]; 
               arr[j+1] = arr[j]; 
               arr[j] = temp; 
           }
       }
   } 
   let end = new Date().getTime();
   sortTime = `${end - start} ms`;   
   sortTimeLabel.textContent = sortTime;                
};

// БЫСТРАЯ СОРТИРОВКА
// функция обмена элементов
function swap(items, firstIndex, secondIndex){
  const temp = items[firstIndex];
  items[firstIndex] = items[secondIndex];
  items[secondIndex] = temp;
};

// функция разделитель
function partition(items, left, right) {
  var pivot = items[Math.floor((right + left) / 2)],
      i = left,
      j = right;
  while (i <= j) {
      while (items[i] < pivot) {
          i++;
      }
      while (items[j] > pivot) {
          j--;
      }
      if (i <= j) {
          swap(items, i, j);
          i++;
          j--;
      }
  }
  return i;
};
function quickSort(items, left, right) {
  let start = new Date().getTime();
  var index;
  if (items.length > 1) {
      left = typeof left != "number" ? 0 : left;
      right = typeof right != "number" ? items.length - 1 : right;
      index = partition(items, left, right);
      if (left < index - 1) {
          quickSort(items, left, index - 1);
      }
      if (index < right) {
          quickSort(items, index, right);
      }
  }
  let end = new Date().getTime();
  sortTime = `${end - start} ms`;   
  sortTimeLabel.textContent = sortTime;    
  return items;
};
// инициализация полей
sortKindLabel.textContent = sortKind;
sortTimeLabel.textContent = sortTime;

// Переключение методов сортировки
sortChangeButton.addEventListener('click', () => {
  if (document.querySelector('.sort__kind').innerHTML == 'bubbleSort'){
    document.querySelector('.sort__kind').innerHTML = 'quickSort';
  }else if (document.querySelector('.sort__kind').innerHTML == 'quickSort') {
    document.querySelector('.sort__kind').innerHTML = 'colorSort';
  }else if (document.querySelector('.sort__kind').innerHTML == 'colorSort') {
    document.querySelector('.sort__kind').innerHTML = 'bubbleSort';
  }
});

// кнопка сортировки
sortActionButton.addEventListener('click', () => {
  if (document.querySelector('.sort__kind').innerHTML == 'bubbleSort'){
    bubbleSort(fruits, comparation);
    console.log(bubbleSort(fruits, comparation))
  }else if (document.querySelector('.sort__kind').innerHTML == 'quickSort') {
    //fruits.sort((a,b) => a-b);
  console.log(quickSort(fruits));
  quickSort(fruits);
    // quickSort();
  }else if (document.querySelector('.sort__kind').innerHTML == 'colorSort') {
    comparationColor();
  }
  display();
});

/*** ДОБАВИТЬ ФРУКТ ***/

addActionButton.addEventListener('click', () => {
  if (document.querySelector('.weight__input').value != '' && document.querySelector('.kind__input').value != '' && document.querySelector('.color__input').value != ''){
    const newFruit = {"kind" : document.querySelector('.kind__input').value, "color" : document.querySelector('.color__input').value, "weight" : document.querySelector('.weight__input').value};
    fruits.push(newFruit);
    display();
  } else{
    alert('Заполните, пожалуйста, все поля!');
  }
});