/*
jadi ada 2 kalau param di functuon 
mis paramdiberi tanda ? maka dia bisa jadi sbgai default pdaram 
gak wajib kita isi tetapi kita harus gainti nnti di excute variablenya dgn 
tanda || 0 atau || angka lain.




*/
function calculatePrice(price: number, discount?: number): number {
  return price - (discount || 0);
}
let priceAfterDiscount = calculatePrice(220, 15);
console.log("price after discount: ", priceAfterDiscount);

priceAfterDiscount = calculatePrice(230);
console.log("price asli tanpa disc =", priceAfterDiscount);

//kita bisa juga kasih angka default pada parameter shingga tidak perlu ditulis
//atau dimasukan paramnya
function calculateScore(
  initialValue: number,
  penaltyPoint: number = 10
): number {
  return initialValue - penaltyPoint;
}

let valueScore = calculateScore(200); //jika gak dimasukan angka penalty gak error
//karena ada default
console.log("valueScore =", valueScore);
valueScore = calculateScore(200, 17);
console.log("update value score =", valueScore);
