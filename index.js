"use strict";
//1
const age = 13;
console.log(age);
//2
const Name = "Dmytro";
console.log(Name);
//3
const isStudent = true;
console.log(isStudent);
//4
const myString = "Нічого нового не насаджуємо і старого не рушимо ";
console.log(myString);
//5
const myNumber = 10;
let plus = myNumber + 10;
console.log(plus);
//6
const myNull = 0;
console.log(myNull);
//7
const user = prompt(`Введіть своє імʼя`);
alert(`Hello ${user}!`);
//8
const change = confirm(`Так чи ні`);
if (change === true) {
  alert("Дякую за підтвердження!");
} else {
  alert("Дію відмінено!");
}
//9
alert(`Дія небезпечна!`);
const danger = confirm(`Дія небезпечна, ви точно хочете підтвердити?`);

if (danger === true) {
  alert("Дякую за підтвердження!");
} else {
  alert("Дію відмінено!");
}