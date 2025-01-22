/*
utk mengganti key dari sbuah variable kita bisa memakai 
compute properties yaitu penggunaan string di beri kotak
["nama_string"] = 'age' 

*/

//contih asli :
const PropName = "age";

//misal asal mula
let tiger = { age: 10 };
//nah kita bisa ganti key dari value utk property age dgn cara
//compute properties pakai string sprti ditas  menjadi
let tiger1 = { [PropName]: 13 };

//bisa juga utk object key properties

type Animal = {
  [PropName]: number;
};
let tiger3: Animal = {
  [PropName]: 8,
};
