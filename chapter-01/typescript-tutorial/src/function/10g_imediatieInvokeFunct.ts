//ImediateInvokeFUnction

//const myFn :(()=>string) = (()=>"hellow world")()
//tidak bis asperti diatas maka kita buat dulu sperate dgn type alias kalau
//kalau kita mau buat type anottaion!
type MyFunc = () => string; //jadi kalau mau jadi anotation harus dibuat type dulu !!!!
//kalau langsung sampai mencret tak bisa contoh :
//const myIIEF1:()=>string= ()=>"hello kadal"
const myIIEF2: MyFunc = () => "hello world!"; //nah baru bisa !
myIIEF2();

//pati di IFFE itu paling mudah buat dgn ASSERTION Type !!
const anomyous_biasa = (str1: string, str2: string): string => {
  return `${str1} ${str2}`;
};
console.log(anomyous_biasa("hari", "jumat")); //ini functuon biasa kita invoke !
//nah kalau mau jadi biasa IIEF maka lanfsung aseertion sbb
//dan diatas tinggal dikasih kurung sorti ini dari luar sekalian invoke!
//yaitu : (isifuncawal)()
//(anomyous_biasa)("sabtu ","minggu")
anomyous_biasa("indra", "lesmana");

//IFFE langsung :
(() => console.log("kemana aja"))();
