let array1 = ["green", "blue"];
let array2 = ["purple", "yellow"];

// 배열과 배열을 붙인다
// console.log(array1.concat(array2));

// 배열을 문자열로
// console.log(array1.join());
// console.log(array1.join(" "));

let colors = ["green", "blue", "purple"];

const compare = (a, b) => {
  if (a > b) return -1;
  else if (a < b) return 1;
  else return 0;
};

colors.sort(compare);
console.log(colors);

const compare2 = (a, b) => {
  return a - b;
};

// let numbers = [1, 100, 25, 50];

// numbers.sort(compare2);
// console.log(numbers);

// let sum = 0;

// numbers.forEach((el) => {
//   sum += el;
// });

// console.log(sum);

let numbers = [1, 100, 25, 50];

let sum = numbers.reduce((acc, cur, idx) => {
  console.log(acc, cur, idx);
  return acc + cur;
}, 0);

console.log(sum);

let a1 = Array.isArray([1, 100, 50]);
let a2 = Array.isArray({ id: 1, color: "green" });
let a3 = Array.isArray("string");
let a4 = Array.isArray(undefined);

console.log(a1, a2, a3, a4);
