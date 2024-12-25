/*
type any sebaiknya dihindary sebab ktika selesai buat atau 
mengasign dgn any kita tak bisa olah variable dgn method2 bawaan 
karena bingung ini methdonya pakia apa 
kalau misal kita assign fix dgn contoh string maka 
ketika kita "." akan muncul macam2 method misal variable.toUpperCase() 
nah kalau yg diatas utk any taka ada satupun bisa olah!

allowing you to opt-out of type-checking and let the values pass through compile-time checks. It means a variable declared with the any type 
can hold a value of any type. Later will also cover - "unknown" and "never"

kita harus hindari type any ini karena tadi gak ada referencenya utk buat method 
dari object atau variable yg yg sudah bertype any!

*/
let notSure: any = 4;
notSure = "Maybe string ,maybe Boolean uptoMe!";
notSure = false;
notSure = 234.543;
