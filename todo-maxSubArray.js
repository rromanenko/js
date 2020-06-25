'use strict';

// TODO https://javascript.info/task/maximal-subarray

// function getMaxSubSum(arr) {
//   while (arr[arr.length - 1] <= 0) { arr.length--; }
//   let sum = 0;
//   let start = -1;
//   for (let i=0; i<arr.length;i++) {
//     if (sum + arr[i] <= 0) {
//       sum = 0;
//       start = i+1;
//     } else {
//       sum += arr[i];
//     };
//   }
//   return sum;
// };
