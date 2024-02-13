// const { coffeeStock, isCoffeeMachineReady } = require("./state");
import { coffeeStock as stock, isCoffeeMachineReady } from "./state.js";

const displayStock = (stock) => {
  for (const type in stock) {
    console.log(type);
  }
};

displayStock(coffeeStock);
/* output
arabica
robusta
liberica 
*/

console.log(stock);
console.log(isCoffeeMachineReady);
/* output
{ arabica: 100, robusta: 150, liberica: 200 }
*/

const makeCoffee = (type, miligrams) => {
  if (coffeeStock[type] >= miligrams) {
    console.log("Kopi berhasil dibuat!");
  } else {
    console.log("Biji kopi habis!");
  }
};

makeCoffee("robusta", 80);
/* output
  Kopi berhasil dibuat!
  */
