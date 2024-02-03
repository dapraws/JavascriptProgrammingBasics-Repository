/* Switch Case Statement */
// Selain if, JavaScript juga mendukung switch statement untuk melakukan pengecekan banyak kondisi dengan lebih mudah dan ringkas.Selain if, JavaScript juga mendukung switch statement untuk melakukan pengecekan banyak kondisi dengan lebih mudah dan ringkas.
let language = "French";
let greeting = null;
switch (language) {
  case "English":
    greeting = "Good Morning!";
    break;
  case "French":
    greeting = "Bonjour!";
    break;
  case "Japanese":
    greeting = "Ohayou Gozaimasu!";
    break;
  default:
    greeting = "Selamat Pagi!";
}
console.log(greeting);
/* output
  Bonjour!
*/
