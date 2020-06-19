'use strict';
// console.log(Number.MAX_VALUE);

function checkAge(age) {
  return (age >= 18) || confirm("Does your mother know you are here?")
}

let age;
age = +prompt("Your age: ", "");

alert(checkAge(age));
