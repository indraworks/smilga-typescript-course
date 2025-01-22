/*
jadi gini jika misalkan ada element dari sbuah type 
kmudian element tsb tidak sama dgn yg lain alias baru maka kita harus buat 
type utk element tsb dan kmudian kita akan gunakan tanda && utk tanda "dan" 
bersama utk type yg baru sehingga elemetn tsb bisa diterima 
kita akmbil contoh dinbawah ini ada 
type Book berupa object {id.name,peice} 
Book1 dan Book2 sama punya 3 element tsb 
nah bookDiscount ada tambahan element yaoti {id,name,price,discount}
nah ini pasti ditolak karna type Boojk tidak ada element discoubt 
utk itu kita buat type duscoubt = {disPrice:number} 
nah stlahnya utk variablenya akan menjadi 
const bookDisc = Book & discBook = {id,name,price,disPrice}
sbb utk lengkap contonya
*/

type Book = {
  id: number;
  name: string;
  price: number;
};

const Book1: Book = {
  id: 1,
  name: "HyperCooder",
  price: 25,
};

const Book2: Book = {
  id: 2,
  name: "captain marvel 2",
  price: 37,
};

//nah skrng ada discoubtBook dgn element object discPrice
//ini akan buat jadi error krn di type Book tak ada element object discPricenya
//sbb ini error :
// const discountBook:Book = {
//     id:93,
//     name:"Kamasutra ver 2",
//     price:161,
// discountPrice:20 ini error merah

// }
//nah cara atasi diatas kita akan buat  typeDiscBook
type DiscBook = { discountPrice: number };

//nah stlahnya kita buat utk taid variable yg ada Element discount
//kita gabung dgn typeBook krn typeBook sudah wakili {id,name,price}
//dan utk type DiscBook mewakili element yg baru {discountPrice}
//jadi cara penulisan variable utk discountBook dgb intersection
//yaitu gabungan antara type Book dan DiscBook cara tulis snbb

const DiscountBook1: Book & DiscBook = {
  id: 24,
  name: "Kamasutra ultimate",
  price: 121,
  discountPrice: 34,
};

console.log(DiscountBook1);
