/* main.js
 * Simple Currency Calculator
 * Written by Natasha Graham
 * 2022-05-24
 */


let currencies = {"USD": 1.0, "JPY": 113.5, "EUR": 0.89, "RUB": 74.36, "GBP": 0.75};

console.log("Welcome to Currency Converter!");
console.log(`1 USD equals  ${currencies["USD"]} USD
1 USD equals  ${currencies["JPY"]} JPY
1 USD equals  ${currencies["EUR"]} EUR
1 USD equals  ${currencies["RUB"]} RUB
1 USD equals  ${currencies["GBP"]} GBP
I can convert USD to these currencies: JPY, EUR, RUB, USD, GBP`);

let curr = prompt("Type the currency you wish to convert: USD To: ");
if(!currencies.includes(curr.toUpperCase())) {
    console.log("Unknown currency");
}
else {
    let amt = prompt("Amount: ");
    amt = Number(amt)
    if(amt !== amt) {
        console.log("The amount has to be a number")
    }
    else if (amt < 1) {
        console.log("The amount cannot be less than 1")
    }
    else {
        let res = amt * currencies[curr];
        console.log(`Result: ${amt} USD equals ${res} ${curr.toUpperCase()}`);
    }
}