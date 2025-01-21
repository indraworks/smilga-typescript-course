/*
jadi jika kita masukan param banyak angka maka 
kita anggap yg masuk itu adalah sbuah bilangan array 
nah kita kenal dgn parameter rest bentuknya ...param "type_data"
yg ada di input masukan pada function 
misalkan  dibawah ini contoh kita mau hitung jumlah /sum deret angka2 


*/
// bntuk ... adalah perwakilan dari number yg masuk mis 1.3.5.7.8 ...dianggap  deret
// array
function sum(message: string, ...numbers: number[]): string {
  //yg petmama buat gak return
  const doubled = numbers.map((num) => num * 2);
  console.log("hasil doubled =" + doubled);
  let total = numbers.reduce((previous, current) => {
    return previous + current;
  }, 0); //angka nol adalah awal sblum tambahan

  return `${message} ,${total}`;
}

//kita invoke
let result = sum("hasil total dari sum array  :", 1, 2, 3, 4, 5);
console.log("total result =", result);
