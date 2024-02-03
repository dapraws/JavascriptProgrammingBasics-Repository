/* Spread Operator */

/* Array */
//  Sesuai namanya “spread”, fitur ini digunakan untuk menyebarkan nilai array atau lebih tepatnya iterable object menjadi beberapa elemen. Spread operator dituliskan dengan tiga titik (...).
const favorites = ["Seafood", "Salad", "Nugget", "Soup"];
console.log(...favorites);
/* output
Seafood Salad Nugget Soup
*/
// Spread operator bekerja seperti meleburkan nilai array menjadi beberapa elemen sesuai panjang nilai array-nya.

// Jika tidak menggunakan spread operator
const others = ["Cake", "Pie", "Donut"];
const allFavorites = [favorites, others];
console.log(allFavorites);
/* output
[
  [ 'Seafood', 'Salad', 'Nugget', 'Soup' ],
  [ 'Cake', 'Pie', 'Donut' ]
]
*/

// Jika menggunakan spread operator
allFavorites = [...favorites, ...others];
console.log(allFavorites);
/* output
[ 'Seafood', 'Salad', 'Nugget', 'Soup', 'Cake', 'Pie', 'Donut' ]
*/

/* Object */
// Selain array, spread operator juga bisa digunakan untuk object literals. Hal ini memungkinkan kita dapat menggabungkan beberapa object dengan kode yang lebih ringkas.
const obj1 = { firstName: "Obi-Wan", age: 30 };
const obj2 = { lastName: "Kenobi", gender: "M" };
const newObj = { ...obj1, ...obj2 };
console.log(newObj);
/* output
{ firstName: 'Obi-Wan', age: 30, lastName: 'Kenobi', gender: 'M' }
*/
