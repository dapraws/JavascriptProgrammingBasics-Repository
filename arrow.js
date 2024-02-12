// Arrow Function
// fungsi didefinisikan menggunakan tanda panah atau fat arrow ( => ). Tentunya penulisan arrow function ini akan lebih singkat.
// function declaration
// const sayName = (name) => {
//   console.log(`Nama saya ${name}`);
// };

// sayName("Leia");

/* output
  Nama saya Leia
   */

// Namun, jika kita sama sekali tidak membutuhkan parameter, maka kita tetap menuliskan tanda kurung namun kosong seperti ini:
// const sayHello = () => {
//   console.log("Selamat pagi semuanya!");
// };

// sayHello();

/* output
  Selamat pagi semuanya!
   */

// Satu hal yang menarik, ketika body dari function hanya terdiri dari satu baris, kita bisa menghapus tanda kurung kurawal. Tentunya ini akan menghemat baris kode yang kita tulis.
const sayName = (name) => console.log(`Nama saya ${name}`);
sayName("Leia");

const sayHello = () => console.log("Selamat pagi semuanya!");
sayHello();

/* output
  Nama saya Leia
  Selamat pagi semuanya!
   */

// Ketika sebuah fungsi perlu mengembalikan nilai, kita tidak perlu lagi menuliskan return (hanya bekerja untuk fungsi satu baris).
const multiply = (a, b) => a * b;
console.log(multiply(3, 4));

/* output
12
 */
