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
// "use strict";
// username = "Ashok";
// console.log(username);

function myFunction(userName) {
  // the username is a parameter
  console.log("My name is " + userName);
}
myFunction("Ashok");
myFunction("lahari");
myFunction("sirisetty"); //these are arguments
//the above line we can call it as calling or invoking or running the function.

// writing the function in function declaration way
function describeCountry(country, population, capitalcity) {
  return `${country} has ${population} million and its capital city is ${capitalcity} `;
}
const countryDetails = describeCountry("India", 50, "Delhi");
const Us = describeCountry("America", 33, "washington");
const london = describeCountry("canada", 40, "london");

console.log(countryDetails, Us, london);

// writing the function in function expression way
const describeCountry1 = function (country, population, capitalcity) {
  return `${country} has ${population} million and its capital city is ${capitalcity} `;
};
const countryDetails1 = describeCountry("India", 50, "Delhi");
const Us1 = describeCountry("America", 33, "washington");
const london1 = describeCountry("canada", 40, "london");

console.log(countryDetails1, Us1, london1);
// console.log(describeCountry1);

// arrow functions
const calcAge = (birthYear) => 2037 - birthYear;
const age = calcAge(2000);
console.log(age);

// challenge using function declaration
function percentageOfWorld1(population) {
  return (population / 7900) * 100;
}
const indPopulation = percentageOfWorld1(1441);
const usPopulation = percentageOfWorld1(300);
const canadaPopulation = percentageOfWorld1(400);

console.log(indPopulation);
console.log(usPopulation);
console.log(canadaPopulation);

// challenge using function expression

const percentageOfWorld2 = function (population) {
  return (population / 7900) * 100;
};
const indPopulation1 = percentageOfWorld2(1441);
const usPopulation1 = percentageOfWorld2(45);
const canadaPopulation1 = percentageOfWorld2(55);

console.log(indPopulation1);
console.log(usPopulation1);
console.log(canadaPopulation1);

// challenge using arrow function

const percentageOfWorld3 = (population) => (population / 7900) * 100;

const indPopulation2 = percentageOfWorld3(1441);
const usPopulation2 = percentageOfWorld3(45);
const canadaPopulation2 = percentageOfWorld3(55);

console.log(indPopulation2);
console.log(usPopulation2);
console.log(canadaPopulation2);

// calling another function example

function describePopultion(population, country) {
  const percentage = percentageOfWorld1(population);
  return `${country} has ${population} million people, whih is about ${percentage}% of the world`;
}
const indPopulation3 = describePopultion(1441, "India");
const usPopulation3 = describePopultion(45, "vhima");
const canadaPopulation3 = describePopultion(55, "canada");

console.log(indPopulation3);
console.log(usPopulation3);
console.log(canadaPopulation3);

function calcAverage(score1, score2, score3) {
  const avgScore = (score1 + score2 + score3) / 3;
  return avgScore;
}

// const scoreDolphins = calcAverage(44, 23, 71);
// const scoreKoalas = calcAverage(65, 54, 49);
const scoreDolphins = calcAverage(85, 54, 41);
const scoreKoalas = calcAverage(23, 34, 27);
console.log(scoreDolphins, scoreKoalas);
function checkWinner(avgDolphins, avgKoalas) {
  if (scoreDolphins > 2 * scoreKoalas) {
    console.log(`Dolphins win ${scoreDolphins} vs.${scoreKoalas}`);
  } else if (scoreKoalas > 2 * scoreDolphins) {
    console.log(`Kolalas win ${scoreKoalas} vs.${scoreDolphins}`);
  } else {
    console.log("No team wins");
  }
}
checkWinner(scoreDolphins, scoreKoalas);

// ARRAYS

const friend1 = "Ashok";
const friends2 = "Shiva";
const friend3 = "Ram";

const friends = ["Ashok", "Shiva", "Ram"];

const friendss = new Array("Ashok", "Shiva", "Ram");
console.log(friends, friendss);

const population = ["india", "japan", "malesia", "thailand"];
console.log(population);
console.log(population.length === 4);

const percentages = [
  percentageOfWorld1(333),
  percentageOfWorld1(450),
  percentageOfWorld1(1441),
];

console.log(percentages);

friends.push("Raju"); // push is a one method it adds to the last element of the array and basically this push and unshift return the length
console.log(friends);
const newlength = friends.unshift("teja"); // unshift is a one method it adds to the first element of the array
console.log(friends);
console.log(newlength); //testing the will it returning the length or not

//REMOVE elements

const newtest = friends.pop(); //pop method removes the last element from the array and pop returns the element that is removed
console.log(friends);
console.log(newtest); //testing what the pop method is returing
const newlength1 = friends.shift(); // shift is a one method it removes to the first element of the array
console.log(friends);
console.log(newlength1); //testing what the shift method is returing nd shift returns the element that is removed

// The below indexOf method tells the position of the element in the array

console.log(friends.indexOf("Ashok"));
console.log(friends.indexOf("bob")); //it returns -1 if element is not found.

// The below include method tells the position of the element in the array introduced in es-6 and return true and false and it also checks like strict equality
console.log(friends.includes("Ashok"));
console.log(friends.includes("bob"));

function calcTip(bill) {
  if (bill >= 50 && bill <= 300) {
    const tip = (bill * 15) / 100;
    return tip;
  } else {
    const tip = (bill * 20) / 100;
    return tip;
  }
}

console.log(calcTip(500));

const bills = [125, 555, 44];

const tip = [calcTip(bills[0]), calcTip(bills[1]), calcTip(bills[2])];
console.log(tip);

const total = [
  bills[0] + calcTip(bills[0]),
  bills[1] + calcTip(bills[1]),
  bills[2] + calcTip(bills[2]),
];
console.log(total);

// OBJECT
const ashok = {
  firstName: "Ashok",
  lastName: "sirisetty",
  age: 26,
  friends: ["lingesh", "ravana", "ramu"],
};
console.log(ashok);
// push the data into object
((ashok.location = "banglore"),
  (ashok.mailid = "ashok123@gmail.com"),
  console.log(ashok));

console.log(
  `${ashok.firstName} has ${ashok.friends.length} friends, and his best friend is called ${ashok.friends[1]}`,
);

const myCountry = {
  country: "India",
  capital: "Delhi",
  language: "Hindi",
  population: 100,
  neighbours: ["bangladesh", "china", "nepal"],
  describe: function () {
    console.log(
      `${this.country} has ${this.population} millio ${this.language}-speaking people, ${this.neighbours.length} neighbouring countries and capital called ${this.capital}`,
    );
  },

  checkIsland: function () {
    this.isIsland = this.neighbours.length > 0 ? false : true;
  },
};
console.log(
  `${myCountry.country} has ${myCountry.population} millio ${myCountry.language}-speaking people, ${myCountry.neighbours.length} neighbouring countries and capital called ${myCountry.capital}`,
);
myCountry.population = 2 + myCountry.population;
myCountry["population"] = myCountry.population - 2;
console.log(myCountry);
myCountry.describe();
myCountry.checkIsland();
console.log(myCountry);

const mark = {
  fullName: "nikolas mark",
  mass: 62,
  height: 2,
  calcBmi: function () {
    this.bmi = this.mass / (this.height * this.height);
    return this.avgScorebmi;
  },
};
const john = {
  fullName: "nikolas john",
  mass: 65,
  height: 1.5,

  calcBmi: function () {
    this.bmi = this.mass / (this.height * this.height);
    return this.bmi;
  },
};

mark.calcBmi();
john.calcBmi();

if (mark.bmi > john.bmi) {
  console.log(
    `${mark.fullName}'s BMI (${mark.bmi}) is higher than ${john.fullName}'s BMI (${john.bmi}) `,
  );
} else {
  console.log(
    `${john.fullName}'s BMI (${john.bmi}) is higher than ${mark.fullName}'s BMI (${mark.bmi}) `,
  );
}

// let x = "5";
// let y = x++ + ++x;
// console.log(x, y);

for (i = 1; i <= 50; i++) {
  console.log(`voter number ${i} is currently voting`);
}

const listOfNeighbours = [
  ["canada", "mexico"],
  ["spain"],
  ["norway", "swedan", "russia"],
];

for (i = 0; i < listOfNeighbours.length; i++) {
  for (j = 0; j < listOfNeighbours[i].length; j++) {
    console.log(`neighbour:${listOfNeighbours[i][j]}`);
  }
}

const billss = [22, 295, 176, 440, 37, 105, 10, 1100, 86, 52];
const tips = [];
const totalss = [];
for (i = 0; i < billss.length; i++) {
  tips.push(calcTip(billss[i]));
  totalss.push(billss[i] + tips[i]);
}
console.log(tips);
console.log(totalss);
function average(arr) {
  let tot = 0;
  for (i = 0; i < arr.length; i++) {
    tot = tot + arr[i];
  }
  const avg = tot / arr.length;
  return avg;
}
console.log(average(billss));
console.log(average(totalss));
