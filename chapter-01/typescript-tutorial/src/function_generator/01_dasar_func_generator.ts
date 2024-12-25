/*
Apa itu generator ?
Pertanyaan bagus! Mari selami konsep dasar generator, asal usulnya, 
dan mengapa function* ada secara khusus di JavaScript dan TypeScript.

Apa itu Generator?
Dalam pemrograman, generator adalah konstruksi yang menghasilkan 
serangkaian nilai, satu per satu, sesuai permintaan. 
Tidak seperti fungsi biasa yang mengembalikan satu nilai dan keluar, 
generator dapat menghentikan sementara eksekusi dan melanjutkannya nanti.
 Hal ini menjadikannya ideal untuk skenario seperti evaluasi malas,
  di mana Anda tidak ingin menghitung semua nilai di awal.
======================
Asal Usul Generator : 
Konsep generator berasal dari ilmu komputer sebagai bagian dari coroutine, 
yang merupakan generalisasi subrutin yang memungkinkan penangguhan dan dimulainya kembali.
Bahasa pemrograman yang berbeda telah mengadopsi implementasi generatornya sendiri:
Python: Memperkenalkan generator sejak awal dengan kata kunci hasil.
JavaScript: Generator yang diadopsi di ECMAScript 2015 (ES6) dengan fungsi*.
C#: Mendukung generator menggunakan pengembalian hasil.
Ruby: Memiliki generator yang menggunakan enumerator.
Di setiap bahasa, sintaksis dan semantiknya mungkin berbeda, namun gagasan inti 
untuk menghasilkan nilai sesuai permintaan tetap sama.
Generator dalam JavaScript dan TypeScript
JavaScript (dan TypeScript, yang merupakan superset dari JavaScript) 
memperkenalkan generator di ECMAScript 2015 (ES6). 
Dalam JavaScript generator diperkenalkan sebgaia berikut:

1)Generator adalah fungsi yang dapat menjeda/menunda  dan melanjutkan eksekusi.
2)Sintaks function* menandai suatu fungsi sebagai generator.
3) yoield sbgai Kata kunci hasil digunakan untuk menghentikan sementara generator 
  dan menghasilkan nilai.
4) Generator mengembalikan objek iterator, yang sesuai dengan protokol Iterator.


*/

/*
mengapa menggunaka FUnction* ?:
Mengapa Menggunakan fungsi*?
Fungsi * (tanda bintang)* bukanlah standar universal di semua bahasa pemrograman.
 Ini adalah sintaks khusus untuk JavaScript/TypeScript 
 untuk membedakan dengan jelas fungsi generator dari fungsi biasa.
  Sintaks ini diperkenalkan untuk menyelaraskan dengan pola deklarasi fungsi JavaScript 
  sekaligus memperjelas tujuan generator.

Contoh: Cara kerja fungsi*
Saat Anda menggunakan fungsi*, Anda mendeklarasikan fungsi generator. 
Berikut rinciannya:

1)function* Deklarasi: Tanda * menunjukkan bahwa fungsi ini adalah generator.

2)(Yield)Pernyataan hasil: Hasil menjeda generator dan mengembalikan nilai ke pemanggil.

3)Objek Iterator: Saat fungsi generator dipanggil, 
ia mengembalikan objek iterator dengan metode .next().


*/
