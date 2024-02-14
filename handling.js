/* Handling dengan Callback */
// Callback merupakan sebuah fungsi yang disisipkan pada argumen fungsi asynchronous dan akan dipanggil ketika proses dinyatakan selesai.
// Mendefinisikan fungsi getUsers dengan dua parameter: isOffline (menentukan apakah aplikasi offline atau tidak) dan callback (fungsi callback untuk menangani hasil).
function getUsers(isOffline, callback) {
  // Simulasi delay jaringan selama 3 detik
  setTimeout(() => {
    // Data pengguna
    const users = ["John", "Jack", "Abigail"];

    // Jika dalam mode offline, panggil callback dengan pesan kesalahan
    if (isOffline) {
      callback(new Error("cannot retrieve users due offline"), null);
      return;
    }

    // Jika berhasil, panggil callback dengan data pengguna
    callback(null, users);
  }, 3000); // Delay 3 detik
}

// Fungsi callback untuk menangani hasil pemanggilan getUsers
function usersCallback(error, users) {
  // Jika terjadi kesalahan, cetak pesan error
  if (error) {
    console.log("process failed:", error.message);
    return;
  }
  // Jika berhasil, cetak daftar pengguna
  console.log("process success:", users);
}

// Pemanggilan fungsi getUsers dengan isOffline false (mode online)
getUsers(false, usersCallback); // Output: process success: ['John', 'Jack', 'Abigail']

// Pemanggilan fungsi getUsers dengan isOffline true (mode offline)
getUsers(true, usersCallback); // Output: process failed: cannot retrieve users due offline

/* Handling dengan Promise */
// “mengapa fitur ini dinamakan ‘Promise’ alias ‘Janji’?”
// Ketahuilah bahwa penamaan ini sebenarnya cukup akurat dan memang Promise bisa dianalogikan sebagai sebuah janji.

//  Promise di JavaScript pun memiliki konsep yang sama karena memiliki beberapa kondisi, yaitu pending, fulfilled, dan rejected.
/* 
Pending merupakan keadaan Promise sedang berjalan.
Fulfilled merupakan keadaan Promise yang terpenuhi.
Rejected merupakan keadaan Promise yang gagal terpenuhi. 
*/
// Mendefinisikan fungsi getUsers dengan dua parameter: isOffline (menentukan apakah aplikasi offline atau tidak) dan callback (fungsi callback untuk menangani hasil).
function getUsers(isOffline, callback) {
  // Simulasi delay jaringan selama 3 detik
  setTimeout(() => {
    // Data pengguna
    const users = ["John", "Jack", "Abigail"];

    // Jika dalam mode offline, panggil callback dengan pesan kesalahan
    if (isOffline) {
      callback(new Error("cannot retrieve users due offline"), null);
      return;
    }

    // Jika berhasil, panggil callback dengan data pengguna
    callback(null, users);
  }, 3000); // Delay 3 detik
}

// Fungsi callback untuk menangani hasil pemanggilan getUsers
function usersCallback(error, users) {
  // Jika terjadi kesalahan, cetak pesan error
  if (error) {
    console.log("process failed:", error.message);
    return;
  }
  // Jika berhasil, cetak daftar pengguna
  console.log("process success:", users);
}

// Pemanggilan fungsi getUsers dengan isOffline false (mode online)
getUsers(false, usersCallback); // Output: process success: ['John', 'Jack', 'Abigail']

// Pemanggilan fungsi getUsers dengan isOffline true (mode offline)
getUsers(true, usersCallback); // Output: process failed: cannot retrieve users due offline

/* Callback menjadi Promise dengan Promisify */
// sebuah fungsi dari core module util yang dapat mengubah fungsi asynchronous callback-based menjadi Promise-based dengan mudah, ia bernama promisify.
const { promisify } = require("util");

function getUsers(isOffline, callback) {
  // simulate network delay
  setTimeout(() => {
    const users = ["John", "Jack", "Abigail"];
    if (isOffline) {
      callback(new Error("cannot retrieve users due offline"), null);
      return;
    }

    callback(null, users);
  }, 3000);
}

// create a Promise version of getUsers
const getUsersPromise = promisify(getUsers);

getUsersPromise(false)
  .then((users) => console.log(users)) // ['John', 'Jack', 'Abigail']
  .catch((err) => console.log(err.message));

getUsersPromise(true)
  .then((users) => console.log(users))
  .catch((err) => console.log(err.message)); // cannot retrieve users due offline
/* 
1. Promisify selalu menganggap callback berada pada argumen paling akhir sebuah fungsi asynchronous. Dengan begitu, Anda tidak dapat menggunakan promisify jika callback berada di posisi awal ataupun tengah argumen.
2. Promisify akan bekerja dengan baik jika callback memiliki struktur argumen callback(error, data). Jika callback memiliki struktur argumen di luar aturan tersebut, nilai yang dibawa oleh Promise ketika fulfilled dan rejected bisa tertukar. 
*/
