// console.log(1);
// console.log(2);
// console.log(3);
// console.log(4);
// console.log(5);

// for (let i = 1; i < 6; i++) {
//   console.log(i);
// }

// for (let i = 5; i > 0; i--) {
//   console.log(i);
// }

// let i = 1;

// while (i < 6) {
//   console.log(i);
//   i++; // 안적으면 무한으로 늘어남
// }

// let arr = [1, 2, 3, 4, 5];

// 모든 배열의 요소에 접근할 수 있다
// for (let i = 0; i < arr.length; i++) {
//   console.log(arr[i]);
// }

// let person = {
//   name: "홍길동",
//   age: 25,
//   height: 180,
// };

// let newArray = Object.keys(person);

// console.log(Object.keys(person));

// for (let i = 0; i < newArray.length; i++) {
//   let nowKey = newArray[i];
//   console.log(`key: ${nowKey}, value: ${person[nowKey]}`);
// }

// console.log(Object.values(person));

// let newArray = Object.values(person);

// for (let i = 0; i < newArray.length; i++) {
//   let nowValue = newArray[i];
//   console.log(nowValue);
// }

// let newArray = Object.entries(person);

// console.log(newArray);

// for (let i = 0; i < newArray.length; i++) {
//   console.log(`key: ${newArray[i][0]}, value: ${newArray[i][1]}`);
// }

let arr2 = [1, 2, 3, 4, 5];

// 배열 모든 프로퍼티 순회
for (let i of arr2) {
  console.log(i);
}

// 객체 모든 프로퍼티 순회

const person2 = {
  name: "우리",
  age: 36,
  height: 162,
};

for (let key in person2) {
  console.log(`key: ${key}, value: ${person2[key]}`);
}
