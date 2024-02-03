/* Object */
//  ebuah tipe data yang sangat berguna dalam pengembangan aplikasi dengan JavaScript. Object mampu menyimpan nilai dari beragam tipe data dan membentuk data yang lebih kompleks.

/* Membuat Object */
// Untuk menetapkan objek pada sebuah variabel kita gunakan tanda kurung kurawal {}.
const user = {
  // Object berisi pasangan key dan value yang juga dikenal dengan property.
  firstName: "Luke",
  lastName: "Skywalker",
  age: 19,
  isJedi: true,
  "home world": "Tattooine",
};

// Kemudian untuk mengakses nilai dari properti object, kita dapat memanggil nama object lalu tanda titik dan diikuti nama propertinya.
console.log(`Halo, nama saya ${user.firstName} ${user.lastName}`);
console.log(`Umur saya ${user.age} tahun`);

// Selain dot operator, kita juga bisa mengakses properti dari object menggunakan bracket atau tanda kurung siku.
console.log(`Saya berasal dari ${user["home world"]}`);

/* output
    Halo, nama saya Luke Skywalker
    Umur saya 19 tahun
    Saya berasal dari Tattooine
*/

/* Modifikasi Object */
const spaceship = {
  name: "Millenium Falcon",
  manufacturer: "Corellian Engineering Corporation",
  maxSpeed: 1200,
  color: "Light gray",
};

// Untuk mengubah nilai properti di dalam object kita gunakan assignment operator (=).
spaceship.color = "Glossy red";
spaceship["maxSpeed"] = 1300;
// Ketika kita mengubah object menggunakan assignment operator dan property/key-nya sudah ada, maka nilai di dalamnya akan tergantikan dengan nilai yang baru. Sedangkan, jika property dengan nama key yang ditentukan tidak ditemukan, maka property baru akan ditambahkan ke object.
spaceship.class = "Light freighter";
// Kita juga dapat menghapus property pada object menggunakan keyword delete.
delete spaceship.manufacturer;

console.log(spaceship);
/* output
{
  name: 'Millenium Falcon',
  maxSpeed: 1300,
  color: 'Glossy red',
  class: 'Light freighter'
}
*/
