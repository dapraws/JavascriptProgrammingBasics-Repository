# Error Handling

Pada modul ini Saya mempelajari bagaimana menangani kemungkinan eror pada program agar tidak mengalami crash.

## Rangkuman Materi

1. **Penggunaan sintaksis try-catch untuk menangani error**:

   - Sintaksis `try-catch` digunakan untuk menangkap dan menangani error yang mungkin terjadi dalam blok kode.
   - Contoh:
     ```javascript
     try {
       // kode yang mungkin menimbulkan error
     } catch (error) {
       // kode untuk menangani error
     }
     ```

2. **Melemparkan error sendiri yang tidak terdeteksi oleh JavaScript**:

   - Untuk melemparkan error sendiri, gunakan keyword `throw`.
   - Contoh:
     ```javascript
     function divide(a, b) {
       if (b === 0) {
         throw new Error("Pembagian oleh nol tidak diperbolehkan");
       }
       return a / b;
     }
     ```

3. **Membuat kelas sendiri untuk menandai error yang tidak tersedia di JavaScript**:
   - Anda dapat membuat kelas turunan dari kelas `Error` untuk membuat jenis error kustom.
   - Contoh:
     ```javascript
     class MyCustomError extends Error {
       constructor(message) {
         super(message);
         this.name = "MyCustomError";
       }
     }
     ```
