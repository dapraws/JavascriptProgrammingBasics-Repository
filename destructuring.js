/* Destructuring Object & Array */
// Destructuring dalam JavaScript merupakan sintaksis yang dapat mengeluarkan nilai dari array atau properties dari sebuah object ke dalam satuan yang lebih kecil.

/* Destructuring Object */
// Penulisan sintaksis destructuring object pada ES6 menggunakan object literal ({ }) di sisi kiri dari operator assignment.
// const profile = {
//   firstName: "John",
//   lastName: "Doe",
//   age: 18,
// };
// const { firstName, lastName, age } = profile;
// console.log(firstName, lastName, age);
// /* output:
//   John Doe 18
// */

/* Destructuring Assignment */
// const profile = {
//   firstName: "John",
//   lastName: "Doe",
//   age: 18,
// };

// let firstName = "Dimas";
// let age = 20;

// // menginisialisasi nilai baru melalui destructuring object
// ({ firstName, age } = profile);

// console.log(firstName);
// console.log(age);

// /* output:
//   John
//   18
//   */

/* Default Values */
// Ketika kita mendestruksikan objek dan menetapkan variabel dengan nama yang bukan merupakan properti dari objek, maka nilai dari variabel tersebut menjadi undefined.
// const profile = {
//   firstName: "John",
//   lastName: "Doe",
//   age: 18,
// };

// const { firstName, age, isMale } = profile;

// console.log(firstName);
// console.log(age);
// console.log(isMale);

// /* output:
//   John
//   18
//   undefined
// */

// Assigning to Different Local Variable Names
// const profile = {
//     firstName: "John",
//     lastName: "Doe",
//     age: 18
//   }

//   const { firstName: localFirstName, lastName: localLastName, age: localAge } = profile;

//   console.log(localFirstName);
//   console.log(localLastName);
//   console.log(localAge);

//   /* output:
//   John
//   Doe
//   18
//   */

/* Destructuring Array */
// Destructuring array serupa dengan destructuring object. Object menggunakan tanda kurung kurawal { } sedangkan array menggunakan tanda kurung siku [ ]. Perbedaan lainnya adalah destructuring array bekerja berdasarkan posisi daripada penamaan propertinya.
// const favorites = ["Seafood", "Salad", "Nugget", "Soup"];

// const [firstFood, secondFood, thirdFood, fourthFood] = favorites;
// // const [ , , thirdFood ] = favorites; // Kita bebas untuk menentukan nama dari variabel lokal. Yang terpenting adalah urutan ketika deklarasi variabelnya saja.
// console.log(firstFood);
// console.log(secondFood);
// console.log(thirdFood);
// console.log(fourthFood);

// /* output:
// Seafood
// Salad
// Nugget
// Soup
// */

/* Destructuring Assignment */
// const favorites = ["Seafood", "Salad", "Nugget", "Soup"];

// let myFood = "Ice Cream";
// let herFood = "Noodles";

// [myFood, herFood] = favorites;

// console.log(myFood);
// console.log(herFood);

// /* output:
// Seafood
// Salad
// */

// Array destructuring assignment sangat berguna ketika kita hendak menukar nilai antara dua variabel.
// var a = 1;
// var b = 2;
// var temp;

// console.log("Sebelum swap");
// console.log("Nilai a: " + a);
// console.log("Nilai b: " + b);

// // temp = a;
// // a = b;
// // b = temp;

// [a, b] = [b, a] // menetapkan nilai a dengan nilai b dan nilai b dengan nilai a.

// console.log("Setelah swap");
// console.log("Nilai a: " + a);
// console.log("Nilai b: " + b);

// /* output
// Sebelum swap
// Nilai a: 1
// Nilai b: 2
// Setelah swap
// Nilai a: 2
// Nilai b: 1
// */

/* Default Values */
// Sama seperti object, pada destructuring array kita juga dapat memberikan nilai default pada variabel yang tidak dapat terjangkau oleh array, sehingga nilai pada variabel tidak akan menjadi undefined.
const favorites = ["Seafood"];
const [myFood, herFood] = favorites;

console.log(myFood);
console.log(herFood);

/* output:
Seafood
undefined
*/
