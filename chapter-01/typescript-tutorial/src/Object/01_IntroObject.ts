/*
Object dalah data yg berisi sbuah property dan value/nilai
tiap property atau value atau nilai ditiap2 properti mempunyai type2
yg sudah ada sesuai dari TS,
dan  skumpulan data tadi kita sebut entitas  dan kita masukan 
atau dimasukan dalam variable 
jadi dalam typescript  smua adalah object selain dari primitive ( number,string,boolean)

 
*/
//object  dalam typescript bisa di buat type jadi dia adalah entity /type entitiy
//dimana merupakan collection gabunga dari type2 yg tersendiri  contonb

//buat tyoe alias
type Person = {
  name: string;
  age: number;
  isEmployeed: boolean;
};

//buat variable thd type tsb sekalian isi data type tsb/decclare
const mhs1: Person = {
  name: "Indra",
  age: 23,
  isEmployeed: true,
};
//cara akses:
console.log(mhs1.name, mhs1.age, mhs1["age"]);
mhs1.name;

//jika propertynya optional maka kasih tanda ? dibelakang property tsb
//pada typenya
//lainya bisa di tulis nnti disini :https://chatgpt.com/c/67692c80-1e1c-8005-b329-51d5fe95bde4
