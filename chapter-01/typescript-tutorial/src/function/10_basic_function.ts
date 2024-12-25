/*
yg paling penting dalam function adalah 
param yg masuk di dalam parantehese( tanda kurung) dlm 
suatu function harus di berikan typenya  demikian juga kembalian  stlah tutup kurung ,
jika function tsb ada kembaliannya mis  
functuon(param:type_param):type_return {

   return type_return;
}
YANG Paing tidak boleh kita pakai any ini sama aja bohong krn tak bisa type nnti di proses 
dgn builtin functuin2 ddaialnya !
jika tidak ada kembalian maka kita taruh void dibelakang parantheses(kurung) 


*/
//contoh 1 //kita pakai guard undefined mengapa?
//jawab :

function subtractNumbers(a: number, b: number): number | undefined {
  return a - b;
}

const z = subtractNumbers(2, 3);
console.log(z);

//kita juga mmbuat sbuah close guard utk pilihahn if jadi jika true kita return
//jadi dalam functuon hindari if then else ,jadicuku if ( true) return  yg false dibawahnya
//contoh :
function subtractNumbers2(a: number, b: number): number | undefined {
  if (a < b || a <= 0 || b <= 0) {
    return;
  }
  return a - b;
}

//kita juga akan buat close guard utk type dari param/argument yg masuj
//jdi jika smuanya adalah number kita harus kasih tahu didalam lkalang
//jika tidak typenya bukan number maka return imedialtly
//functuon kita contoh
//if (typeof a !== "number" || typeof b !== "number" ) return

function subtractNumbers3(a: number, b: number): number | undefined {
  if (typeof a !== "number" || typeof b !== "number") return;
  if (a < b || a <= 0 || b <= 0) {
    return;
  }
  return a - b;
}

console.log("hasil subtract 1 :", subtractNumbers3(3, -4));
console.log("hasil subtract 2 :", subtractNumbers3(-8, -4));
console.log("hasil subtract 3 :", subtractNumbers3(2, 5));
console.log("hasil subtract 4 :", subtractNumbers3(17, 10));
