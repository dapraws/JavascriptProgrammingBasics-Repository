/* Chaining Promise */
function withDrawMoney(amount) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      if (amount > 100) {
        reject(new Error("Not enough money to withdraw"));
      }

      resolve(amount);
    }, 1000);
  });
}

function buyCinemaTicket(money) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      if (money < 10) {
        reject(new Error("not enough money to buy ticket"));
      }

      resolve("ticket-1");
    }, 1000);
  });
}

function goInsideCinema(ticket) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      if (!ticket) {
        reject(new Error("no ticket"));
      }

      resolve("enjoy the movie");
    }, 1000);
  });
}

function watchMovie() {
  withDrawMoney(10)
    .then((money) => {
      return buyCinemaTicket(money);
    })
    .then((ticket) => {
      return goInsideCinema(ticket);
    })
    .then((result) => {
      console.log(result);
    })
    .catch((error) => {
      console.log(error.message);
    });
}

watchMovie();

/* Promise Static Method */
// Promise.all() digunakan untuk mengeksekusi banyak Promise secara paralel.
const promise1all = new Promise((resolve) =>
  setTimeout(() => resolve(1), 1000)
);
const promise2all = new Promise((resolve) =>
  setTimeout(() => resolve(2), 2000)
);
const promise3all = new Promise((resolve) =>
  setTimeout(() => resolve(3), 3000)
);

Promise.all([promise1all, promise2all, promise3all]).then((values) =>
  console.log(values)
); // [1, 2, 3] setelah 3 detik

// Promise.race() mengembalikan nilai Promise yang paling cepat menyelesaikan eksekusinya.
const promise1race = new Promise((resolve) =>
  setTimeout(() => resolve(1), 1000)
);
const promise2race = new Promise((resolve) =>
  setTimeout(() => resolve(2), 2000)
);
const promise3race = new Promise((resolve) =>
  setTimeout(() => resolve(3), 3000)
);

Promise.race([promise1race, promise2race, promise3race]).then((value) =>
  console.log(value)
); // 1 setelah 1 detik

// Promise.allSettled() mengembalikan seluruh hasil dari Promise yang dieksekusi dalam bentuk array of object.
const promise1settled = new Promise((resolve) =>
  setTimeout(() => resolve(1), 1000)
);
const promise2settled = new Promise((resolve, reject) =>
  setTimeout(() => reject(new Error("Error")), 2000)
);
const promise3settled = new Promise((resolve) =>
  setTimeout(() => resolve(3), 3000)
);

Promise.allSettled([promise1settled, promise2settled, promise3settled]).then(
  (results) => console.log(results)
);
// [{status: "fulfilled", value: 1}, {status: "rejected", reason: Error}, {status: "fulfilled", value: 3}] setelah 3 detik

// Promise.any() mengembalikan nilai tercepat yang berstatus fulfilled.
// fulfilled sample
const promiseResolve1 = new Promise((resolve, reject) =>
  setTimeout(() => resolve("1"), 1000)
);
const promiseResolve2 = new Promise((resolve, reject) =>
  setTimeout(() => resolve("2"), 2000)
);
const promiseResolve3 = new Promise((resolve, reject) =>
  setTimeout(() => resolve("3"), 3000)
);

Promise.any([promiseResolve1, promiseResolve2, promiseResolve3])
  .then((value) => console.log(value)) // 1
  .catch((error) => console.log(error.message));

// rejected sample
const promiseReject1 = new Promise((resolve, reject) =>
  setTimeout(() => reject(new Error("1")), 1000)
);
const promiseReject2 = new Promise((resolve, reject) =>
  setTimeout(() => reject(new Error("2")), 2000)
);
const promiseReject3 = new Promise((resolve, reject) =>
  setTimeout(() => reject(new Error("3")), 3000)
);

Promise.any([promiseReject1, promiseReject2, promiseReject3])
  .then((value) => console.log(value))
  .catch((error) => console.log(error.message)); // All Promises were rejected

/* Async dan Await */
async function watchMovie() {
  try {
    const money = await withDrawMoney(10);
    const ticket = await buyCinemaTicket(money);
    const result = await goInsideCinema(ticket);

    console.log(result);
  } catch (error) {
    console.log(error.message);
  }
}

watchMovie();
