/* Map */
//  Map adalah tipe data yang menyimpan koleksi data dengan format key-value layaknya Object. Yang membedakan adalah Map memperbolehkan key dengan tipe data apa pun, dibandingkan Object yang hanya mengizinkan key bertipe String atau Symbol.
const myMap = new Map([
  ["1", "a String key"],
  [1, "a number key"],
  [true, true],
]);

console.log(myMap);

/* output
  Map(3) { '1' => 'a String key', 1 => 'a number key', true => true }
*/

// kita bisa mendapatkan nilainya berdasarkan key tertentu dengan metode get(). Lalu, untuk menambahkan pasangan key-value baru gunakan metode set().
const capital = new Map([
  ["Jakarta", "Indonesia"],
  ["London", "England"],
  ["Tokyo", "Japan"],
]);

console.log(capital.size);
console.log(capital.get("London"));
capital.set("New Delhi", "India");
console.log(capital.size);
console.log(capital.get("New Delhi"));

/* output
  3
  England
  4
  India
*/

/*
const wrongMap = new Map(); 
wrongMap["My Key"] = "My Value";
console.log(wrongMap["My Key"]);

Ketika kita menetapkan nilai map seperti di atas, data akan disimpan sebagai generic object. Ini akan mengakibatkan data tidak tersimpan dalam Map query dan tidak bisa menggunakan fitur dari Map seperti .has atau .delete.
*/

const wrongMap = new Map();
wrongMap["My Key"] = "My Value";

console.log(wrongMap.has("My Key"));
console.log(wrongMap.delete("My Key"));

/* output
false
false
 */

// Jadi, pastikan untuk menggunakan metode .set() dan .get() untuk Map.a
