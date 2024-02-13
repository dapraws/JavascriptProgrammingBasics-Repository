/* Throwing Errors */
// Operator ini akan “melemparkan” eror pada program, sehingga eksekusi kode akan masuk pada blok catch.
const json = '{ "age": 20 }';

try {
  const user = JSON.parse(json);

  if (!user.name) {
    throw new SyntaxError("'name' is required.");
  }

  console.log(user.name); // undefined
  console.log(user.age); // 20
} catch (error) {
  if (error instanceof SyntaxError) {
    console.log(`JSON Error: ${error.message}`);
  } else if (error instanceof ReferenceError) {
    console.log(error.message);
  } else {
    console.log(error.stack);
  }
}

/* output
JSON Error: 'name' is required.
*/
