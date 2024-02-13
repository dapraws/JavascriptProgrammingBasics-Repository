# Module

Pada modul ini Saya mempelajari bagaimana membuat beberapa berkas JavaScript bisa saling berkomunikasi menggunakan module.

## Rangkuman Materi

1. **Meng-export dan meng-import nilai antar berkas JavaScript**:

   - Untuk meng-export nilai dari sebuah berkas JavaScript, gunakan keyword `export`.
   - Contoh:

     ```javascript
     // file data.js
     export const data = [1, 2, 3, 4, 5];
     ```

   - Untuk meng-import nilai dari sebuah berkas JavaScript, gunakan keyword `import`.
   - Contoh:
     ```javascript
     // file main.js
     import { data } from "./data.js";
     console.log(data); // output: [1, 2, 3, 4, 5]
     ```

2. **Dua jenis format module yang bisa digunakan pada JavaScript**:

   - CommonJS: Format module yang umum digunakan di lingkungan Node.js.
   - Contoh penggunaan:

     ```javascript
     // Export di file data.js
     module.exports = { data: [1, 2, 3, 4, 5] };

     // Import di file main.js
     const { data } = require("./data.js");
     console.log(data); // output: [1, 2, 3, 4, 5]
     ```

   - ECMAScript Modules (ESM): Format module standar yang diperkenalkan dalam ECMAScript 6 (ES6).
   - Contoh penggunaan:

     ```javascript
     // Export di file data.js
     export const data = [1, 2, 3, 4, 5];

     // Import di file main.js
     import { data } from "./data.js";
     console.log(data); // output: [1, 2, 3, 4, 5]
     ```
