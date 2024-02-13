/* Try and Catch */
// Taruh kode yang berpeluang menimbulkan eror di dalam blok try.
// Apabila terjadi eror di dalam blok kode try, maka ia akan ditangkap dan ditangani oleh blok kode catch.
// Sementara, jika tidak terjadi eror pada kode, maka blok catch akan diabaikan.

try {
  console.log("Awal blok try"); // (1)
  errorCode; // (2)
  console.log("Akhir blok try"); // (3)
} catch (error) {
  console.log("Terjadi error!"); // (4)
}

/* output
  Awal blok try
  Terjadi error!
  */
// Baris kode (2) akan menghasilkan eror.
// Eksekusi kode di dalam blok try akan dihentikan, sehingga baris kode (3) tidak akan tereksekusi.
// Kemudian kode akan dilanjutkan ke baris (4) atau blok catch.

/* try-catch-finally */
// Blok finally akan tetap dijalankan tanpa peduli apa pun hasil yang terjadi pada blok try-catch.
try {
  console.log("Awal blok try");
  console.log("Akhir blok try");
} catch (error) {
  console.log("Baris ini diabaikan");
} finally {
  console.log("Akan tetap dieksekusi");
}

/* output
  Awal blok try
  Akhir blok try
  Akan tetap dieksekusi
  */
