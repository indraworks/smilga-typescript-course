/*
jadi jika nnti ada element method arrow/panah  dalam sbuah interface 
mis 
renameObject:() => string 
tanda panah itu artinya return 


*/
interface Book {
  readonly isbn: number;
  title: string;
  author: string;
  genre?: string;
  //method
  printAuthor: () => void; //ini artinya tak ada kembalian
  printTitle: (message: string) => string; //ini aetinya ada rweturn string kembalian
  printSomething: (someValue: number) => number;
}

/*
   nah alternatif utk tangani atau buat logic nya pada saaat declare variable 
   utk logic method arrow maka SUDAH TIDAK ADA THIS yg di PAKAI kepala 
   dari atau nama kepala iterface utk ambil object element di dalamnya '
   jadi jiuka ada param yg nnti pakai element tak bisa oakai 
   this.title maka dia harus tunjuk Book.title  jika method pakai arrow 
   sbb:

  */

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
  //alternatif 1 utk kita buat logic printSomething  dari arrow functuon
  //dimana dia sbgai variable functuon yg nnti di invoke
  // printSomething:  (someValue) =>{
  //     return someValue;
  // }
  //alternatif 2 utk kita buat locinya
  //langusng ketika function() {dan logic didalamnya }

  // printSomething:function(someValue) {
  //     return someValue;
  // }

  //alternative 3 langusng buat function tanpa variable invoke sprti diatas
  printSomething(someValue) {
    return someValue;
  },
};

//alternatif 3 utk buat logicnya
