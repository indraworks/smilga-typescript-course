/*
tutorial 1anotation type 
ini adalah kita declarae typenya dan kita isi setelah declare kita sudah tak bisa laig 
kasih nilai2 yg dilain type kita (stric)

*/
let awesomeName: string = "shame on me";
awesomeName = awesomeName.toUpperCase();
console.log(awesomeName);
//akan error jika  awesomeSome = 20;
let amount: number = 12;
amount += 3;
console.log(amount);
//akan error jika amount = "pakaian';

let result: boolean = true;
//akan error jika result = 'hasil';
console.log(result);
