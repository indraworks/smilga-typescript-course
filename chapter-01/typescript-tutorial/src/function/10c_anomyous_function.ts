/*
nah apap itu anomyous funcutin itu yg kita bahas disini 
dan nntinya dari sini kita bisa timbulkan apa yg disebut dengsn arrow function 


*/

//kita buat function x
//ini function biasa
function x() {
  console.log(" iam in X");
}

//dibawah kita invoke
x();

//nah ug ini disebut anomyous functun
//dimana ada variable ada function tanpa nama/headernya
//dimana bertyppe void  trus yg variabkle tadi mis z dibawah kita invoke

let z = function (): void {
  console.log("I'am in Z");
};
z(); //kita invoke z nah z inilah kita sebut anomyous function
//nah nnti inilah si anomyous functuon ini lah yg akan jadi arrow function nntinta
