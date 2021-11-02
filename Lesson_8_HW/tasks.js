/*
1. Напишіть функцію, яка перевірятиме чи перший символ в рядку написаний в верхньому регістрі, чи ні.
    Приклад роботи:
    upperCase('regexp');
upperCase('RegExp');
String's not starts with uppercase character
String's starts with uppercase character
 */
function upperCase(regex) {
     /[A-Z]/.test(regex)
         ? console.log('String\'s starts with uppercase character')
         : console.log('String\'s not starts with uppercase character');
}
upperCase('First');
upperCase('first');

/*
2. Напишіть функцію, яка приймає рядкові дані і виконує перевірку на їх відповідність емейлу.
    Валідними вважаються всі символи на різних позиціях.
    Приклад роботи:
    checkEmail("Qmail2@gmail.com");
true
 */
function checkEmail1(email) {
    let isRight;
    /.+@(softserveinc|gmail|mail|yahoo|ukr)\.(com|net)/.exec(email)[0] === email
        ? isRight = true
        : isRight = false;
    return isRight;
}
console.log(checkEmail1('Qmail2@gmail.com'));

/*
3. Для заданої сторінки використовуючи бібліотеку jQuery знайдіть всі <h2> з класом head,
    зробіть для них зелений колір фону, потім серед знайдених елементів знайдіть елементи з
класом inner і поставте їм розмір шрифту 35px.
    . <h2 class="head">header1</h2>
<h2 class="head">header2 <span class="inner">inner elem1</span></h2>
<h2>header3</h2>
<h2 class="head">header4<span>inner elem2</span></h2>
<h2>header5</h2>
 */
function changeCss() {
    const h2 = document.querySelectorAll('h2.head');
    const inner = document.querySelectorAll('.inner');
    h2.forEach(el => el.style.backgroundColor = 'green');
    inner.forEach(el => el.style.fontSize = '35px');
}
changeCss();

/*
4. На HTML-сторінці є 6 чекбоксів. Використовуючи бібліотеку jQuery, напишіть скріпт,
    який після того, як користувач позначив будь-які 3 чекбокси, всі чекбокси робить неактивними.
 */
function disableCheckBox() {
    let count = 0;
    const checkBoxes = Array.from(document.querySelectorAll('.check'));
    let values = checkBoxes.map(el => el.checked);
    for (let v of values) if (v === true) count++;
    if (count >= 3) {
        checkBoxes.forEach(el => el.setAttribute('disabled', ''));
    }
}

/*
5. Напишіть регулярний вираз, який в рядковому тексті 2 підстрічки буде міняти місцями.
    Приклад роботи:
    Вхідний рядок "Java Script"
Вихід “Script, Java”
 */
function replaceSubstrings(str) {
    const regex = /\s/;
    console.log(str.split(regex, 2).reverse().join(' '));
}
replaceSubstrings('Java Script');

/*
6. Напишіть функцію, яка приймає рядкові дані і виконує перевірку на їх відповідність емейлу.
    Вимоги:
· Цифри (0-9).
· Тільки латинські літери в великому (A-Z) і малому (a-z) регістрах.
· В тілі емейла допустимі лише символи “_” і “-”.
· Символ “-” не може повторюватися, не може бути 1-им символом емейлу.
checkEmail('my_mail@gmail.com');
Email is correct!
    checkEmail('#my_mail@gmail.com');
Email is not correct!
 */
function checkEmail2(email) {
    const regex = /\w+-?\w*@gmail\.com/g;
    regex.exec(email)[0] === email
        ? console.log('Email is correct!')
        : console.log('Email is not correct!');
}
checkEmail2('my_m-ail@gmail.com');
checkEmail2('#my_mail@gmail.com');

/*
7. Напишіть функцію, яка перевіряє правильність логіна.
    Правильний логін - рядок від 2 до 10 символів, що містить лише букви та цифри,цифра не може бути першою.
    Функція має приймати рядок і знаходити усі числа в цьому рядку, включаючи числа з плаваючою комою
(наприклад, 3.4).
    Приклад роботи:
    checkLogin('ee1.1ret3');
true
1.1, 3
checkLogin('ee1*1ret3');
false
1, 1, 3
 */
function checkLogin(login) {
    let isOK;
    const regLogin = /[a-zA-Z.\d]{2,10}/;
    const regDecNums = /\d\.\d/g;
    const regNums = /\d/g;
    let arr = [];
    let sortedArr = [];
    regLogin.exec(login)[0] === login ? isOK = true : isOK = false;
    arr.push(login.match(regDecNums));
    arr.push(login.replace(regDecNums, '').match(regNums));
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] !== null) {
            for (let k = 0; k < arr[i].length; k++) {
                sortedArr.push(arr[i][k]);
            }
        }
    }
    console.log(isOK);
    console.log(`${sortedArr?.join(', ')}`);
}
checkLogin('ee1.1ret3');
checkLogin('ee1*1ret3');
checkLogin('1.2ertyui');
checkLogin('1.2e3.2ui');