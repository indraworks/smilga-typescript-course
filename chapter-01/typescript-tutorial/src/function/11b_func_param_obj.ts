/*
bagaiman jika param tsb merupakan obj jadi scara 
utk ts maka harus ada anotation 
tapi kalau dia dari bagian anotation bisa kita buat dgn type alias dulu objectnya 
mis  object utk Student 
 {
   
 }

 kita buat type alias :
 type Student = {
    id:number,
    name:string;
    age:number;
 }
baru stlahnya di,asukan ke [aram di function ]

*/

type Students = {
  id: number;
  name: string;
};

//utk kemblaina berupa object tapi ada yg lain trserah kit aakalin logikanya
//kit aturut aja gak masalah !
function createStudent({ id, name }: Students): {
  id: number;
  name: string;
  isActive: boolean;
} {
  return {
    id,
    name,
    isActive: id % 2 == 0,
  };
}
const firstStudent = createStudent({ id: 1, name: "Subhan" });
const ndStudent = createStudent({ id: 23, name: "indra" });
console.log(
  "firstStudent =" +
    firstStudent.name.toUpperCase() +
    ";" +
    firstStudent.isActive
);
console.log(
  "ndStudent =" + ndStudent.name.toUpperCase() + " " + ndStudent.isActive
);

//cara alternative
type MyStudents = {
  id: number;
  name: string;
};

function createStudents(student: MyStudents): void {
  console.log(`welcome to the course : ${student.name.toUpperCase()}!`);
}

const newStudent1 = {
  id: 123,
  name: "bujang lapuk",
};
createStudents(newStudent1);
