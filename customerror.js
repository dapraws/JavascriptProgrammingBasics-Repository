/* Custom Error */
class ValidationError extends Error {
  constructor(message) {
    super(message);
    this.name = "ValidationError";
  }
}

const json = '{ "age": 30 }';

try {
  const user = JSON.parse(json);

  if (!user.name) {
    throw new ValidationError("'name' is required.");
  }
  if (!user.age) {
    throw new ValidationError("'age' is required.");
  }

  console.log(user.name);
  console.log(user.age);
} catch (error) {
  if (error instanceof SyntaxError) {
    console.log(`JSON Syntax Error: ${error.message}`);
  } else if (error instanceof ValidationError) {
    console.log(`Invalid data: ${error.message}`);
  } else if (error instanceof ReferenceError) {
    console.log(error.message);
  } else {
    console.log(error.stack);
  }
}

/* output
  Invalid data: 'name' is required.
  */

// Awalnya, JSON.parse akan mengonversi data String menjadi object.
// Apabila format String tidak sesuai, maka fungsi tersebut akan melemparkan SyntaxError.
// Meskipun format atau sintaksis dari json string sudah sesuai, tetap ada kemungkinan data di dalamnya tidak lengkap.
// Untuk itu kita bisa membuat kelas Error kita sendiri dengan nama dan pesan yang lebih sesuai.
// Penggunaan instanceOf akan memberikan hasil eror yang lebih detail dan sesuai dengan eror yang terjadi.
