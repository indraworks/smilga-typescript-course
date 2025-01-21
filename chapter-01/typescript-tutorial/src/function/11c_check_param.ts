/*
meneruskan yg tadi misalkan type anotation 
dibawahkan utk param student adalah object dimana 
kontraknya object inihanya ada 2 element dari objec yaitu 
id ,name nah misal kita mau masukan object dimana 
element ada 400 melebihi dari yg ada di param pada func tsb 
maka otomatis si typescript check kok ini yg masuk lebih dari param 
yg tersedia maka dia error kasih warning! 




*/

//cara alternative

function createStudents(student: { id: number; name: string }): void {
  console.log(`welcome to the course : ${student.name.toUpperCase()}!`);
}

const newStudent1 = {
  id: 123,
  name: "bujang lapuk",
};
//contoh object ada 3 param mis include emal
const newStudent2 = {
  id: 34,
  name: "janda bahenol",
  email: "jenol@gmail.com",
};
createStudents(newStudent1);
createStudents(newStudent2); //yg email diabaikan karena dia datang dgn sbuah variable langusng
//tidak hardcode
//nah jika kita hardcode tambahkan onbject lansiung pada param maka dia akan error
//email dotolak contoh :

//createStudents({id:1,name:"eek",email:"eek@gmail.com"})
//ini ditolak karena kita masukan dgn hardcode  tidak sperti newstuden2
//yg mana email diabaikan!
