'use strict';
// console.log(Number.MAX_VALUE);

let ask = confirm("Do you agree?") ?
  () => alert("You agreed.") :
  () => alert("You canceled the execution.");

ask();
