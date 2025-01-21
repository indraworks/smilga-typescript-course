/*
tambahan utk type alias kita bisa buat type campuran/guard 
dan type2 yg specifik atau custom  contoh2 dibawah

*/

type StringOrNumber = string | number;
let value: StringOrNumber;
//jadi value bisa punya 2 nilai bertyoe number atau string !
value = "1243";
value = 397;

//type custom
type Theme = "light" | "dark";

let theme: Theme;
theme = "light";
theme = "dark";

//kita bisa pakai di function type alias custom diatas
function setTheme(t: Theme): Theme {
  theme = t;
  return theme;
}

setTheme("dark");
console.log(theme);
setTheme("light");
console.log(theme);
