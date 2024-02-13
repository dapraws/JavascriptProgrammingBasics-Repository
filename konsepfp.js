/* Konsep-konsep Functional Programming */

// Pure Function
// fungsi yang mengharuskan fungsi untuk tidak bergantung terhadap nilai yang berada di luar fungsi atau parameternya.

// Sebelum Pure Function
// let PI = 3.14;
// const hitungLuasLingkaran = (jariJari) => {
//   return PI * (jariJari * jariJari);
// };
// console.log(hitungLuasLingkaran(4)); // 50.24
// PI = 5; // tidak sengaja nilai PI berubah
// console.log(hitungLuasLingkaran(4)); // 80

// Setelah Pure Function
const hitungLuasLingkaran = (jariJari) => {
  return 3.14 * (jariJari * jariJari);
};

console.log(hitungLuasLingkaran(4)); // 50.24
console.log(hitungLuasLingkaran(4)); // 50.24
console.log(hitungLuasLingkaran(8)); // 200.96
console.log(hitungLuasLingkaran(8)); // 200.96

// Selain dilarang untuk bergantung terhadap nilai luar, pure function juga dilarang keras untuk mengubah nilai yang berada di luar baik secara sengaja atau tidak sengaja. Pure function tidak boleh menimbulkan efek samping (no side effect) ketika digunakan.

// Immutability
// sebuah objek tidak boleh diubah setelah objek tersebut dibuat.

// Cara salah
// const user = {
//   firstname: "Harry",
//   lastName: "Protter", // ups, typo!
// };
// const renameLastNameUser = (newLastName, user) => {
//   user.lastName = newLastName;
// };
// renameLastNameUser("Potter", user);
// console.log(user);
// /**
//  * output:
//  * { firstname: 'Harry', lastName: 'Potter' }
//  *
//  */

// Cara benar
const user = {
  firstname: "Harry",
  lastName: "Protter", // ups, typo!
};
const createUserWithNewLastName = (newLastName, user) => {
  return { ...user, lastName: newLastName };
};
const newUser = createUserWithNewLastName("Potter", user);
console.log(newUser);
/**
 * output:
 * { firstname: 'Harry', lastName: 'Potter' }
 *
 */

// Rekursif
// teknik pada sebuah function yang memanggil dirinya sendiri.

// Cara biasa
// const countDown = (start) => {
//   do {
//     console.log(start);
//     start -= 1;
//   } while (start > 0);
// };
// countDown(10);

// Cara rekursif
const countDown = (start) => {
  console.log(start);
  if (start > 0) countDown(start - 1);
};
countDown(10);

// Higher-Order Function
// fungsi yang dapat menerima fungsi lainnya pada argumen; mengembalikan sebuah fungsi; atau bahkan keduanya.

// Dengan mengetahui adanya Higher-Order Function, Anda bisa membuat fungsi map() versi Anda sendiri!
const names = ["Harry", "Ron", "Jeff", "Thomas"];
const arrayMap = (arr, action) => {
  const loopTrough = (arr, action, newArray = [], index = 0) => {
    const item = arr[index];
    if (!item) return newArray;
    return loopTrough(
      arr,
      action,
      [...newArray, action(arr[index])],
      index + 1
    );
  };
  return loopTrough(arr, action);
};
const newNames = arrayMap(names, (name) => `${name}!`);
console.log({
  names,
  newNames,
});
/**
 * output:
 * {
 *   names: [ 'Harry', 'Ron', 'Jeff', 'Thomas' ],
 *   newNames: [ 'Harry!', 'Ron!', 'Jeff!', 'Thomas!' ]
 * }
 */
