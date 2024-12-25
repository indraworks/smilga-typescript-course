/*
jadi intinya kalay mau buat type Object atau collection 
atau array diamna slain data primitve,atau kkumpulan collection ( dari primitive number,)
type alais contoh:
type User = {
   name:string;
   age:number;
   email:string;


}
nah utk yg kita misal nntinya type User nnti dimasukan 
sbgai variable /diapakai oleh variable ,dan misal 
ada yg gak smua disi maka kita bisa pakai tanda ? sbgai optional 
contoh :
type User = {
   name:string;
   age:number;
   email:string;
   phoneNumber?:string
}

utk deletge gimana nah utk bisa delete property dari type Object
yg bosa adalah property yANG MEMILIKI tanda ? atau optional ! 
contoh 2 dibawah ini sbgai implement dari yg dibahas(teori)
*/

type User = {
  name: string;
  age: number;
  phone?: string;
  isEmployee: boolean;
};

const mhs1: User = {
  name: "ANdri",
  age: 23,
  phone: "12345",
  isEmployee: true,
};

console.log(mhs1); //masih ada phone
let mhs2 = delete mhs1.phone;
console.log(mhs2);
console.log(mhs1); //sudah hilang dia

//cara dgn destruct
mhs1.age = 52; //update property age
console.log(mhs1);
