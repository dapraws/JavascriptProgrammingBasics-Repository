/* Loop */

/* For Loop */
// Dari beberapa cara melakukan proses loop pada JavaScript, “for” merupakan salah satu cara yang banyak digunakan.
for (let i = 0; i < 5; i++) {
  console.log(i);
}
/* output
    0
    1
    2
    3
    4
*/

/* For of Loop */
// Dengan for..of nilai tiap array akan diinisialisasi pada variabel baru yang kita tentukan pada tiap proses looping-nya. Jumlah proses looping-nya pun akan menyesuaikan dengan ukuran dari array.
let myArray = ["Luke", "Han", "Chewbacca", "Leia"];

for (const arrayItem of myArray) {
  console.log(arrayItem);
}
/* output
    Luke
    Han
    Chewbacca
    Leia
*/

/* While and Do-While */
// Metode lain untuk melakukan looping adalah dengan statement while. Sama seperti for, instruksi while mengevaluasi ekspresi boolean dan menjalankan kode di dalam blok while ketika bernilai true.
let i = 1;
while (i <= 100) {
  console.log(i);
  i++;
}
// Bentuk lain dari while adalah perulangan do-while.
i = 1;
do {
  console.log(i);
  i++;
} while (i <= 100);
// Kondisi pada while akan dievaluasi sebelum blok kode di dalamnya dijalankan, sedangkan do-while akan mengevaluasi boolean expression setelah blok kodenya berjalan. Ini artinya kode di dalam do-while akan dijalankan setidaknya satu kali.

/* Infinite Loops */
// Ketika menerapkan perulangan pada program, ada satu kondisi yang perlu kita hindari yaitu infinite loop. Infinite loop atau endless loop adalah kondisi di mana program kita stucked di dalam perulangan.
// While
i = 1;
while (i <= 5) {
  console.log(i);
}
// For
for (let i = 1; i <= 5; i = 1) {
  console.log(i);
}
