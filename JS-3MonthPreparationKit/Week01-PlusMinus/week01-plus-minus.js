"use strict";

function plusMinus(arr) {
  // Write your code here
  let positives = 0;
  let negatives = 0;
  let zeros = 0;
  arr.forEach((element) => {
    if (element === 0) {
      zeros += 1;
    } else if (element > 0) {
      positives += 1;
    } else {
      negatives += 1;
    }
  });
  const total = arr.length;
  console.log((positives / total).toFixed(6));
  console.log((negatives / total).toFixed(6));
  console.log((zeros / total).toFixed(6));
}

function main() {
  const arr = [-4, 3, -9, 0, 4, 1];
  plusMinus(arr);
}

main();

0.500000
0.333333
0.166667