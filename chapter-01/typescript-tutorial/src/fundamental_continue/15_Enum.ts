/*
enum adalah set contanta yg mana teset enghaislkan nilai2 atau angka2 dan bisa terset slain angka2
juga dalam bentuk string ,tujuanya kode kita menjadi readable dan mudah dimengerti
english:
In TypeScript, enum (short for "enumeration") is a way to define a set of named constants 
that can either be numeric or string values.
 It allows you to group related values and makes your code more readable and manageable.


*/
//di TS default enum adalah Numeric Enums dimana tiap value dari member enum dimulai dari 0
//tapi kita bisa set tidak dari nol

enum Direction {
  Up, //bernilai atau value =  0
  Down, //bernilai  1
  Left, ////bernilai  2
  Right, // bernilai 3
}

//cara penggunaan /usage
const dir: Direction = Direction.Down;
console.log("direction this time =", dir); //hasil dir = 0

console.log("Direction awal/pertama =", Direction[0]); //hasil = "Up"
/*
2.string enums dia gak sama dgn numeric enums yg otomatis increment 
sbb
*/

enum Status {
  Success = "SUCCESS",
  Failure = "FAILURE",
  Pending = "PENDING",
}

//penggunaan
const status: Status = Status.Success; //hasil = SUCCESS
console.log("status result ", Status.Failure); //hasi; FAILURE

//3.hetergonous Enums  ( terdiri campuran dari numeric & strings enum)
//contoh :
enum Result {
  Pass = 1,
  Fail = "FAIL",
}
//REVERSE  MAPPING DIDALAM NUMERIC ENUM

/*
reverse maping artinya TS automaticlye create mapping dari value(numeri) ke dalam name 
jadi kalau yg asli sbnarnya dari name ke value sprti cntoh enum Direction diatas 
default kita sebut sbgai forward mapping yaitu dari name ke numeric/value 
reverse adlaah mapping dari value/numeric ke name!
*/
//forward mapping

enum Color {
  Red, //0
  Green, //1
  Blue, //2
}

//usage
console.log("nilai Green ", Color.Green); //1
console.log("nilai Red", Color.Red); //0

//reverse mapping
console.log("name dari  color[0] =", Color[0]); //Red
console.log("name dari  color[1] =", Color[1]); //Green

/*
Key Points About Reverse Mapping
Only for Numeric Enums: Reverse mapping does not work for string enums
 because their values are not unique numeric indexes.

enum Status {
  Success = "SUCCESS",
  Failure = "FAILURE"
}
console.log(Status["SUCCESS"]); // Undefined (no reverse mapping)
Use Case: Reverse mapping is useful when you have the numeric
 value of an enum and want to get its name. 
 This is often needed when working with APIs or systems that return numeric values.

Generated JavaScript Code: TypeScript generates a JavaScript object 
that includes both forward and reverse mappings for numeric enums:



var Color;
(function (Color) {
    Color[Color["Red"] = 0] = "Red";
    Color[Color["Green"] = 1] = "Green";
    Color[Color["Blue"] = 2] = "Blue";
})(Color || (Color = {}));
Color.Red = 0;
Color[0] = "Red";


*/
