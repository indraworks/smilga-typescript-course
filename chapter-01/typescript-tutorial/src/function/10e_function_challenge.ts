/*
buatlah anomyous funtion dimana named lengthOgSTring  take strin dan return lengthof the string 
example :lengthOfString('Hello WOrld') => 11 
*/

let lengthOfString: (a: string) => number = (a: string): number => {
  return a.length;
};
console.log("panjang string :", lengthOfString("hendrawan wicaksono"));

//max number :
let maxNumber: (a: number, b: number) => number | string = (
  x: number,
  y: number
): number | string => {
  if (x > y) return x;
  if (x == y) return "this equal";
  return y;
};

console.log("maxNmber =", maxNumber(2, 5));

//bisa juga dengan cara itenari functuon sbb utk tahu mana yg lebih besar !
let maxNmber2: (a: number, b: number) => number = (
  x: number,
  y: number
): number => (x > y ? x : y);
console.log("maxNumber  7 :100 = ", maxNmber2(7, 100));

//check if even or odd
let resulEvenOdd: (a: number) => string = (x: number): string => {
  if (x % 2 == 0) return "this is even";
  return "this is odd";
};
console.log(resulEvenOdd(7));
console.log(resulEvenOdd(12));
console.log(resulEvenOdd(6));
