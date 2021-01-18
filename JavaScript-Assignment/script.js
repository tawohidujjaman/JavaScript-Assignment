// "use strict"

console.log(`JavaScript Assignmet-1`);

// let miles = prompt("Please enter miles:");
let miles = 50;
let kilometers = miles * 1.60934;
console.log(`${miles} miles is equal to ${kilometers} kilometers.`);


console.log(`JavaScript Assignmet-2`);


const ageCalculator = function (birthYear) {
    let currentYear = 2021;
    let age = currentYear - birthYear;
    return age;
}

console.log(`I'm ${ageCalculator(1999)} years old.`);


console.log(`JavaScript Assignmet-3`);

// bills and tips calculator

const tipsCalculator = function (bill) {
  return bill >= 100 && bill <= 1000 ? bill * 0.10 : bill * 0.08;
}

const bills = [490, 850, 880]; 

const tips = [tipsCalculator(bills[0]), tipsCalculator (bills[1]), tipsCalculator(bills[2])];

const total = [bills[0]+ tips [0], bills[1] +
tips[1], bills[2] + tips[2]];
console.log(bills, tips , total);

console.log(`JavaScript Assignmet-4`);


const myFriends = [
  "Sojib",
   "Waskoron", 
   "Ridoy",
   "Nahid",
   "Shohel"
]

for (let increment = 0; increment < myFriends.length; increment++) {
  console.log(myFriends[increment]);
}


console.log(`JavaScript Assignmet-5`);


function leapyear(year) {

  return (year % 100 === 0) ? (year % 400 === 0) : (year % 4 === 0);
}

console.log(leapyear(1900));
console.log(leapyear (2024));