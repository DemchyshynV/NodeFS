console.log('New Task');
//- присвоить каждому из следующих значений свою переменную:
// 'hello','owu','com', 'ua', 1, 10, -999, 123, 3.14, 2.7, 16, true, false
// Вывести каждую при помощи console.log , alert, document.write
let a= "hello";
let b = "owe";
let c = 'com';
let d = 'ua';
let e = 1;
let f = 10;
let g = -999;
let h = 123;
let i = 3.14;
let j = 2.7;
let k = 16;
let l = true;
let m = false;
console.log(a, b, c, d, e, f, g, h, i, j, k, l, m);
alert(a);
alert(b);
alert(c);
alert(d);
alert(e);
alert(f);
alert(g);
alert(h);
alert(i);
alert(j);
alert(k);
alert(l);
alert(m);
document.write(a, b, c, d, e, f, g, h, i, j, k, l, m);



console.log('New Task');

//переопределить каждую переменную из задания 1 дав им произвольные значения
//Вывести каждую при помощи console.log , alert, document.write
a = 25;
b = 35;
c = 45;
d = 55;
e = 65;
f = 75;
g = 85;
h = 95;
i = 105;
j = 115;
k = 125;
l = 135;
m = 145;
console.log(a, b, c, d, e, f, g, h, i, j, k, l, m);
alert(a);
alert(b);
alert(c);
alert(d);
alert(e);
alert(f);
alert(g);
alert(h);
alert(i);
alert(j);
alert(k);
alert(l);
alert(m);
document.write(a, b, c, d, e, f, g, h, i, j, k, l, m);



console.log('New Task');
/*
Создать 3 числовых и 3 стринговых константы.
Вывести каждую при помощи console.log , alert, document.write
*/
const aa= 666;
const ab= 777;
const ac= 888;
const ba= '666';
const bb= '777';
const bc= '888';
console.log(aa,ab,ac,ba,bb,bc);
alert(aa);
alert(ab);
alert(ac);
alert(ba);
alert(bb);
alert(bc);
document.write(aa,ab,ac,ba,bb,bc);


console.log('New Task');
/*
    при помощи 3х разных prompt() получить 3 слова которые являются вашими ФИО.
    Для фамилии имени и отчества создать разные переменные.
    Вывести каждую при помощи console.log , alert, document.write
*/
let surname = prompt ('Enter your surname please');
let name = prompt ('Enter your name please');
let fatherName = prompt ('Enter your fathername please');
console.log(surname, name, fatherName);
/*
alert(surname);
alert(name);
alert(fatherName);
*/
document.write(surname, name, fatherName);

console.log('New Task');
/*
- Взять переменные из задания 4 и сконкатенировать их в одной переменной person.
*/
let  person = surname+' '+name+' '+fatherName;
console.log(person);


console.log('New Task');
/*
- Взять задние 4 и 5 и применить его к ФИО всех членов своей семьи.
*/
let myGirlFriend = "Angelina Jolie Степанівна";
console.log(myGirlFriend);


console.log('New Task');
/*
- при помощи prompt() получить 3 числа. Привести их к числовому типу при помощи +. вывести их в консоль.
*/
let number1 = +prompt('How many times did you drink coffe today?');
let number2 = +prompt('How many times did you see the Poltva river? ?');
let number3 = +prompt('How many times did you go on a date with Angelina Joli??');
console.log (number1,number2,number3);

console.log('New Task');
/*
- при помощи prompt() получить 4 числа. Привести их к числовому типу при помощи parseInt.
Сложить их между собой записав результат в переменную result и вывести в консоль браузера
*/
let question1 = parseInt(number1); //Это безсмыслено, так как ты number привел к числу еще на 129-й стройчке
let question2 = parseInt(number2); //Тоже самое
let question3 = parseInt(number3); //Тоже самое
console.log(question1,question2,question3);


console.log('New Task');
/*
    при помощи prompt()  получить 3 числа с плавающей точекой. при помощи parseFloat привести их к соответсвующему типу.
    Сложить их между собой записав результат в переменную result и вывести в консоль браузера
*/
let question4 = parseFloat(+prompt('could you type 3.2544125 please')); // "+" не нужен функцыя parseFloat первращяет строчку в число с плавающей точкой
let question5 = parseFloat(+prompt('could you type 3.2544125 please')); //Тоже самое
let question6 = parseFloat(+prompt('could you type 3.2544125 please')); //Тоже самое
let resalt = question4+question5+question6;
console.log(resalt);



console.log('New Task');
/*
     - при помощи prompt()  получить 3 числа с плавающей точекой. Округлить их при помощи Math.round
    Сложить их между собой записав результат в переменную  и вывести в консоль браузера
* */
question4 = Math.round(+prompt('could you type 3.2544125 please'));
question5 = Math.round(+prompt('could you type 3.2544125 please'));
question6 = Math.round(+prompt('could you type 3.2544125 please'));
let resalt1 = question4+question5+question6;
console.log(resalt1);



console.log('New Task');
/*- при помощи prompt()  получить 2 целых числа. Привести их к целочисленному типу.
Первое число - это число которое будут возводить в степень.
Второе число - это число которое является степенью.
При помощи Math.pow возвести первое число в степень второго числа.
*/
let resail2 = Math.pow(question4,question5);
console.log(resail2);



console.log('New Task');
/*- При помощи оператора опредеоения типа typeof определить типы следующих
переменных и вывести их в консоль let a = 100; let b = '100'; let c = true; let d = undefined;*/
let a1 = 100;
let b1 = '100';
let c1 = true;
let d1 = undefined;
console.log(typeof a1, typeof b1, typeof c1, typeof d1,);



console.log('New Task');
/*- Поставьте соответствующий оператор в выражениях что бы получился соответсвующий результат.
 В одинаковых выражениях в задании не использовать два одинаковых оператора.
Каждое выражение вложить в свою переменную
    5 ? 6 -> true
    5 ? 6 -> false
    5 ? 6 -> false
    5 ? 6 -> false
    10 ? 10 -> true
    10 ? 10 -> true
    10 ? 10 -> false
    10 ? 10 -> false
    10 ? 10 -> false
    123 ? '123' -> false
    123 ? '123' -> true*/
console.log(5<6);
console.log(5>6);
console.log(5>=6);
console.log(5==6);
console.log(10>=10);
console.log(10<=10);
console.log(10>10);
console.log(10<10);
console.log(10!=10);
console.log(123!==123);
console.log(123==123); // должно было быть так console.log(123=='123');



console.log('New Task');
/*Дан массив:
let users = [
    {name: 'vasya', age: 31, status: false},
    {name: 'petya', age: 30, status: true},
    {name: 'kolya', age: 29, status: true},
    {name: 'olya', age: 28, status: false},
    {name: 'max', age: 30, status: true},
    {name: 'anya', age: 31, status: false},
    {name: 'oleg', age: 28, status: false},
    {name: 'andrey', age: 29, status: true},
    {name: 'masha', age: 30, status: true},
    {name: 'olya', age: 31, status: false},
    {name: 'max', age: 31, status: true}
   ];
- обратиться в соответсвующую ячейку массива и соответсвующий параметр объекта и вывести в консоль
Пример : вывести имя 1го объекта . Ответ : console.log(users[0].name). Будьте внимательны! 4й объект имеет индес 3!
-- статус Андрея
-- статус Максима
-- имя предпоследнего объекта
-- имя третьего объекта
-- возраст Олега
-- возраст Оли
-- возраст + имя 5го объекта
-- возраст + сатус ани
*/
let users = [
    {name: 'vasya', age: 31, status: false},
    {name: 'petya', age: 30, status: true},
    {name: 'kolya', age: 29, status: true},
    {name: 'olya', age: 28, status: false},
    {name: 'max', age: 30, status: true},
    {name: 'anya', age: 31, status: false},
    {name: 'oleg', age: 28, status: false},
    {name: 'andrey', age: 29, status: true},
    {name: 'masha', age: 30, status: true},
    {name: 'olya', age: 31, status: false},
    {name: 'max', age: 31, status: true}
];
console.log(users[7].status);
console.log(users[10].status);
console.log(users[9].name);
console.log(users[2].name);
console.log(users[6].age);
console.log(users[9].age);
console.log(users[4].age + users[4].name);
console.log(users[5].age + users[5].status); // console.log(users[5].age + ' ' + users[5].status);



