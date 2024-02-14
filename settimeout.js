/* setTimeout Function */
// setTimeout() menerima dua argumen dengan penjelasan berikut.
// 1. Argumen pertama merupakan sebuah fungsi yang akan dipanggil secara terjadwal dan asynchronous.
// 2. Argumen kedua merupakan delay waktu dalam satuan milisecond yang menentukan delay dari pemanggilan fungsi pada argumen pertama.

console.log("Selamat datang!");

setTimeout(() => {
  console.log("Terima kasih sudah mampir, silakan datang kembali!");
}, 3000);

console.log("Ada yang bisa dibantu?");
