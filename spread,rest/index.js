// spread : 특정객체가 가진 프로퍼티를 펼쳐줌

// const toy = {
//   type: "bear",
//   price: 15000,
// };

// const blueToy = {
//   ...toy,
//   color: "blue",
// };

// const yellowToy = {
//   ...toy,
//   color: "yellow",
// };

// console.log(blueToy);
// console.log(yellowToy);

// const color1 = ["red", "orange", "yellow"];
// const color2 = ["blue", "navy", "purple"];

// const rainbow = [...color1, "green", ...color2];

// console.log(rainbow);

// rest: 나머지 매개변수,순서는 언제나 맨 마지막에 작성해야함

// const blueToy = {
//   type: "bear",
//   price: 15000,
//   color: "blue",
// };

// const { type, ...rest } = blueToy;

// console.log(type);
// console.log(rest);
// console.log(color);

// const color = ["red", "orange", "yellow", "green"];

// const [c1, c2, ...rest] = color;

// console.log(c1, c2);
// console.log(rest);

// const print = (a, b, ...rest) => {
//   // console.log([c, d, e, f]);
//   console.log(a, b, rest);
// };

// print(1, 2, 3, 4, 5, 6);

const print = (...rest) => {
  console.log(rest); // rest
};

const numbers = [1, 2, 3, 4, 5, 6];
// print(numbers[0], numbers[1], numbers[2], numbers[3], numbers[4], numbers[5]);
print(...numbers); // spread
