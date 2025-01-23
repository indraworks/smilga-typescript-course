/*
interface adalah shape of object jadi dia dibuat utk mmbetuk kontrak sbuah object ( berkut prperty atau methodnya)
sedanglkan type alias dia bisa utk data prmitive kalau interface tidak bisa . 
englishnya:
A type alias is a way to give a name to a type. It can represent primitive types,
union types, intersection types, tuples, and any other types. Once defined,
the alias can be used anywhere in place of the actual type.

*/

//type alias utk primitive type :

type Score = number;
type NumberOfString = number | string;

//type alias utk literral types contoh:
type Direction = "up" | "down" | "right" | "left";

//using type alias

let move: Direction = "right";
let gameScore: Score = 100;

/*
interface dapat merge otomatis jika misalkan ada interface A {a,b} dan 
lagi interface yg sama interface A {c}
otomatis waktu declare mis const x:A = {a,b.c}
nah type alias tidak bisa merge ! 

*/
/*
class bisa implements interface tapi utk type alias tidak bisa 
type alias bisa dgn compute properties ,tapi interface tidak bisa 

contoh : 
*/

interface Person {
  name: string;
  greet(): void;
}

class Employee implements Person {
  name: string;

  constructor(name: string) {
    this.name = name;
  }
  greet(): void {
    console.log(` hi hello ${this.name}`);
  }
}

//isntanciate di ts
//dgn pasing constructor yg ada paramnya
let jhon = new Employee("Jhon");
jhon.greet(); //output 'hi he;;o Jhon

//compute proerties pada type alias :
const propName = "age";

type Animal = { [propName]: number };

let tiger: Animal = { [propName]: 7 };
console.log(tiger);
