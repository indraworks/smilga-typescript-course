/*
In TypeScript, arrays are used 
to store multiple values in a single variable. 
You can define the type of elements that an array can hold using type annotations.
*/

//becareful dng inferer array types
let names = ["peter", "gabriel", "susan"]; // ini sudah pasti smua akan string array
//ini assertion sama dgn campurSari:(string | number | boolean)[]
let campurSari = ["siwalan", 23.8, false];

//names = ["sambo", 1]; ini akan error krn pertama kali sudah hanya string
campurSari.push(23); //benar karena assertionya brupa campurSari:(string |number | boolean)[]
campurSari.push("indra"); //benar bisa tambah string
campurSari.push(true);
//jadi intinya kalau insertion sekali saja di declare maka itu yg jadi patokanya utk type data yg diisi selanjutnya
