// классификация типов данных

"use strict";

let num = 4.7;

console.log(4 / 0); // мы получим 'Infinity' - безконечность
console.log("string" * 9); // мы получим 'NaN' - не число

const persone = "5";
// ``, '', "" - РАЗРЕШЕННЫ, НЕТУ РАЗНИЦЫ, ЧТО СТАВИТЬ
const bool = true;

console.log(something);

let und;
console.log(und); // получим 'undefined' - неопределенный тип

const obj = {
  name: "John",
  age: 52,
  isMarried: false,
};

// console.log(obj.age); // получим '52' - так как попросили 'obj.age', которое в свое время содержит число 52
console.log(obj["age"]); // если пишем в '[]', то внутри пишем: '', "", `` внутри скобки, то есть '['и содержимое']'

//             0             1       2       3       4    5
let arr = ["plum.png", "orange.jpg", 6, "apple.bmg", {}, []]; // мы можем помещать int, {}, [] внутри массива (arr)
console.log(arr[1]); // получим "orange.jpg" - так как он с 1 порядковым номером, тк нумерация в программировании начинается с 0 (не во всех языках), также не пишем '' - в кв. скобках
