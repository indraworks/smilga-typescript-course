//ini adalajh contoh mixed array bukan assertion tapi
//di asign dulu typenya didepan
//ini dibawah typescript dgn type anoation dimana di declare terlebih dahulu :

let temperatures: number[] = [20, 30, 31.6, 12];
//jika dikasih selain number types maka akan error
//temperatures.push('hello');

let colors: string[] = ["yellow", "orange", "red"];
//jika diberi selain string maka error
//cotnoh : colors.push(true) -->error sbb sudah declar hanya array string

//utk array gabaungan dideclare dulu (type1 | type2)[]
let mixedArray: (string | boolean | number)[];
mixedArray = ["hai", 201.889, false];
//mixedArray.push(null); akan error harus sesuai type yg dideclare
