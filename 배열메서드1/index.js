// 배열 내장 함수

let arr = [1, 2, 3, 4, 5];

// 일반 for문
for (let i = 0; i < arr.length; i++) {
  console.log(arr[i]);
}

// 매개변수가 콜백함수
arr.forEach((el, idx, array) => {
  console.log(`arr의 ${idx}번째 요소는 ${el}입니다.`);
  console.log(array);
});

// forEach는 결과를 받을 수 없다. 조회만.

let newArray = [];

for (let i = 0; i < arr.length; i++) {
  newArray.push(arr[i] * 10);
}

console.log(newArray);

let newArray2 = arr.map((el) => {
  return el * 10;
});

console.log(newArray2);

let colors = ["green", "blue", "purple"];

// 배열의 마지막 값을 알아야 할때
console.log(colors.at(-1));

console.log(colors.includes("blue", 1));
console.log(colors.indexOf("yellow")); // 맞지 않는 값을 찾을때 -1이 뜸

// findIndex 배열의 요소가 객체로 이루어져 있을 경우 특정값을 지닌 요소가 몇번째 위치인지
// find 특정값 요소 자체를 반환

console.log(colors.findIndex((el) => el === "blue"));

let colors2 = [
  { id: 1, color: "green" },
  { id: 2, color: "blue" },
  { id: 3, color: "pink" },
];

// filter는 값을 걸러낼 뿐이다
let filterArray = colors2.filter((el, idx, array) => el.id > 1);
console.log(filterArray);

let sliceArray = colors2.slice(1, 2);
console.log(sliceArray);

const users = ["우리", "보리", "하늘"];

const userMap = users.map((el) => el + "님");
