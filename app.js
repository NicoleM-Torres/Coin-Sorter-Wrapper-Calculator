//VARIABLES
let coin_arr = ["Pennies", "Nickles", "Dimes", "Quarters"];
let coinVal_arr = [0.01, 0.05, 0.1, 0.25];
let coinAmount_arr = [125, 346, 157, 78];
let wrapper_arr = [50, 40, 50, 40];
let totalVal_arr = [0, 0, 0, 0];

let totalValueCombined = 0;

//#region Coin Wrapper

//Calculate each type of coin in dollars
/* Iterates through each coin, stores it in "totalVal_arr" and displays in console */
for (let i = 0; i < coin_arr.length; i++) {
  totalVal_arr[i] = coinAmount_arr[i] * coinVal_arr[i]; //multiply coinAmount_arr by conVal_arr
  console.log(
    `${coinAmount_arr[i]} ${coin_arr[i]} = Dollar value of $${totalVal_arr[
      i
    ].toFixed(2)}`
  );
} // END OF FOR LOOP

//Sort & Display # amount of wrappers needed
for (let i = 0; i < coin_arr.length; i++) {
  /* divides coin amount & wrapper capacity Math.ceil rounds up*/
  let wrappersNeeded = Math.ceil(coinAmount_arr[i] / wrapper_arr[i]); //stores result
  console.log(`Wrappers needed for ${coin_arr[i]}: ${wrappersNeeded}`); //display
} //END FOR LOOP

//Calculate total value combined of coins
/* adds up elements in totalVal_arr to get totalValueCombined */
for (let i = 0; i < totalVal_arr.length; i++) {
  totalValueCombined += totalVal_arr[i];
} //END FOR LOOP

//Display to console total amount of coins in dollars
console.log(`Total value combined of coins: $${totalValueCombined.toFixed(2)}`);

//#endregion

//#region Coin rolling challenge

//variable/array
var purse = [
  "dime",
  "dime",
  "dime",
  "penny",
  "nickel",
  "penny",
  "dime",
  "quarter",
  "dime",
  "nickel",
  "nickel",
  "dime",
  "quarter",
  "nickel",
  "penny",
  "dime",
  "nickel",
  "dime",
  "dime",
  "dime",
  "quarter",
  "nickel",
  "quarter",
  "dime",
  "nickel",
  "penny",
  "dime",
  "penny",
  "nickel",
  "quarter",
  "quarter",
  "quarter",
  "dime",
  "nickel",
  "dime",
  "quarter",
  "dime",
  "penny",
  "penny",
  "nickel",
  "penny",
  "penny",
  "dime",
  "nickel",
  "penny",
  "penny",
  "quarter",
  "quarter",
  "nickel",
  "nickel",
  "penny",
  "dime",
  "nickel",
  "quarter",
  "nickel",
  "nickel",
  "quarter",
  "quarter",
  "dime",
  "nickel",
  "penny",
  "dime",
  "dime",
  "nickel",
  "penny",
  "quarter",
  "quarter",
  "quarter",
  "dime",
  "nickel",
  "nickel",
  "dime",
  "quarter",
  "quarter",
  "nickel",
  "penny",
  "quarter",
  "penny",
  "quarter",
  "nickel",
  "dime",
  "quarter",
  "dime",
  "penny",
  "quarter",
  "nickel",
  "nickel",
  "nickel",
  "quarter",
  "penny",
  "nickel",
  "nickel",
  "dime",
  "dime",
  "dime",
  "quarter",
  "quarter",
  "quarter",
  "penny",
  "penny",
  "dime",
  "dime",
  "dime",
  "penny",
  "quarter",
  "nickel",
  "quarter",
  "quarter",
  "penny",
  "nickel",
  "penny",
  "nickel",
  "nickel",
  "penny",
  "quarter",
  "nickel",
  "dime",
  "quarter",
  "nickel",
  "dime",
  "penny",
  "nickel",
  "nickel",
  "penny",
  "penny",
  "penny",
  "dime",
  "quarter",
  "quarter",
  "quarter",
  "penny",
  "dime",
  "nickel",
  "dime",
  "dime",
  "penny",
  "quarter",
  "penny",
  "quarter",
  "penny",
  "dime",
  "dime",
  "nickel",
  "dime",
  "penny",
  "penny",
  "nickel",
  "penny",
  "nickel",
  "quarter",
  "dime",
  "dime",
  "nickel",
  "nickel",
  "nickel",
  "dime",
  "dime",
  "dime",
  "quarter",
  "penny",
  "dime",
  "nickel",
  "quarter",
  "nickel",
  "penny",
  "nickel",
  "penny",
  "nickel",
  "penny",
  "nickel",
  "nickel",
  "penny",
  "dime",
  "nickel",
  "dime",
  "dime",
  "quarter",
  "quarter",
  "quarter",
  "penny",
  "dime",
  "penny",
  "dime",
  "dime",
  "penny",
  "penny",
  "nickel",
  "nickel",
  "penny",
  "quarter",
  "nickel",
  "quarter",
  "dime",
  "nickel",
  "quarter",
  "nickel",
  "penny",
  "dime",
  "quarter",
  "nickel",
  "penny",
  "quarter",
  "quarter",
  "penny",
  "quarter",
  "dime",
  "penny",
  "dime",
  "nickel",
  "penny",
  "dime",
  "quarter",
  "nickel",
  "quarter",
  "quarter",
  "quarter",
  "dime",
  "quarter",
  "dime",
  "quarter",
  "nickel",
  "penny",
  "penny",
  "quarter",
  "quarter",
  "penny",
  "dime",
  "penny",
  "dime",
  "penny",
  "nickel",
  "nickel",
  "dime",
  "penny",
  "quarter",
  "penny",
  "quarter",
  "nickel",
  "quarter",
  "penny",
  "nickel",
  "quarter",
  "dime",
  "quarter",
  "dime",
  "penny",
  "dime",
  "dime",
  "quarter",
  "penny",
  "penny",
  "nickel",
  "nickel",
  "quarter",
  "nickel",
  "quarter",
  "dime",
  "quarter",
  "penny",
  "penny",
  "penny",
  "nickel",
  "nickel",
  "quarter",
  "penny",
  "quarter",
  "quarter",
  "penny",
  "nickel",
  "dime",
  "penny",
  "quarter",
  "nickel",
  "dime",
  "penny",
  "penny",
  "quarter",
  "penny",
  "penny",
  "dime",
  "nickel",
  "dime",
  "penny",
  "dime",
  "nickel",
  "nickel",
  "dime",
  "dime",
  "penny",
  "nickel",
  "penny",
  "dime",
  "dime",
  "nickel",
  "dime",
  "dime",
  "penny",
  "penny",
  "dime",
  "penny",
  "nickel",
  "quarter",
  "nickel",
  "quarter",
  "quarter",
  "penny",
  "nickel",
  "penny",
  "quarter",
  "nickel",
  "nickel",
  "quarter",
  "penny",
  "penny",
  "nickel",
  "nickel",
  "penny",
  "penny",
  "nickel",
  "quarter",
  "nickel",
  "dime",
  "nickel",
  "nickel",
  "penny",
  "quarter",
  "dime",
  "dime",
  "nickel",
  "dime",
  "nickel",
  "nickel",
  "dime",
  "quarter",
  "quarter",
  "nickel",
  "penny",
  "dime",
  "dime",
  "dime",
  "dime",
  "quarter",
  "nickel",
  "nickel",
  "dime",
  "nickel",
  "quarter",
  "nickel",
  "dime",
  "quarter",
  "nickel",
  "dime",
  "quarter",
  "quarter",
  "penny",
  "quarter",
  "nickel",
  "dime",
  "quarter",
  "penny",
  "penny",
  "nickel",
  "nickel",
  "quarter",
  "dime",
  "penny",
  "dime",
  "dime",
  "quarter",
  "dime",
  "penny",
  "quarter",
  "penny",
  "penny",
  "nickel",
  "nickel",
  "nickel",
  "penny",
  "penny",
  "quarter",
  "penny",
  "penny",
  "quarter",
  "dime",
  "quarter",
  "nickel",
  "quarter",
  "nickel",
  "penny",
  "penny",
  "penny",
  "dime",
  "dime",
  "dime",
  "dime",
  "nickel",
  "dime",
  "quarter",
  "nickel",
  "dime",
  "nickel",
  "dime",
  "dime",
  "penny",
  "dime",
  "quarter",
  "nickel",
  "penny",
  "nickel",
  "penny",
  "penny",
  "quarter",
  "dime",
  "nickel",
  "nickel",
  "nickel",
  "penny",
  "nickel",
  "dime",
  "penny",
  "quarter",
  "quarter",
  "dime",
  "quarter",
  "penny",
  "nickel",
  "nickel",
  "penny",
  "dime",
  "dime",
  "nickel",
  "nickel",
  "dime",
  "penny",
  "nickel",
  "penny",
  "quarter",
  "dime",
  "nickel",
  "dime",
  "penny",
  "penny",
  "quarter",
  "dime",
  "quarter",
  "penny",
  "penny",
  "nickel",
  "quarter",
  "quarter",
  "quarter",
  "dime",
  "penny",
  "dime",
  "dime",
  "dime",
  "quarter",
  "penny",
  "penny",
  "dime",
  "quarter",
  "dime",
  "penny",
  "quarter",
  "dime",
  "dime",
  "dime",
];

let penny = 0;
let nickel = 0;
let dime = 0;
let quarter = 0;

// sort total amnt of each coin
for (let i = 0; i < purse.length; i++) {
  switch (purse[i]) {
    case "penny":
      penny++;
      break;
    case "nickel":
      nickel++;
      break;
    case "dime":
      dime++;
      break;
    case "quarter":
      quarter++;
      break;
  }
}

console.log(`You have ${penny} pennies.
You have ${nickel} nickels.
You have ${dime} dimes.
You have ${quarter} quarters.`);

// Convert the coins to total dollars
let totalDollars = penny * 0.01 + nickel * 0.05 + dime * 0.1 + quarter * 0.25;

// Display the total amount in console
console.log(`Total amount: $${totalDollars.toFixed(2)}`);

//#endregion
