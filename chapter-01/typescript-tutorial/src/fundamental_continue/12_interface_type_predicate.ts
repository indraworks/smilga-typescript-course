/*
jadi asal mulanya knapa kita buat type predicate base on dari soal sebelumnya pada 11_iterface_challenge2.ts 
kita tulis lagi programnya
*/

interface Person {
  name: string;
}

interface dogOwner extends Person {
  dogName: string;
}

interface Manager extends Person {
  // managePeople :()=>void; atau
  managePeople(): void;
  delegateTasks(): void;
}
function getEmployee(): Person | dogOwner | Manager {
  let random = Math.random();
  if (random < 0.33) {
    return { name: "jhon" };
  } else if (random < 0.66) {
    return { name: "Maria", dogName: "Timbul" };
  } else {
    return {
      name: "bob",
      managePeople() {
        console.log("Iam manage people!");
      },
      delegateTasks() {
        console.log("iam delegate tasks");
      },
    };
  }
}
//tugas create variable employee dimana bisa Person | dogOwner | Manager
// dimana assigne sebgai hasil dari return getEmployee function

const employee: Person | dogOwner | Manager = getEmployee();
console.log("result employee :", employee.name);
