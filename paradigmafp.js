/* Paradigma Functional Programming */
// Paradigma Functional Programming adalah paradigma pemrograman di mana proses komputasi didasarkan pada fungsi matematika murni.

// Imperatif
// const names = ["Harry", "Ron", "Jeff", "Thomas"];
// const newNamesWithExcMark = [];
// for (let i = 0; i < names.length; i++) {
//   newNamesWithExcMark.push(`${names[i]}!`);
// }
// console.log(newNamesWithExcMark);
// /* output:
//    [ 'Harry!', 'Ron!', 'Jeff!', 'Thomas!' ]
// */

// Deklaratif
const names = ["Harry", "Ron", "Jeff", "Thomas"];
const newNamesWithExcMark = names.map((name) => `${name}!`);
console.log(newNamesWithExcMark);
/* output:
 * [ 'Harry!', 'Ron!', 'Jeff!', 'Thomas!' ]
 */

// Kita tidak perlu pusing untuk memikirkan cara manual untuk mencapai sebuah tujuan.
// Tidak ada proses looping manual; Tidak perlu tahu kapan harus berhenti dari looping;
// Kita cukup fokus pada “what to solve” alias apa yang ingin kita selesaikan atau capai.
