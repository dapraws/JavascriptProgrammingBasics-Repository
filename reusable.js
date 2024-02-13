/* Reusable Function */
// Dengan menerapkan konsep-konsep yang ada di dalam paradigma FP, fungsi yang Anda buat akan bersifat reusable.
// Hal ini tentu membuat fungsi dapat digunakan berkali-kali tanpa khawatir mendapatkan hasil di luar ekspektasi Anda.

/* Array Map */
// Fungsi ini dapat dipanggil dari sebuah data bertipe array dan menerima satu buah callback function.
const newArray = ["Harry", "Ron", "Jeff", "Thomas"].map((name) => {
  return `${name}!`;
});
console.log(newArray);
/**
 * [ 'Harry!', 'Ron!', 'Jeff!', 'Thomas!' ]
 *
 */

/* Array Filter */
// Cara kerja fungsi ini mirip seperti array.map(). Namun, callback function dari fungsi ini harus mengembalikan boolean. Di mana nilai boolean ini digunakan untuk menentukan apakah item array lolos saring atau tidak.
const truthyArray = [1, "", "Hallo", 0, null, "Harry", 14].filter((item) =>
  Boolean(item)
);
console.log(truthyArray);
/**
 * output:
 * [ 1, 'Hallo', 'Harry', 14 ]
 *
 */

const students1 = [
  {
    name: "Harry",
    score: 60,
  },
  {
    name: "James",
    score: 88,
  },
  {
    name: "Ron",
    score: 90,
  },
  {
    name: "Bethy",
    score: 75,
  },
];
const eligibleForScholarshipStudents = students1.filter(
  (student) => student.score > 85
);
console.log(eligibleForScholarshipStudents);
/**
 * output:
 * [ { name: 'James', score: 88 }, { name: 'Ron', score: 90 } ]
 *
 */

/* Array Reduce */
// digunakan untuk mengeksekusi fungsi reducer pada setiap elemen array dan hanya mengembalikan output satu nilai saja.
const students2 = [
  {
    name: "Harry",
    score: 60,
  },
  {
    name: "James",
    score: 88,
  },
  {
    name: "Ron",
    score: 90,
  },
  {
    name: "Bethy",
    score: 75,
  },
];
const totalScore = students2.reduce((acc, student) => acc + student.score, 0);
console.log(totalScore);
/**
 * output:
 * 313
 *
 */

/* Array Some */
// Nilai yang dihasilkan didasarkan pada pernyataan apakah ada setidaknya satu dari deretan nilai dalam array tersebut lolos berdasarkan kriteria yang kita tuliskan dalam callback function.
const array = [1, 2, 3, 4, 5];
const even = array.some((element) => element % 2 === 0);
console.log(even);
/** 
output true
**/

/* Array Find */
// Mirip dengan array.some()
// Yang membedakan array.find() dengan array.some(), find akan menghasilkan satu nilai dari elemen yang pertama kali ditemukan berdasarkan kriteria tertentu dan akan menghasilkan nilai undefine bila tidak ada kriteria yang terpenuhi pada item array.
const students3 = [
  {
    name: "Harry",
    score: 60,
  },
  {
    name: "James",
    score: 88,
  },
  {
    name: "Ron",
    score: 90,
  },
  {
    name: "Bethy",
    score: 75,
  },
];
const findJames = students3.find((student) => student.name === "James");
console.log(findJames);
/**
  output
  { name: 'James', score: 88 }
  **/

/* Array Sort */
// berguna untuk melakukan pengurutan nilai dari sebuah deretan nilai.
const months = ["March", "Jan", "Feb", "Dec"];
months.sort();
console.log(months);
// output: [ 'Dec', 'Feb', 'Jan', 'March' ]
const array1 = [1, 30, 4, 1000, 101, 121];
array1.sort();
console.log(array1);
// output: [ 1, 1000, 101, 121, 30, 4 ]

// membuat compare function
const array2 = [1, 30, 4, 1000];
const compareNumber = (a, b) => {
  return a - b;
};
const sorting = array2.sort(compareNumber);
console.log(sorting);
/**
output
[ 1, 4, 30, 1000 ]
**/

// Pada compare function, fungsi akan membandingkan 2 nilai yang akan menghasilkan 3 result yaitu negatif (-), 0, dan positif (+).
// Jika, negative maka `a` akan diletakkan sebelum `b`
// Jika, positive maka `b` akan diletakkan sebelum `a`
// Jika, 0 maka tidak ada perubahan posisi.

/* Array Every */
// digunakan untuk mengecheck apakah semua nilai dari sebuah array sesuai dengan kriteria yang didefinisikan.
const scores = [70, 85, 90];
const minimumScore = 65;
const examPassed = scores.every((score) => score >= minimumScore);
console.log(examPassed);
/**
output
true
**/

/* Array ForEach */
// berfungsi untuk memanggil fungsi callback pada setiap iterasi index array.
const names = ["Harry", "Ron", "Jeff", "Thomas"];

names.forEach((name) => {
  console.log(`Hello, ${name}!`);
});

/**
 * output:
 * Hello, Harry!
 * Hello, Ron!
 * Hello, Jeff!
 * Hello, Thomas!
 *
 */
