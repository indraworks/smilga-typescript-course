/*
kita sekarang praketek spread kapan spread digunakan  :



*/
//updatig array
/*
Suppose you have an array of numbers and want 
to add a new number without modifying the original array.
(akan selalu sama yg di modify itu copyannya yg asli data tetap sama 
itu yg dibalikun )
*/ const numbers = [1, 2, 3];
//adding a new number imutablu
//aka slalu sama kalau tambah masukin ke variable naru sbgai copy  dan tambah baru sbb:!!!
const updateNumbers = [...numbers, 4];
console.log("numbers =", numbers);
console.log("updateNumbers = ", updateNumbers);
/*
catatan utk code diatas :
How It Works
1)[...numbers] creates a copy of the numbers array.
2) 4 is added to the end of the new array. 

*/
/*
2 . Removin item dari suatu array ,ini sama yg kit agunakan filter dan hasilnya 
di taruh di object yg baru !
*/
const murid = ["indra", "luna", "haura", "mendem", "dillar"];
const updateMurid = murid.filter((n) => n !== "indra");
console.log("murid asli =", murid);
console.log("udapte Murid ", updateMurid);

/*
cara update dgn nested Object dgn spraed operator 
cara sama tapi nnti 2x , jadi 
pertama dgn shallow copy sama ini 1) [ ...obj1] 2) field:[...obj2,fieldUpdate: nilai] 
nah ketiak update nnti sama 2 2 object yg shawlo ( copy tingkat pertama,
dan copy tingkat 2 sama2 di pakai  )
jelasnya contoh dibawha ini !:
*/
