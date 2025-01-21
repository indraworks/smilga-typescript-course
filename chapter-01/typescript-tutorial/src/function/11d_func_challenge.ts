/*
chalenge : 
buat funct name processData ,accep 2 param 
param 1: input:string | number 
param 2: config:{reverse:boolean} dan defaultnya adalah false 
jadi reverse = false kita tulis {reverse:false}
utk return :
jika input number maka return number*2;
jika input string return harus string dgn uppercase 
jika input string dan reverse yg masuk true maka return func adalah reverse dgn huruf uppercase 


*/
//ini salah
// function processData(input:string| number,config:{reverse:boolean }={reverse:false}) {
//    if(typeof input === "number" ) {
//     return input *2;
//    } else if (typeof input === "string") {
//     return input.toUpperCase()
//    } else if ( typeof input === "string" && config.reverse === true) {
//     return ` ${config.reverse}`
//    }
// }

//yg benar

function processData(
  input: string | number,
  config: { reverse: boolean } = { reverse: false }
): string | number {
  if (typeof input === "number") {
    return input * input;
  } else {
    return config.reverse
      ? input.toUpperCase().split("").reverse().join("")
      : input.toUpperCase();
  }
}

console.log(processData(12)); //input * input  = 144

console.log(processData("Hello", { reverse: true })); //jika true tulisan hello -->olleh
console.log("yg dibawah ini reverse false: ");
console.log(processData("Hello")); //reverse false
