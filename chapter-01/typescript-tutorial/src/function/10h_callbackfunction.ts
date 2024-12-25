/*
Penting sekali memahami callback function ini yg palig basic 
call back functuon itu apa ? 
nah adlah sbuah argument didalam sbuah functuin yg mana mmproses argument2 yg lain yg masuk 
di functuon tsb ,nah argument ini ( yg wujudnya fn) akan di invoke ketika dia 
ada di dalam functuon tsb utk proses argument2 yg lain yg tadi masuk sama2 
ddalam paramtheses si functon tsb 
nah speti ini :

nah sbaiknya dalam typescript kita buat dulu type alias utk argument functuon 
yg akan proses paramter2 atau argiument lain yg masuk  ,nah dia kan ( si fn ) ini akan 
menjadi argument tapi dia bertype functuon maka kita buat dulu typemya functuonya akayak apa 
kita buat type aLiasnya ! 
contoh :

type CallbackFN:(a:number,b:number)=>number

//nah kita buat function nama cb karena dia adalah fargument
//yg bertype functuon dgn rerturn number 
//nah isi cb adalah misalkan tambah2nya return a+b 
//nah kit abuat  
 cb:(a:number,b:number)=>a+b; 



const checkTrueFalse =(x:number,y:number,cb:CallbackFN):boolean => {
     //nah cb diatas kita masukan diasni dan kita invoke 
     return cb() > 10
}

nah sekarang kita jalanjan calback functuon checkTrueFalse diatas 
kita invoke dia masing speti di bawah ini :

let result =checkTrueFalse(12,-2,cb)
clg(result);
let result2 = checkTrueFalse(2,5,cb)
clg(result2)



*/

//kita terapkan teori diatas!

type CallbackFN = (a: number, b: number) => number;
//baut sbuah fucntuon cb dgn type CallbackFN sprti diatas
//yaitu ipout 2 nunber ,return number!
//logika didalam terserah tapi format sprti diatas masuk2 number,returnnya number
//kedepan trserah mau yg gimana logikanya utk type dan funct ya terganrtung project yg kit abuat!
const cb = (x: number, y: number) => x + y;

//buat callback functionya

const checkTrueFalse = (x: number, y: number, cb: CallbackFN): boolean => {
  return cb(x, y) > 10;
};

let result1 = checkTrueFalse(3, -2, cb);
console.log(result1);
console.log(checkTrueFalse(-10, -2, cb));
console.log(checkTrueFalse(7, 8, cb));
console.log(checkTrueFalse(1, -9, cb));
