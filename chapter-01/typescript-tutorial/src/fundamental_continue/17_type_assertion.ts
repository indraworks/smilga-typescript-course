/*
english:
Type assertion in TypeScript is a way to tell the compiler what the type of
an existing variable is. This is especially useful
when you know more about the type of a variable than TypeScript does.


indon:pernyataan tipe dalam TypeScript adalah cara untuk memberi tahu kompiler apa tipenya
variabel yang ada adalah. Ini sangat berguna
ketika Anda mengetahui lebih banyak tentang tipe variabel dibandingkan TypeScript.

intinya dengan type assertion kita bisa ubah sbuah type yg sudah exist dgn yg kita buat sbgah  "as" type baru 
contoh2 dibawah menynjukanya ,dan type asertion kit aini sudah bisa jug atulis n"NILAINYA dulu
 tanpa harus declare typenya!(diawal)

*/

let someValue: any = "this is string!";

//kita ubah jadi sbuah integer dgn cara as
let strLength: number = (someValue as string).length;
console.log("panjang character = ", strLength);

//kita asusmikan kita punya JSON string dari API atau dari local file
//// Assume we have a JSON string from an API or local file
//sbb:

type Bird = {
  name: string;
};

let birdString = '{"name":"eagle"}'; //ini kurung kurawal harus ada petik krn string /BUKAN OBJ
let dogString = '{"name":"pitbull"}'; ////ini kurung kurawal harus ada petik krn string /BUKAN OBJ

//kita parse JSON diatas menjadi objec parse adalah string -->obj
//kalau stringify kebalikan dari obj-->string(json)
let birdObj = JSON.parse(birdString);
let dogObj = JSON.parse(dogString);
console.log("birdObj =", birdObj);
console.log("dogObj = ", dogObj);

// We're sure that the jsonObject is actually a Bird (type)
//kita yakin bahwa jsonObject diaras adalah bertype Bird
//sbb:
let bird = birdObj as Bird;
let dog = dogObj as Bird;

console.log("bird =", bird);
console.log("dog =", dog);
/*contih enum dibawah ini adalah string enum dan user element dari User { status:Status} 
nah kita punya statusValue = "pending" 
jadi kita mau isi di bagian status pada element pada saat declare variable tidak sprti ini 
{status:"pending"} 
tapi bisa langsung assertion arahkan sbgai bagian dari enum Status yg bernilai pending cara :
{status: statusValue as Status} otomatis itu adalah "pending" 
sbb:
*/
enum Status {
  Pending = "pending",
  Decline = "decline",
}
//type alias
type User = {
  name: string;
  status: Status;
};

//declare dgn assertion
const statusValue = "pending";

const user: User = { name: "paket TIKI", status: statusValue as Status };
console.log("user = ", user);
