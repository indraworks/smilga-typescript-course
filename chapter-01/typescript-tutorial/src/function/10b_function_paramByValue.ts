/*
ingat param atau argument dalam paratheses itu hanya nama 
senbarang nama yg mwwakili variable yg masuj disitu 
jadi hanya ikon saja sebarang asal type yg masuk sama!
contoh dibawah ini itu arguemnt param  = y lha yg masuk darivariable x gak ada masalah 
itu y tadi penampung variable! menyediakan di memori stack 
y[] <---dsisi sama nilai x tadi! otu maksundnya lebih jelasnya dibawah 
*/

const x = 5;

function modifyNumber(y: number): void {
  y += 10;
  console.log(`hasil stlah dimasukan x = ${y}`);
}
//diatas itu artinya bahwa angka yg masuk diparam akan di tambah 10!
modifyNumber(x);
