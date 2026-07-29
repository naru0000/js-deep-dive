// 배열,객체 요소 및 프로퍼티를 분해해 값들을 각각의 변수에 할당하는 자바스크립트의 표현식

let colors = ["green", "blue", "purple"];

// let c1 = colors[0];
// let c2 = colors[1];
// let c3 = colors[2];

// let [c1, c2, c3] = colors;

let c1, c2, c3, c4; // 선언 분리 할당
[c1, c2, c3, c4 = "yellow"] = ["green", "blue", "purple"];

console.log(c1);
console.log(c2);
console.log(c3);
console.log(c4);

let a = 10;
let b = 5;
// let tmp;

// tmp = a;
// a = b;
// b = tmp;

[a, b] = [b, a];

console.log(a, b);

let colors2 = {
  b1: "green",
  b2: "blue",
  b3: "purple",
};

// let b1 = colors2.b1;
// let b2 = colors2.b2;
// let b3 = colors2.b3;

// let { b1, b2, b3 } = colors2;
let { b1: a1, b2: a2, b3: a3 } = colors2;

console.log(a1, a2, a3);
