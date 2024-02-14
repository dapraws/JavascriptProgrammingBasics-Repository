/**
 * @TODO
 * Ubahlah fungsi asynchronous callback-based getProvinces menjadi Promise-based.
 *
 * Catatan:
 * - Anda boleh menggunakan util.promisify untuk mengubah fungsi callback-based menjadi Promise-based.
 * - Jika nama fungsinya berubah, sesuaikan nilai yang diekspor tanpa mengubah nama properti di akhir berkas ini.
 */

// Import modul util untuk promisify
const util = require("util");

// Definisikan ulang fungsi getProvinces menjadi Promise-based
function getProvinces(countryId) {
  // Kembalikan Promise yang akan mengeksekusi kode dalam callback
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      if (countryId === "id") {
        // Jika berhasil, resolve dengan daftar provinsi
        resolve([
          { id: "id-jk", name: "Jakarta" },
          { id: "id-bt", name: "Banten" },
          { id: "id-jr", name: "Jawa Barat" },
        ]);
        return;
      }

      // Jika gagal, reject dengan pesan kesalahan
      reject(new Error("Country not found"));
    }, 1000); // Delay 1 detik
  });
}

// Ekspor fungsi getProvinces yang telah diubah menjadi Promise-based
module.exports = { getProvinces: getProvinces };
