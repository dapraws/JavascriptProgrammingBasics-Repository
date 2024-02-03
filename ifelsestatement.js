/* If/Else Statement */
// Statement if akan menguji suatu kondisi. Jika kondisi bernilai true, maka blok kode di dalamnya akan dijalankan. Sebaliknya, jika bernilai false, maka proses yang ditentukan akan dilewatkan.
const isRaining = true;
console.log("Persiapan sebelum berangkat kegiatan.");
if (isRaining) {
    console.log("Hari ini hujan. Bawa payung.");
}
console.log("Berangkat kegiatan.");
/* output:
Persiapan sebelum berangkat kegiatan.
Hari ini hujan. Bawa payung.
Berangkat kegiatan.
*/

// Lalu bagaimana jika Anda ingin melakukan operasi lain ketika kondisi bernilai false? Jawabannya adalah statement else.
let x = 50;
if(x > 70) {
    console.log(x);
} else {
    console.log("Nilai kurang dari 70");
}
/* output
Nilai kurang dari 70
*/

// Kita juga bisa mengecek beberapa kondisi sekaligus dengan menggabungkan else dan if.
let language = "French";
let greeting = "Selamat Pagi"

if(language === "English") {
    greeting = "Good Morning!";
} else if(language === "French") {
    greeting = "Bonjour!"
} else if(language === "Japanese") {
    greeting = "Ohayou Gozaimasu!"
}
console.log(greeting);
/* output
Bonjour!
*/


// Selain if statement di atas, JavaScript juga mendukung ternary operator atau conditional expressions. Dengan ini, kita bisa menuliskan if-else statement hanya dalam satu baris.
// condition ? true expression : false expression
const isMember = false;
const discount = isMember ? 0.1 : 0;
console.log(`Anda mendapatkan diskon sebesar ${discount * 100}%`)
/* output
Anda mendapatkan diskon sebesar 0%
*/

/* Truthy & Falsy */ 
// Number 0
// BigInt 0n
// String kosong seperti “” atau ‘’
// null
// undefined
// NaN, atau Not a Number
let name = "";
if (name) {
    console.log(`Halo, ${name}`);
} else {
    console.log("Nama masih kosong");
}
/* output:
Nama masih kosong
 */