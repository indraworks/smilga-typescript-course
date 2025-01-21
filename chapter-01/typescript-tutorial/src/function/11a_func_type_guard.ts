/*
jadi gini funct yg ada parameter kita bikin guard 
jadi bisa periksa type data yg masuk diparameter 
parm ini jika type datanya xx maka begini jika tidak maka begini 
sbb contoh:ngecek typeof parameter yg masuk itu bertype apa? 
 if(typeof input === "string")

*/

function proccessInput(input: string | number): void {
  if (typeof input === "number") {
    input = input * 2;
    console.log("angka = " + input);
  } else {
    console.log("Selamat pagi, " + input);
  }
}

//test
proccessInput(20);
proccessInput("hello Indra");
