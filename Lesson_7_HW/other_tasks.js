/*
2. Для заданої HTML-сторінки:
<p id ='text'>I learning JavaScript events!</p>
<div>
<button . . . . . >Change style!</button>
</div>
напишіть функцію changeCSS(), яка спрацьовуватиме по кліку на кнопку і змінюватиме стиль вмісту
 тега <p>: колір шрифту – оранжевий, розмір шрифту 20 пс, шрифт сімейства "Comic Sans MS".
 */
function setCss() {
    const text = document.getElementById('text');
    text.style.color = 'orange';
    text.style.fontSize = '20';
    text.style.fontFamily = 'Comic Sans MS';
}

/*
3. Задано сторінку з 3 кнопками і 1 лінкою. Напишіть Javascript код і реалізуйте HTML-сторінку з
відповідними подіями на кожному елементові:
1) 1-ша кнопка – при кліку на неї колір фону сторінки міняється на синій
2) 2-га кнопка – при подвійному кліку на неї колір фону сторінки міняється на рожевий
3) 3-я кнопка – при натисненні і утримуванні кнопки колір фону сторінки стає коричневий.
При відпусканні – білий.
4) При наведенні на лінку – колір фону стає жовтим, при відведенні – білим.
 */
function firstButton() {
    document.getElementsByTagName('body')[0].style.backgroundColor = 'blue';
}
function secondButton() {
    document.getElementsByTagName('body')[0].style.backgroundColor = 'pink';
}
function thirdButton() {
    document.getElementsByTagName('body')[0].style.backgroundColor = 'brown';
}
function thirdButtonMouseUp() {
    document.getElementsByTagName('body')[0].style.backgroundColor = 'white';
}
function linkHoverOn() {
    document.getElementsByTagName('body')[0].style.backgroundColor = 'yellow';
}
function linkHoverOff() {
    document.getElementsByTagName('body')[0].style.backgroundColor = 'white';
}

/*
4. Реалізуйте програму, яка по натисканню на кнопку видалятиме обраний елемент випадаючого списку.
Можуть видалятися всі елементи в будь-якому порядку
 */
function deleteElementFromList() {
    const list = document.getElementById('select1');
    const currentValue = list.value;
    document.querySelector(`option[value=${currentValue}]`).remove();
}

/*
5. Реалізуйте програму, яка по натисканню на кнопку виводитиме повідомлення
"I was pressed!", при наведенні на кнопку виводитиме повідомлення "Mouse on me!", а при відведенні
 курсора миші виводитиме повідомлення "Mouse is not on me!".
 */
function press() {
    const p = document.getElementById('5');
    p.innerText = 'I was pressed!';
}
function hoverOver() {
    const p = document.getElementById('5');
    p.innerText = 'Mouse on me!';
}
function hoverOff() {
    const p = document.getElementById('5');
    p.innerText = 'Mouse is not on me!';
}

/*
6. Реалізуйте програму, яка відслідковуватиме зміну розміру (ширини і висоти) вікна браузера і
виводитиме на поточну сторінку при її розтязі/стисканні відповідні значення.
 */
window.addEventListener('resize', sizes);
function sizes() {
    document.getElementById('sizes').innerText = `${window.innerWidth}px x ${window.innerHeight}px`
}

/*
7. На сторінці потрібно реалізувати 2 випадаючих списки. У першому містяться назви країн,
 у другому – назви міст. Реалізувати роботу таким чином, щоб коли вибирається з лівого випадаючого
 списку певна країна - в правому випадаючому списку з'являлися міста цієї країни. Список міст
 формується динамічно, через JavaScript. Також потрібно нижче вивести назву обраної країни і місто
 */
function setCities() {
    const ua = ['Kharkiv', 'Kyiv', 'Lviv'];
    const tr = ['Antalya', 'Alanya', 'Kemer'];
    const usa = ['New-York', 'Washington', 'Las Vegas'];
    const countryList = document.getElementById('countries');
    const citiesList = document.getElementById('cities');
    const p = document.getElementById('cc');
    let currentCountry = countryList.value;
    let citiesToBeSet = [];
    let htmlToBeSet = [];
    if (currentCountry === 'Ukraine') {
        citiesToBeSet = ua;
    } else if (currentCountry === 'Turkey') {
        citiesToBeSet = tr;
    } else if (currentCountry === 'USA'){
        citiesToBeSet = usa;
    }
    citiesToBeSet.forEach((el) => {
        htmlToBeSet.push(`<option>${el}</option>`);
    });
    citiesList.innerHTML = htmlToBeSet.join('');
    p.innerText = `Country: ${countryList.value}\nCity: ${citiesList.value}`
}

function showCity() {
    const countryList = document.getElementById('countries');
    const citiesList = document.getElementById('cities');
    const p = document.getElementById('cc');
    p.innerText = `Country: ${countryList.value}\nCity: ${citiesList.value}`
}

function setPageData() {
    sizes();
    setCities();
}
