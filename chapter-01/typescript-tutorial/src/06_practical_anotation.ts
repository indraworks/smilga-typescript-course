//kita praktek anotation

const bookCustomers = ["1984", "brave the world", "war in 1945"];
let foundBook: string | undefined;
foundBook = "war in 1945";
for (let book in bookCustomers) {
  if (book === "war in 1945") {
    foundBook = book;
    foundBook = foundBook.toUpperCase();
    break;
  }
}
console.log("buku yg dicari ketemu =", foundBook);

/*
The reason to explicitly type foundBook as string | undefined is to make it clear 
to anyone reading the code (including your future self) that foundBook might be undefined at runtime. This is 
a good practice in TypeScript because it helps prevent bugs related to undefined values

utk cara diatas dgn union type diberi undefined pada type ,
adalah cara yg baik utk hindari bug saat pertama/run-time variable belum ada isi 
maka dia bertype undefined!
*/
