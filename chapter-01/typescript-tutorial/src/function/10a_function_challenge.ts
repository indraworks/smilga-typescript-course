/*
  buatlah function berikut:
  1.buat calculate average two number argument and return average 


*/

//jawab 1
let resultAverage = function (a: number, b: number): number | undefined {
  if (a <= 0 || b <= 0) return;
  return (a + b) / 2;
};
console.log(resultAverage(3.6, 9.7));

//2
let resultAddString = function (x: string, y: string): string | undefined {
  if (typeof x !== "string" || typeof y !== "string") return;
  return x.concat(y);
};

console.log(resultAddString("kuriniawan", " wahyu "));

//3  square
let resultSquare = function (x: number): number | undefined {
  if (typeof x == "string") return;
  return x * x;
};

console.log(resultSquare(8.64));

//3  sumofSquare
let sumOfSquare = function (x: number, y: number): number | undefined {
  if (typeof x !== "number" || typeof y !== "number") return;
  return x * x + y * y;
};

console.log(sumOfSquare(8.64, 9.67));
