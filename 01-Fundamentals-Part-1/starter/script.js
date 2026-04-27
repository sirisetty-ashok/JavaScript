// // let js = "amazing";
// // // if (js === "amazing") alert("js is fun");
// // console.log(40 + 66 + 5 - 7);

// // let countryName = "India";
// // let continent = "Asia";
// // let isBoolean = false;
// // let isIsland = false;
// // let language = "telugu";

// // console.log(countryName, continent, population);
// // console.log(typeof countryName);
// // console.log(typeof population);
// // console.log(typeof isBoolean);
// // console.log(typeof isIsland);
// // console.log(typeof language);
// // let age = "Ashok";
// // age = 32;
// // //   only initilization works in const
// // const birthCountry = "India";
// // console.log(birthCountry);

// // var job = "programmer";
// // job = "teacher";

// // var amount;
// // amount = 1000;

// // const now = 2027;
// // const ageAshok = now - 2000;
// // const agelahari = now - 2003;
// // console.log(ageAshok, agelahari);
// // console.log(ageAshok / 2, ageAshok * 2);

// // const firstName = "Ashok";
// // const lastName = "Siri";
// // console.log(firstName + " " + lastName);

// // x += 10; //x = x + 10'

// // x++; //x = x+1;
// // x++; //x = x-1;
// const population = 100000;
// const halfPoplation = population / 2;
// const newPoplation = population + 1;
// const avgPopulation = 33000000;
// console.log(newPoplation);
// const finpopulation = 6000000;
// console.log(population > finpopulation);
// console.log(avgPopulation < population);

// const description =
//   countryName +
//   " is in " +
//   continent +
//   ", and its " +
//   population +
//   " people speak " +
//   language +
//   ".";
// console.log(description);

// // challenge 1

// let massMark = 78;
// let heightMark = 1.69;
// let massJohn = 92;
// let heightJohn = 1.95;

// let BMIMark = massMark / (heightMark * heightMark);
// let BMIJohn = massJohn / (heightJohn * heightJohn);

// console.log(BMIMark, BMIJohn);
// let markHigherBMI = BMIMark > BMIJohn;
// console.log(markHigherBMI);

// massMark = 95;
// heightMark = 1.88;
// massJohn = 85;
// heightJohn = 1.76;

// BMIMark = massMark / (heightMark * heightMark);
// BMIJohn = massJohn / (heightJohn * heightJohn);

// console.log(BMIMark, BMIJohn);
// markHigherBMI = BMIMark > BMIJohn;
// console.log(markHigherBMI);

// const firstName = "Ashok";
// const lastName = "Sirisetty";
// const job = "engineer";
// const year = 2026;

// const birthYear = 2000;
// const ashok =
//   "I'm " + firstName + ", a " + (year - birthYear) + " years old " + job + "!";
// console.log(ashok);

// const newAshok = `I'm ${firstName} , a ${year - birthYear} year old ${job}`;
// console.log(newAshok);
// console.log(
//   "string with \n\
// multiple \n\
// lines",
// );

// console.log(`string with
// multiple
// lines`);

// const age = 17;
// if (age >= 18) {
//   console.log("Sarah can start driving");
// } else {
//   console.log("sarah is not eligible for driving");
// }

// const countryName = "India";
// const continent = "Asia";
// const language = "chinese";

// const population = 100000;
// const halfPoplation = population / 2;
// const newPoplation = population + 1;
// const avgPopulation = 33000000;
// console.log(newPoplation);
// const finpopulation = 6000000;
// console.log(population > finpopulation);
// console.log(avgPopulation < population);

// const description = `${countryName} is in ${continent} , and its  ${population}  people speak  ${language}  .`;
// console.log(description);

// if (population > avgPopulation) {
//   console.log(`${countryName} population is 22 million above avergae`);
// } else {
//   console.log(`${countryName} population is 22 million below avergae`);
// }

// // // challenge 2

// let massMark = 78;
// let heightMark = 1.69;
// let massJohn = 92;
// let heightJohn = 1.95;

// let BMIMark = massMark / (heightMark * heightMark);
// let BMIJohn = massJohn / (heightJohn * heightJohn);

// console.log(BMIMark, BMIJohn);
// let markHigherBMI = BMIMark > BMIJohn;
// console.log(markHigherBMI);

// massMark = 95;
// heightMark = 1.88;
// massJohn = 85;
// heightJohn = 1.76;

// BMIMark = massMark / (heightMark * heightMark);
// BMIJohn = massJohn / (heightJohn * heightJohn);

// console.log(BMIMark, BMIJohn);
// // markHigherBMI = BMIMark > BMIJohn;
// // console.log(markHigherBMI);

// if (BMIMark > BMIJohn) {
//   console.log("Mark's BMI is higher than john's!");
//   console.log(`Mark's BMI (${BMIMark}) is higher than john's (${BMIJohn})`);
// } else {
//   console.log("John's BMI is higher than Mark's!");
//   console.log(`john's BMI (${BMIJohn}) is higher than Mark's  (${BMIMark})`);
// }

// const inputYear = "2000";
// console.log(Number(inputYear), inputYear);
// console.log(Number(inputYear) + 20);

// console.log(Number("ashok"));
// console.log(typeof NaN);

// console.log("23" + "45" + 5);
// console.log("23" - "45" - 5);

// // Swapping two numbers

// let a = 10;
// let b = 20;
// console.log(a, b);

// let temp = a;
// a = b;
// b = temp;
// console.log(a, b);

// // method 2: destructuring
// [a, b] = [b, a];
// console.log(a, b);

// // method 3: without temp
// a = a + b;
// b = a - b;
// a = a - b;
// console.log(a, b);

// let num = Number(prompt("enter your number"));
// if (num % 2 === 0) {
//   console.log("You entered even number");
// } else {
//   console.log("You entered odd number");
// }
// console.log(num);

// const numNeighbour = Number(
//   prompt(" How many neighbour countries does your country have?"),
// );
// if (numNeighbour === 1) {
//   console.log("Only 1 border!");
// } else if (numNeighbour > 1) {
//   console.log("More than 1 border!");
// } else {
//   console.log("No Borders");
// }

// const hasDriversLicense = true; //A
// const hasGoddVision = true; // B
// console.log(hasDriversLicense && hasGoddVision);
// console.log(hasDriversLicense || hasGoddVision);
// console.log(!hasDriversLicense);

// if (hasDriversLicense && hasGoddVision) {
//   console.log("Sarah is able to drive!");
// } else {
//   console.log("Someone else should drive...");
// }

// const scoreDolphins = (96 + 108 + 89) / 3;
// const scoreKolas = (88 + 91 + 110) / 3;
// if (scoreDolphins > scoreKolas) {
//   console.log("Dolpins's win the tropy");
// } else if (scoreDolphins < scoreKolas) {
//   console.log("Kolalas win the tropy");
// } else {
//   console.log("Both win the tropy");
// }

// switch (language) {
//   case "chinese":
//   case "mandrin":
//     console.log("Most number of native speakers!");
//     break;
//   case "spanish":
//     console.log("2nd place in number of native speakers!");
//     break;
//   case "english":
//     console.log("3rd place!");
//     break;
//   case "hindi":
//     console.log("4th place!");
//     break;
//   case "arabic":
//     console.log("5th most spoken language");
//     break;
//   default:
//     console.log("Great language too");
// }

// const bill = Number(prompt("Enter the bill"));
// if (bill >= 50 && bill <= 300) {
//   const tip = (bill * 15) / 100;
//   console.log(
//     ` the bill was ${bill}, the tip was ${tip}, and the total was ${bill + tip}`,
//   );
// } else {
//   const tip = (bill * 20) / 100;
//   console.log(
//     ` the bill was ${bill}, the tip was ${tip}, and the total was ${bill + tip} `,
//   );
// }

// const bill = Number(prompt("Enter the bill"));

// const tip = bill >= 50 && bill <= 300 ? (bill * 15) / 100 : (bill * 20) / 100;
// console.log(
//   ` the bill was ${bill}, the tip was ${tip}, and the total was ${bill + tip}`,
// );

//  to use strict mode we have to use this
"use strict";
username = "Ashok";
console.log(username);
