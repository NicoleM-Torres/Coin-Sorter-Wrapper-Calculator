//VARIABLES
let coin_arr = ["pennies", "nickles", "dimes", "quarters"];
let coinVal_arr = [0.01, 0.05, 0.1, 0.25];
let coinAmount_arr = [125, 75, 78, 45];
let wrapper_arr = [50, 40, 50, 40];
let totalVal_arr = [0, 0, 0, 0];

//#region Coin Wrapper

//Calculate each type of coin in dollars
/* Iterates through each coin, stores it in "totalVal_arr" and displays in console */
for (let i = 0; i < coin_arr.length; i++) {
  totalVal_arr[i] = coinAmount_arr[i] * coinVal_arr[i]; //multiply coinAmount_arr by conVal_arr
  console.log(`${coin_arr[i]} value: $${totalVal_arr[i].toFixed(2)}`); //toFixed rounds up two 2 decimal points
} // END OF FOR LOOP

//Calculate total value combined of coins
/* adds up elements in totalVal_arr to get totalValueCombined */
let totalValueCombined = 0;
for (let i = 0; i < totalVal_arr.length; i++) {
  totalValueCombined += totalVal_arr[i];
}

//Sort Display # amount of wrappers needed

for (let i = 0; i < coin_arr.length; i++) {
  /* divides coin amount & wrapper capacity Math.ceil rounds up*/
  let wrappersNeeded = Math.ceil(coinAmount_arr[i] / wrapper_arr[i]); //stores result
  console.log(`Wrappers needed for ${coin_arr[i]}: ${wrappersNeeded}`); //display
}

//Display to console total amount of coins in dollars
console.log(`Total value combined of coins: $${totalValueCombined.toFixed(2)}`);

//#endregion
