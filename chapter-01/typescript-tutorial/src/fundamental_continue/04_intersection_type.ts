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
