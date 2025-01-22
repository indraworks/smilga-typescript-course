/*
kita bicara tentang interface ini mirip dgn type alias hampir sama 
yaotu shape of object jadi si object ini elementnya diatur 
lebih tepatnya abstrak jadi 
nnti kalau buat variable akan ikut apa yg ada di dalam eleent interface 
misalkan dalam element ada yg read-only propertynya 
atay ada yg optional tanda ? 
jadi ini mirip dgn type alias pilhan terfantung pada kita mana yg suka 
pakai type alias atau inerface ?

*/

interface Book {
  readonly isbn: number;
  title: string;
  author: string;
  genre?: string;
}

const deepWork: Book = {
  isbn: 123,
  title: "deep work",
  author: "cal newport",
  //,genre:'action' //mis genre gak ditulis masij ok karena optiona;
};

//yg ini error jika kita ubah krn di interface element isbn readonly
//deepWork.isbn = 224 //ini error tak bisa diubah!
