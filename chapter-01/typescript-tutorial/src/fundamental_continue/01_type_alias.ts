/*
jadi dibawah ini sebelum ada type alias jika kita mmbuat type anotation dari sbuah object 
dimana onject ada element 3 -4 element dan lebih tulis sprti ini trus contoh 
  //dibawha ini const indra:typeAnotation = isiValue dari kontrak type anotationya ! sbb: 

const indra:{id:number;name:string;isActive:boolean} = {
  id:1,
  name:'indra',
  isActive:true
}
const Susan: {{id:number;name:string;isActive:boolean} = {
    id:23,
  name:'Susan',
  isActive:false //sudah alumni

}
jadi terus aja diketika tanda kurung dan elementnya hal ini tak efective karena jharus tulis ulang2 trus dgn hal ygsama 
utk itu typescriot punya type alias jadi mis diatas tanda kurung dan elemet2 ddalamnya kita beri type nama sbb
type User= {
   id:number;
   name:string;
   isActive:boolean
}
nah kita implementkan jadi :
const indra:User = {
   id:1,
   name:'indra',
   isActive:true
}
jadi ktika kita buat functoon yg kontraknya sama param bertype object diatas 
dan kita sudah ganti dgn type alias kita udah gak capek ketik element sbganyak tsb dan ulang2 trus hal yg sama! 
sbb :
*/

//type elias
type User = {
  id: number;
  name: string;
  isActive: boolean;
};

const jhon: User = {
  id: 1,
  name: "Jhon",
  isActive: true,
};

const lisa: User = {
  id: 13,
  name: "Lisa",
  isActive: false,
};

//buat functuon dgn param mekai type alias tidak ketika object dan elementya
function createUser(user: User): User {
  console.log(` hello there : id: ${user.id} name:${user.name} `);
  return user;
}

const user1 = createUser(jhon);
console.log(user1);
