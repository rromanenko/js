'use strict';

let users = [
  {id: 'john', name: "John Smith", age: 20},
  {id: 'ann', name: "Ann Smith", age: 24},
  {id: 'pete', name: "Pete Peterson", age: 31},
];

console.log(groupById(users));

function groupById(arr) {


//    for (let i in arr) {
//        newArr[arr[i].id] = arr[i]
//    }
    return arr.reduce( (newArr, cur, curInd) => { newArr[cur.id] = cur; return newArr }, {} );
}

/*
// after the call we should have:

usersById = {
  john: {id: 'john', name: "John Smith", age: 20},
  ann: {id: 'ann', name: "Ann Smith", age: 24},
  pete: {id: 'pete', name: "Pete Peterson", age: 31},
}
*/