let z;
console.log(typeof(z));
/* output: undefined */


/* Numbers */
let x = 10;
console.log(typeof(x))
/* output: number */

let y = 17.25;
console.log(typeof(y))
/* output: number */

// Pada tipe data number, kita juga dapat melakukan perhitungan aritmatika seperti penjumlahan, pengurangan, perkalian, dsb.
let a = 12;
let b = 9;
console.log(a + b)
console.log(a - b)
console.log(a * b)
console.log(a / b)
console.log(a % b)
/* output:
21
3
108
1.3333333333333333
3
*/

/* Increment dan Decrement */
let postfix = 5;
console.log(postfix++);
/* output: 5 */

console.log(postfix);
/* output: 6 */

let prefix = 5;
console.log(++prefix);
/* output: 6 */


/* BigInt */
const bigNumber = 1234567890123456789012345678901234567890n;
const myInt = 1234567890123456789012345678901234567890;
console.log(bigNumber);
console.log(myInt);
/* output
1234567890123456789012345678901234567890n
1.2345678901234568e+39
*/

// Meskipun digunakan untuk menyimpan angka dengan nilai besar, namun BigInt tetap bisa digunakan untuk nilai yang lebih kecil.
const bigIntButSmall = 7n;

// Kita juga bisa menggunakan BigInt untuk operasi aritmatika pada umumnya. Yang membedakan adalah pada operasi pembagian, hasilnya akan dibulatkan ke bawah dan tanpa mengandung nilai desimal.
console.log(5n + 2n);
console.log(5n - 2n);
console.log(5n * 2n);
console.log(5n / 2n);
console.log(5n % 2n);
/* output
7n
3n
10n
2n; Bukan 2.5n
1n
*/


/* Strings */ 
let greet = "Hello";
console.log(typeof(greet))
/* output: string */

const question = '"What do you think of JavaScript?" I asked';
console.log(question)
/* output: "What do you think of JavaScript?" I asked */

// const answer = '"I think it's awesome!" he answered confidently';  // Error
const answer = '"I think it\'s awesome!" he answered confidently';  // Benar, gunakan backslash(\) untuk mengurangi ambiguitas dalam tanda petik.
console.log(answer);

/* Concatenation */
greet = "Hello";
let moreGreet = greet + greet;
console.log(moreGreet);
/* output: HelloHello */

/* Interpolation */
const myName = "Luke";
console.log(`Hello, my name is ${myName}.`);
/* output: Hello, my name is Luke. */



/* Boolean */
x = true;
y = false;
console.log(typeof(x))
console.log(typeof(y))
/* output: 
boolean
boolean
*/

/* Komparasi */
a = 10;
b = 12;
let isGreater = a > b;
let isLess = a < b;
console.log(isGreater);
console.log(isLess);
/* output:
false
true
*/


/* Null */
let someLaterData = null;
console.log(someLaterData);
/* output:
null
*/

/* Symbol */
const id = Symbol("id");
console.log(id);
/* output
Symbol(id)
*/

// Symbol disebut sebagai identifier yang unik karena meskipun kita membuat dua variabel symbol dengan nama atau deskripsi yang sama, kedua nilainya tetap dianggap berbeda.
const id1 = Symbol("id");
const id2 = Symbol("id");
console.log(id1 == id2);
/* output
false
*/



