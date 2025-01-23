/*
jadi asal mulanya knapa kita buat type predicate base on dari soal sebelumnya pada 11_iterface_challenge2.ts 
kita tulis lagi programnya
jadi gini kita mau check specific interface jika itu  adalah manager
dan kita akan invoke delegateTask atau manage People jika dari getEmployee itu 
adalah dari type object Manager gimana caranya ?? 
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
//dari atas dsinggung kita mau cari tahu onj dari type/interface  Manager
//sehingga kita bisa invoke delegatgeTask dan ManagePeople ( method dalam interface Manager)
const employee: Person | dogOwner | Manager = getEmployee();
//console.log("result employee :", employee.name);
//console.log("result employee  delegate Task:", employee.delegateTask );
//nah ini gak nisa merah waktu kita mau invoke jadi mesti cari tahu dulu /peridct
//kita masih ingat dulu kalau check dng cara typeOf utk masihg2 type obj nah kembalian type object ini
//bernilai true atau false?
//kita buat utk chek nama function isManager
function isManager(obj: Person | dogOwner | Manager): boolean {
  //return typeof obj === "boolean"; note ini ttidak akan bekerja
  //kita harus liat method atau properti yg ada didalam obj yg dikembalikan
  //cara: return 'managePeople in obj
  return "managePeople" in obj;
  //jadi cara utk check apakah ada property dalam obj(interface) kembalian /retur apa ada
  //jadi apa ada property /method managePeople didalam obj (Person | dogOwner | Manager)
  //cara check return 'peropertyName | methodName in obj
  //jadi obj yg kembali adalah mis Manager nah dalam manager ada method 'managePeople'
}

console.log(isManager(employee));
//nah jika ada yg benar kita cara checknya supaya bisa invoke adalah
//jika bernilai true diatas  artinya return "managePeople" in obj; yaitu ada propery managePeople/method Manage people dalam obj Person
//maka kita bisa invoke method tsb ! sbb:

// if(isManager(employee)) {
//  // employee.delegateTask() ini masih merah maka kita harus tahu kenapa??
// }

//jadi diantara 3 ini  Person | dogOwner | Manager kita ingin yg balik adalah obj Manager saja
function isManager2(obj: Person | dogOwner | Manager): obj is Manager {
  //sehingga akan selalu bernilai true karena kita check property yg ada di interface Manager
  //yaitu method managePople atau delegateTask
  return "managePeople" in obj;
}

//sehingga sekarang kita buat validasi checknya sbb:
//jadi sekarang kita bisa invoke itu method pada manager karena kita sudah
//dapat nilai true dari param employee yg kita masukan !
if (isManager2(employee)) {
  console.log(employee.managePeople());
}
if (isManager2(employee)) {
  console.log(employee.delegateTasks());
}
