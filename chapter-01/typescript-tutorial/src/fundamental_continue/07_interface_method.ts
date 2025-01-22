/*
jadi diinterface ada yg elementnya merupakan sebiah functuon atau method 
nah diinterface PENTING DIKETAHUI yg diketik ditulis adalah HEADER ATAU 
BLUE PRINT DARI METHOD iTU ISI ATAU LOGICNYA BARU DITULIS STLAH 
KITA BUAT VARIABLE YG BERTYPE DARI INTERFACE TSB!!!
contoh dibawha ini PrintAuthor():void 
//nah utk void berarti waktu declare variabke dan utk tulis logic dair PrintAuthort
dia tak ada kembalian 

nah gimana jika ada method ada paramternya sama gak masalah!
yg jelas utk param pas ditulis di delare wajty declare variable 
itu param gak mesti sama yg penting type paramnya harus match dgn yg ada di interface!
contoh :
printTitle(message):string 
nah mis nnti waktu declare variable dgn typeinterface tsb 
maka bisa sprti ini param bisa beda gak msalah 
printTitle(value:string):string {
   return `${this.title} ${value}`
}}

ok kita tulus dibawah utk implementasi contoh method di interface 
ingat yg dituis hanya header /blue orintya isi logic nnti waktu  ada declare variabel
yg bertype interface ini!
*/

interface Book {
  readonly isbn: number;
  title: string;
  author: string;
  genre?: string;
  //method
  printAuthor(): void;
  printTitle(message: string): string;
}

//implementarsi
const deepWork: Book = {
  isbn: 655,
  title: "deep work",
  author: "indra Surya",
  genre: "action",
  printAuthor() {
    console.log(this.author);
  },
  printTitle(message) {
    return ` ${this.title} ${message}`;
  },
};
deepWork.printAuthor();
const result = deepWork.printTitle("this awesome book!");
console.log(result);
