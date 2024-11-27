/*
Create a variable of type string and try to invoke a string method on it.
Create a variable of type number and try to perform a mathematical operation on it.
Create a variable of type boolean and try to perform a logical operation on it.
Try to assign a value of a different type to each of these variables and observe the TypeScript compiler's response.
You can use type annotation or inference


jawab:
*/
//1)
let gretting = "hello good morning ,indra";
gretting = gretting.toUpperCase();
console.log(gretting);

//2)
let a: number = 2 + 2;
console.log("hasil 2+2 =", a);

//3
let age: number = 18;
let isAdult: boolean = age >= 18;

console.log("hasil isAdult = " + isAdult);
