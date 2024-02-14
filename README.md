# Asynchronous Process

Dalam pemrograman, tidak seluruh proses dapat berjalan dengan sangat cepat. Ada beberapa proses yang membutuhkan waktu tunggu, seperti baca tulis berkas, mendapatkan data dari internet, dan proses lainnya. Agar tidak menghalangi proses lainnya, kita harus mengetahui cara menjalankan proses yang lambat secara asynchronous. Dalam modul ini, belajar pengembangan web lebih lanjut mengenai proses asynchronous di JavaScript.

## Rangkuman Materi

# Rangkuman Asynchronous Process

1.  Pengertian Asynchronous Programming

Asynchronous programming adalah paradigma pemrograman di mana beberapa tugas dapat dieksekusi secara bersamaan tanpa harus menunggu tugas sebelumnya selesai.

2. Keuntungan Asynchronous Programming

- **Kinerja yang lebih baik**: Memungkinkan aplikasi untuk terus berjalan tanpa harus menunggu tugas tertentu selesai.
- **Responsif**: Aplikasi tetap merespons terhadap input pengguna atau peristiwa lainnya bahkan ketika sedang menjalankan tugas yang panjang.
- **Mengoptimalkan penggunaan sumber daya**: Meminimalkan waktu menunggu dan memungkinkan penggunaan sumber daya yang lebih efisien.

3.  Cara Implementasi Asynchronous Programming

- **Callback Functions**: Menggunakan fungsi callback untuk menangani hasil dari tugas asynchronous.
- **Promises**: Merepresentasikan nilai yang mungkin tersedia segera, di masa mendatang, atau bahkan tidak tersedia sama sekali.
- **Async/Await**: Menyediakan cara yang lebih mudah untuk menulis kode asynchronous dengan menggunakan kata kunci `async` dan `await` untuk menangani promises.

4.  Contoh Asynchronous Operations

- **Memuat data dari server**: Misalnya, memuat data JSON dari API.
- **Menjalankan operasi file I/O**: Seperti membaca atau menulis file pada sistem file.
- **Request HTTP**: Mengirim permintaan HTTP ke server dan menanggapi balikannya.
- **Operasi database**: Misalnya, mengeksekusi query database yang memerlukan waktu untuk menyelesaikan.

5.  Mengelola Error dalam Asynchronous Programming

- **Try-Catch Blocks**: Menggunakan blok try-catch untuk menangkap dan menangani kesalahan yang terjadi dalam operasi asynchronous.
- **Handling Rejected Promises**: Menangani promise yang ditolak dengan menggunakan metode `.catch()` atau blok `catch` pada async/await.

6.  Best Practices dalam Asynchronous Programming

- **Gunakan Promises atau Async/Await**: Membantu mengelola kode asynchronous secara lebih mudah dan terhindar dari callback hell.
- **Hindari Blocking Operations**: Hindari operasi yang mungkin memblokir jalannya program secara keseluruhan.
- **Manajemen Memori**: Pastikan untuk membebaskan sumber daya yang tidak lagi dibutuhkan setelah tugas asynchronous selesai.
