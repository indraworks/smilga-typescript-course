/*
In TypeScript, a Union Type allows a variable to hold a value of multiple, distinct types, specified using the | operator. It can also be used to specify that 
a variable can hold one of several specific values. More examples are coming up.
jadi union itu sbuah variable bisa bertype lebih dari 1 dgn kasih tanda panga | 
satu biji saja  mirip or || tapi ini 1 biji  =| 
*/

//1) contoh varoable a bisa bernilai boolean atau number
let a: number | string = 234.854;
a = "hidayah dari Tuhan";
console.log("nilai a sekarang  =" + a);
//kita bisa mmbuat literal valua type  dimana
//typenya itu dibuat dari nilai string dan kita bisa pilih contoh :
//literal type

let requestStatus: "pending" | "pass" | "error" = "error";
console.log("nilai requestStatus  =", requestStatus);
//akan error jika diisi diluar litreral type yg dideclrasikan
//requestStatus = "random"; kluar warning error not assignable with value random
