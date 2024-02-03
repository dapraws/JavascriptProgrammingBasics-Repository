/* Array */

/* Menginisialisasi dan mengakses array*/
// Array merupakan tipe data yang dapat mengelompokkan lebih dari satu nilai dan menempatkannya dalam satu variabel.
let myArray = ["Cokelat", 42.5, 22, true, "Programming"];
console.log(myArray);
/* output:
[ 'Cokelat', 42.5, 22, true, 'Programming' ]
*/

// Dalam sebuah array, indeks dimulai dari 0, sehingga ketika kita mengakses data pada myArray yang berada pada indeks ke-1 artinya data tersebut merupakan data pada posisi ke-2. Jadi nilai yang akan ditampilkan pada konsol adalah 42.5.
console.log(myArray[1]);
/* output:
42.5
*/

// Jika kita mengakses nilai array lebih dari index-nya, maka hasilnya akan undefined. Index terakhir array selalu jumlah nilai array - 1.
console.log(myArray[0]);
console.log(myArray[1]);
console.log(myArray[2]);
console.log(myArray[3]);
console.log(myArray[4]);
console.log(myArray[5]);
console.log("Panjang nilai myArray adalah " + myArray.length + ".");
/* output:
Cokelat
42.5
22
true
Programming
undefined
Panjang nilai myArray adalah 5.
*/

/* Memanipulasi array */
// Untuk menambahkan data ke dalam array, kita bisa menggunakan metode push(). Fungsi push ini akan menambahkan data di akhir array.
myArray.push("JavaScript");
console.log(myArray);
/* output
[ 'Cokelat', 42.5, 22, true, 'Programming', 'JavaScript' ]
 */

// Sedangkan untuk mengeluarkan data atau elemen terakhir dari array, kita bisa gunakan metode pop().
myArray.pop();
console.log(myArray);
/* output
[ Cokelat, 42.5, 22, true, 'Programming' ]
*/

// Metode shift() digunakan untuk mengeluarkan elemen pertama dari array, sementara unshift() digunakan untuk menambahkan elemen di awal array.
myArray.shift();
myArray.unshift("Apple");
console.log(myArray);
/* output
[ 'Apple', 42.5, 22, true, 'Programming' ]
*/

// Lalu bagaimana jika kita ingin menghapus data dari array? Sama seperti object, kita bisa menggunakan keyword delete.
myArray = ["Cokelat", 42.5, 22, true, "Programming"];
delete myArray[1];
console.log(myArray);
/* output
[ 'Cokelat', <1 empty item>, 22, true, 'Programming' ]
*/

// Untuk menghapus elemen, gunakan metode splice()
myArray = ["Cokelat", 42.5, 22, true, "Programming"];
myArray.splice(2, 1); // Menghapus dari index 2 sebanyak 1 elemen
console.log(myArray);
/* output
[ 'Cokelat', 42.5, true, 'Programming' ]
*/

// splice() juga dapat digunakan untuk menambahkan elemen pada array tersebut. Caranya dengan memberikan argumen ke-3 (atau selanjutnya, bersifat variadic) sebagai nilai yang akan dimasukan pada index yang diberikan pada argumen pertama.
const month = ["January", "March", "April", "May"];
console.log("before splice: ", month);

month.splice(1, 0, "February");
console.log("after splice: ", month);
/* output
before splice:  [ 'January', 'March', 'April', 'May' ]
after splice:  [ 'January', 'February', 'March', 'April', 'May' ]
*/
