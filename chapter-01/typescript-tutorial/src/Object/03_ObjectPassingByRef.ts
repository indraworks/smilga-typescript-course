/*
buat lah func yg mana func tsb update hanya property age pada 
object yg berisi Person :{name:string,age:number,email:string}
ada arguemnt yg nnti update func tsb 
*/
type Person = {
  name: string;
  age: number;
  email: string;
};
type FnUpdate = (x: number, y: Person) => Person;

const mhs1: Person = {
  name: "Indra",
  age: 23,
  email: "indra@gmail.com",
};

//buat BENTUK logika dari functionya dan masukan ke variable myFn !
const myFn: FnUpdate = (x: number, mhs1: Person) => {
  mhs1.age = x; //ini dilarang dilakukan langsung cara langsung
  //ini sama artiny amasukan reference
  return mhs1;
};
//invoke myFn masukan angka2 dan object!
myFn(9, mhs1);
console.log(myFn(9, mhs1));

//cara asertion
function UpdateUmur(u: number, mhs1: Person) {
  mhs1.age = u; //ini dilarang dilakukan langsung cara langsung
  //ini sama artiny amasukan reference
  return mhs1;
}

//cara nambah pakai spread
function UpdateUmur2(u: number, mhs1: Person) {
  //mhs1.age = u; //ini dilarang dilakukan langsung cara langsung
  //ini sama artiny amasukan reference
  //nah kalau OBJECT sayaratnya harus buart objec baru kalau mau spread
  //di expadn sreadnya di haruskan copy di objec baru gak bisa langusng
  //itu yg di kembalikan !!! age aja langsung ditulis gak perulu mhs1.age
  //krn anggota obj tadi dgn ...mhs1 udah kspread misah2
  //tinggal kita update !
  const objReturn = { ...mhs1, age: u };
  return objReturn;
}

console.log(UpdateUmur2(81, mhs1));
/*

KONSEP DIPEGANG! 
The error occurs because the syntax {...mhs1.age:u} is not valid JavaScript/TypeScript. 
The spread operator (...) works with objects and arrays, not with single properties like mhs1.age. 
Let me explain why this happens and how to fix it.

Understanding the Issue
The spread operator creates a new object or array by copying properties or elements from an existing one. 
In your example, you seem to want to update the age property of mhs1 immutably.
 However, the syntax {...mhs1.age: u} is invalid because:

You cannot use the spread operator directly on a single property.
The correct syntax for updating an object using spread is {...mhs1, key: value}.
Correct Solution
To update the age property immutably using the spread operator, 
"create a new object and update age as part of that object.""

di 04_practice_spread biar pahaam!



*/
/*
kesalahan terjadi karena sintaksis {...mhs1.age:u} bukan JavaScript/TypeScript yang valid. 
Operator penyebaran (...) bekerja dengan objek dan array, bukan dengan properti tunggal seperti mhs1.age. 
Izinkan saya menjelaskan mengapa ini terjadi dan bagaimana cara memperbaikinya.

Memahami Masalahnya
Operator penyebaran membuat objek atau larik baru dengan menyalin properti 
atau elemen dari properti atau elemen yang sudah ada. 
Dalam contoh Anda, Anda sepertinya ingin memperbarui properti age mhs1 secara permanen.
 Namun, sintaksis {...mhs1.age: u} tidak valid karena:

Anda tidak dapat menggunakan operator spread secara langsung pada satu properti.
Sintaks yang benar untuk memperbarui objek menggunakan spread adalah {...mhs1, key: value}.
NAHT TAPINYA HARUS DI MASUKAN KE OBJECT YG BARU const objNew = {...nhs1,key:value} GAK BISA LANGSUNG KRN DIA IMUTABLE!
Solusi yang Benar
Untuk memperbarui properti age secara permanen menggunakan operator spread, 
"buat objek baru dan perbarui usia sebagai bagian dari objek itu.""!!!



*/
