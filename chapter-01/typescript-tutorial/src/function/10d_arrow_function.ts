/*
nah utk arrou fucntion tadi  berasal dari anomyous 
kit ilangin ata functuon trus kita ganti dgn tanda panah 
nah utk yg baili atau tidak maka sblum tanda 
panah kita beri :void => 
atau jika return kita beri type return mis :string => 
nah sbb explain 
utk arguemnt asama srti sblumnya pada anomyous fucntuon 

*/
//ini salah jgn tulis return ! stlah arrow !
//const arrowFn = (a:number,b:number):number => return 5;
function Z(a: number, b: number): number {
  return a * a + b * b;
}

const arrowFn = (a: number, b: number): number => a * b + 5;
const arrowFn1 = (a: number, b: number): number => Z(a, b);
//utk return gak perlu diberi rreturn stlah arraw !
//bisa itu berupa operasi aritmetik atau sbuah invoke functiuon dari tempat lain
//contoh  => z()
//kita invoke diatas
let result1 = arrowFn(3.6, 9);
let result2 = arrowFn1(2, 5.5);
console.log("result1 =", result1);
console.log("result2 =", result2);
