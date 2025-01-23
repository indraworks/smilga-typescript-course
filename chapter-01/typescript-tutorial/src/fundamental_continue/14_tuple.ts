/*
dalam ts ,tuple adalah sbuah array yg mana type yg didelcare itu akan pengaruh sama element2
dia urut element menurut dgn type array waktu dideclare 
dan tuple di ts tidak readonly (default) bisa diberikan readonly property pada ts !
it's an array with fixed length and ordered with fixed types.
This is useful when you want to group different types of values together.

*/
let person: [string, number] = ["ahmad", 19];
//person =[12,"ridho"] //error ini harus urut element sesuai type yg dideclare jadi string,number = ["ridho,12"]

//kita bisa buat readonly dg beri readonly properti

let isPegawai: readonly [string, boolean, number] = ["yono", true, 30];

//cara declare manualay atau ststic
//dituple cara delare element misalkan kita tahu ada 10 element sperti diatas dgn composisi "string",number type arayyta
//maka kita buat manual

type stringNumArray = [
  string,
  number,
  string,
  number,
  string,
  number,
  string,
  number,
  string,
  number
];
const peopleTuple: stringNumArray = [
  "a",
  27,
  "b",
  90,
  "c",
  33,
  "d",
  12,
  "e",
  10,
];

//cara declare tuple dymnamic
//jadi kita buat type alias dulu utk tuplenya sbb
type altTupleArray = (string | number)[];
const flexTupple: altTupleArray = ["a", 27, "b", 90, "c", 33, "d", 12, "e", 10];

console.log("tuple dinamic =", flexTupple);

//dymnamicly populate tupple array dgn jumlah yg sudah kita set /index atau banyak array tuple yg kita set
//counternya dan kita buat returnnya adalah (string |number)[]

const createAltArray = (count: number): (string | number)[] => {
  const result: (string | number)[] = [];
  for (let i = 0; i < count; i++) {
    result.push(String.fromCharCode(97 + i)); //a,b,c
    result.push(i * 5); //0,5,10,...
  }
  return result;
};
const dynArray = createAltArray(15);
console.log("dymanic array tuple =", dynArray);
