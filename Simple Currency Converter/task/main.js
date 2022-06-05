/* main.js
 * Simple Currency Calculator
 * Written by Natasha Graham
 * 2022-05-24
 */

do {
    let currencies = {"USD": 1.0, "JPY": 113.5, "EUR": 0.89, "RUB": 74.36, "GBP": 0.75};

    console.log("Welcome to Currency Converter!");
    console.log(`1 USD equals  ${currencies["USD"]} USD
    1 USD equals  ${currencies["JPY"]} JPY
    1 USD equals  ${currencies["EUR"]} EUR
    1 USD equals  ${currencies["RUB"]} RUB
    1 USD equals  ${currencies["GBP"]} GBP
    I can convert USD to these currencies: JPY, EUR, RUB, USD, GBP
    What do you want to do?
    1-Convert currencies 2-Exit program`);

    let choice = prompt();

    if (choice == 2) {
        console.log("Have a nice day!");
        break;
    }
    else if(choice == 1) {
        while(true) {
            console.log("What do you want to convert?");
            let curr1 = prompt("From: ");
            if (!currencies.includes(curr1.toUpperCase())) {
                console.log("Unknown Currency");
                continue;
            }

            let curr2 = prompt("To: ");
            if (!currencies.includes(curr2.toUpperCase())) {
                console.log("Unknown Currency");
                continue;
            }

            let amt = prompt("Amount: ");
            amt = Number(amt)
            if (amt !== amt) {
                console.log("The amount has to be a number");
                continue;
            }
            if (amt < 1) {
                console.log("The amount cannot be less than 1");
                continue;
            }

            let res = amt / currencies[curr1.toUpperCase()] * currencies[curr2.toUpperCase()];
            console.log(`Result: ${amt} ${curr1.toUpperCase()} equals ${res} ${curr2.toUpperCase()}`);
            break;
        }
    }
    else {
        console.log("Unknown input");
        continue;
    }
} while(true);
