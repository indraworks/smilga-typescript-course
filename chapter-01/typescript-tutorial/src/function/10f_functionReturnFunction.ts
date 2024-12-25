/*
disni kita buat functuon return functuin !
disni kalau kita invoke skali speti ini 
*/

const variableFn = (): number => {
  console.log("this is inside variableFn");
  return 5;
};
function regularFn() {
  console.log("inside regularFn!");
  return variableFn;
}
regularFn(); //kita invoke!
console.log("ini jika idinvoke 2x tapi ini tidak bileh ");
//regularFn()(); tidak boleh terus cara gimana !
//kita pakai alias !atau kita taruh trhis varaibale sbgai Anomyous functuon
const thirdFn = regularFn();
//nah juka kita invoke thirdRn maka otomatis = regularFn()()
console.log("this invoke dari thirdFn :");
thirdFn();

//jadi gini jiak dia rekursion functuon maka asal mula misalkan
const func1 = () => {
  console.log("inside func1");
  return () => console.log("ini func awal");
};
const func2 = () => {
  console.log("inside func2");
  return func1;
};
console.log("contoh di panggil 3x func2()()()");
func2()()();
/* hasilnya :
inside func2
inside func1
ini func awal

hal diatas buat confuse maka kita bias buat dng alias /atau anomyous func
kalau diatas gimana tulis anotationya ?? 

*/
//stlah titak 2 adalaj ()=>void sbuah type func void ,sblum sama dgn itulah typenya functuon!
const varFn: () => void = () => console.log("ini inside varFn()");

//arti ini :()=>()=>void ini artinya ini functuon yg kembali /return functuon yg void si farFn ( yg atas/pertama)!
const varFn2: () => () => void = () => {
  console.log("inside varFn2");
  return varFn;
};
//nah ini kita bisa sederhanakan dgn type alias cotnohya ini type alias
const x: string = "";
//kita bias buat speti ini
const typeFn: () => void = (): void => console.log("hello world");
//nah tapi kita bisa buat dgn cara type
//contoh type SimpleFuncton = string
//const string:SimpleFunctuon
//nah kita ganti skrg diatas utk type function yg atas kan tadi string coba kit a
//lakikan nah hal diatas disebut dgn type alias!
//atau type fn =()=>void
//yg paling utama harus dgn PascalCase nama typenya!

//chalenge :
/*
 buatlah  arrwo function main ada 2 argunemnt number (a dan b)
 didalam main return  an anomyous functuon  dimana (a dan b) brupa  return sum 
 buat nnti stlahnya type aliasis utk kedua tsb diatas 
 pertama buat manual dulu function2nya 
 jadi call main atau invoe 2 2nya jalan 

*/

const SumMainFn: (a: number, b: number) => number = (
  x: number,
  y: number
): number => x + y;

const MainFn: (a: number, b: number) => number = (
  x: number,
  y: number
): number => {
  return SumMainFn(x, y);
};
//cara menyelesaikan dgn memnuat type functuon alias !
type MainFunc = (a: number, b: number) => number;
//type AnomyFunc =(a:number,b:number)=> number; yg ini kita ubah jadi :
type AnomyFunc = MainFunc; //krn sama

//kita buat 2 type diatas sbgai type function utk variable
//main
const main: MainFunc = (a, b) => {
  const anomyFunc: AnomyFunc = (a, b) => a + b;
  return anomyFunc(a, b);
};

console.log("hasil main=", main(3, 2));
