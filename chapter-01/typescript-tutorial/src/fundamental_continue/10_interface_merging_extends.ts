/*
di interface kita bisa mergin 
jadi ada interfa A {x,y} nah ada tulis interface sama  tapi element beda interface A {z,u,y} 
nah ini nnti otomatis merging itu cara kita tulis jadi tulis nama interface sama tapi element object didalam beda
nah pas nnti buat variable constanta itu element smua gabung 
mis const myvar:A = {x,y,z,u,y} 

ada lagi extends inerface maksudnya gimana 
jadi kalau ada interface X {a,b,c} dan ada interface baru sbut interface Y ,
nah interface Y extends X  { j,k} maka otomatis interface Y skrg mewarisi sluruh element 
property dan method dari interface X dan juga didalamya yg dia declare saat ini {j,k} 
jadi waktu bikin variable sbut myNew maka :
const myNew:

*/

interface Person {
  name: string;
  getDetails(): string;
}

interface DogOwner {
  dogName: string;
  getDogDetails(): string;
}

const person: Person = {
  name: "indra",
  age: 27,
  getDetails: () => {
    //ingat kalau pakai arrow gak bisa pake this.name
    return `Name: ${person.name} and age: ${person.age}`;
  },
  //kita tambah krn dibawah merge adid:${this.EmployeeId}a Person element
};
//sekarang kita merge
interface Person {
  //otomatis diatas person variable berwarna merah
  //maka kita harus isi juga element sesuai
  //dgn sahpe of object dari Person yg udah tambag
  //ele,ent age
  age: number;
}
console.log(person.getDetails());

/*
sekarang sprti teoru utk extend maka sbuah interface X extend Y(iterface) maka dia akan 
warisi smua properti yg ada dari interface Y dan juga dia memiliki properti dan method 
yg mana nnti smua dari iterface Y dan X ( method dan propertinya ) smuanya harus 
sekarang dibawah kita buat interface Employee element/properti {employeeId:number} dgn extends Person
jadi otomatis jika nnti declare variable yg bertype interface Empouyee maka otomatts 
porperti dari Person wajib di masukan krn dia sudah jadi warisan/inhered ke property InterfaceEmployee!
*/

interface Employee extends Person {
  EmployeeId: number;
}

const employee1: Employee = {
  EmployeeId: 123,
  name: "mulyono",
  age: 51,
  getDetails() {
    return ` info employee: name:${this.name} umur:${this.age} id:${this.EmployeeId}`;
  },
};
console.log("employee1 detail ", employee1.getDetails());

//sama utk manager extend Person dan DogOwner maka smua yg ada pada (propertinya) Person dan DOgOwner
//akan dimiliki oleh interface Manager utk itu waktu declare maka properti smua wartisan tadi wajib ditulis!
//sbb:

interface Manager extends Person, DogOwner {
  managePeople(): void;
}

const manager1: Manager = {
  name: "Bon Jovi",
  age: 40,
  dogName: "Mulyono",
  getDetails() {
    return ` info Manager name:${this.name} umur:${this.age} `;
  },
  getDogDetails() {
    return `this dog name : ${this.dogName} belong to ${this.name}`;
  },
  managePeople() {
    console.log("manage 100 peoples in his office!");
  },
};

console.log(manager1.getDetails());
console.log(manager1.getDogDetails());
console.log(manager1.managePeople());
