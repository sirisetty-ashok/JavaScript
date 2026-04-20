// let js = "amazing";
// // if (js === "amazing") alert("js is fun");
// console.log(40 + 66 + 5 - 7);

let countryName = "India";
let continent = "Asia";
let isBoolean = false;
let isIsland = false;
let language = "telugu";

// console.log(countryName, continent, population);
// console.log(typeof countryName);
// console.log(typeof population);
// console.log(typeof isBoolean);
// console.log(typeof isIsland);
// console.log(typeof language);
let age = "Ashok";
age = 32;
//   only initilization works in const
const birthCountry = "India";
console.log(birthCountry);

var job = "programmer";
job = "teacher";

var amount;
amount = 1000;

const now = 2027;
const ageAshok = now - 2000;
const agelahari = now - 2003;
console.log(ageAshok, agelahari);
console.log(ageAshok / 2, ageAshok * 2);

const firstName = "Ashok";
const lastName = "Siri";
console.log(firstName + " " + lastName);

// x += 10; //x = x + 10'

// x++; //x = x+1;
// x++; //x = x-1;
const population = 100000;
const halfPoplation = population / 2;
const newPoplation = population + 1;
const avgPopulation = 33000000;
console.log(newPoplation);
const finpopulation = 6000000;
console.log(population > finpopulation);
console.log(avgPopulation < population);

const description =
  countryName +
  " is in " +
  continent +
  ", and its " +
  population +
  " people speak " +
  language +
  ".";
console.log(description);

// challenge 1

let massMark = 78;
let heightMark = 1.69;
let massJohn = 92;
let heightJohn = 1.95;

let BMIMark = massMark / (heightMark * heightMark);
let BMIJohn = massJohn / (heightJohn * heightJohn);

console.log(BMIMark, BMIJohn);
let markHigherBMI = BMIMark > BMIJohn;
console.log(markHigherBMI);

massMark = 95;
heightMark = 1.88;
massJohn = 85;
heightJohn = 1.76;

BMIMark = massMark / (heightMark * heightMark);
BMIJohn = massJohn / (heightJohn * heightJohn);

console.log(BMIMark, BMIJohn);
markHigherBMI = BMIMark > BMIJohn;
console.log(markHigherBMI);
