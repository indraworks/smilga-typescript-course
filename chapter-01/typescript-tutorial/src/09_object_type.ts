/*
object type di ts sangat buat bingung akhirnya paham 
terutama jika kita pakai anotation /didclear dari wawal 
intinya type object itu sprti ini  ada 
ada tanda kurung kurawalnya ddalamnya adalbermacam2 property dan type2 dari property tersebut! 
contoh 
let variable1 :{
      property1:type1,
      property2:type2,
      roperty3:type3 ..dst 
}
      nah kalau pakai anotation contohnya :

*/

let car: { brand: string; year: number; capacity: number } = {
  brand: "toyota",
  year: 2013,
  capacity: 4,
};
//nah jika kita mau tambah dgn sesuatu yg baru maka harus
//mengacu pada nama property yg sama contoh
car.brand = "lexus";
car.capacity = 7;
car.year = 2016;
console.log(car);

//ini error krna tidak ada propwerty car.gazoline ='petralit
//krn po=ropwetry gazoline tidak ada ! dalam  property array tsb

car = {
  brand: "suzuki jimny",
  capacity: 5,
  year: 2008,
};
console.log(car);

//nah skrg kita akan bua tyang array gimana jika kita mmbuat sbuah item array dari object
//dimana masing2 item tsb didalamnya proeprtynya ada yg tak sama atau kurang?
//nah cara yg simple adalah memberi tanda ? yg artinya optional pada sbuah item yg kurang
//dalam artian utk item object yg kita declare nnti dimana dalam anotation tsb
//dia tak lengkap sama dgn type declarasi di anotation kita  bisa flexible dgn cara
//buat property yg kita declare di anotation tsb itu bersifata OPTIONAL atau ?
//contoh case

//kita mau buat anotatrion utk barang2 yg ada di gudang e-comerce dimana
//tiap item ada nama_item,harga,qty !
//awal2 kita buat 1 1 dulu jangan array asal mulanya biar tahu!
//pakai

let product1: { name: string; price: number; quantity: number } = {
  name: "jacket-ariel",
  quantity: 4,
  price: 230,
};
let product2 = { name: "arloji", quantity: 16, price: 2000 };
let product3 = { name: "arloji", price: 904 };
//nah diatas gak smalah ada yg kurang krna masing2 tidak adlaam array utk product3
//kalau dalam array ada yg kutang propertynya maka akan masalah
//utk itu yg tidak tertulis pada saat declare type obejct arraynya
//nama propertunya diberi tanda ? yang artinya optional ! contoh:

let products1: { title: string; qty: number; price?: number }[];
//contoh diatas property price diberi tanda optional ? agar jika suata item
//dlm array tidak mengisi /tidak ada harga pricenya maka masih bisa item object
//tsb berada dalam array-nya! {title:"jam-rolex",qty:100,price:2000}
products1 = [{ title: "jam-rolex", qty: 100 }];
//rumus dgn spreada  hasil = [...oldArray,{newItem}];
products1 = [...products1, { title: "kontol", qty: 100, price: 2056 }]; // nilai yg lama arraynya dispread  baru ditambah dgn items yg baru !
console.log(products1);

//cara lain slain spread dgn push jangan lupa kalau yg optional bisa di kita tak isi propertynya gakpp
//utk pngisian property walaupun optional tetap masih harus kita liat typenya apa kalau tidak sesuai type maka error
//misal kita kasih price:'expensive' ini pasti error harus type number !

let stockItems: { name: string; qty: number; price?: number }[];
stockItems = [{ name: "serbet", qty: 1000, price: 200 }];
stockItems.push({ name: "sabun", qty: 34 });
stockItems.push({ name: "pel", qty: 90 });
stockItems = [...stockItems, { name: "bakmi", qty: 3, price: 5000 }];
console.log("stockItems = ", stockItems);
