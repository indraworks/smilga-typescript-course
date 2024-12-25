/*
nah kita ada banyk liat  type anotation 
dimana mis 
let a: number  ;
let c: string[];
nah sekarang gimana nihc kalau funcuton anotationnya ditulis 
kayak apa  ,tetap sama kita buat sbgai arrow functuon baik itu 
didepanya ada titk2  : ingat itu nah stlahnya  (x:number,y:number) => 
nah return utk retiurn function sbgai type dia ada di belakang arrow!! ingat itu!

contoh let a: (a:number,b:number)=> number = (z,y) { return z+y}

*/

let result: (a: number, b: number) => number = (x: number, y: number): number =>
  x + y;
//nah krna sudah anotatuon bisa kita tulis : let result: (a: number, b: number) => number = (x,y)=>x+y;
console.log(result(7, 8));
