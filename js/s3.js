"use strict";

console.log(
  ` %c
Section 3 - Js Fundamentals 2 - Strict Mode
`,
  "color:#F72798;font-size: 1rem;"
);
console.log(
  ` %c
  ⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⣀⠤⠖⠶⠶⠶⠶⠦⠤⠠⣿⣿⡓⠶⠶⢶⣶⣶⣦⣤⣤⣤⣤⣀⣀
  ⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⣀⣄⣀⠤⠒⠉⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠈⠉⠓⢢⣸⠛⠻⣯⣿⠏⠉⠛⢻
  ⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⣀⣀⣀⠠⣿⣋⡁⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⢨⡿⠀⠀⠀⠙⣷⣄⠀⠀
  ⠀⠀⠀⠀⠀⠀⠀⠀⣀⡤⢴⣶⠚⠉⠉⠀⠀⠀⠀⠀⠀⠀⠉⠉⠁⠐⠒⠒⠠⠤⠤⠀⣀⣀⣀⠀⠀⠀⠀⠀⣸⡇⢠⠖⠒⠲⣾⠈⠳⡄
  ⠀⠀⠀⠀⠀⡠⠖⠙⠛⠒⠿⣋⡉⢢⡀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠉⠉⠉⣐⠶⠋⠳⣧⠒⠒⠚⠉⡆⠀⢹
  ⠀⠀⢀⡴⠋⠑⡶⠀⠀⠀⠀⠀⠀⠈⠀⠀⠐⠛⠯⠭⣉⣉⡩⠗⣂⡠⠔⠒⠒⣢⠤⢀⣀⠤⠄⠒⠈⠉⠀⠀⠀⠀⢰⠀⠀⠀⠀⡇⣸⣿
  ⣠⣴⡟⠀⣠⠞⠒⠤⠄⣀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠈⠉⠐⠒⢊⡡⠔⠊⠁⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⢸⠀⠀⠀⢠⣧⣿⣿
  ⣯⡀⠑⠒⠁⠀⠀⠀⠀⠀⠈⠉⠐⠒⠤⠄⣀⠴⠂⠀⠀⠀⠐⠒⠢⠤⡂⠁⠀⠀⠀⠀⠀⠀⠀⣠⣶⣖⣄⠀⠀⠀⢸⠀⠀⢀⣼⣿⣿⡿
  ⢾⣿⡦⣄⡀⠀⠀⠀⠀⠀⠀⠀⠀⠀⢀⠞⠁⠀⠀⠀⠀⠀⠀⠀⠀⠀⢸⠄⠀⠀⠀⣀⣀⣤⣾⣿⡏⢻⡜⡀⠀⣠⣼⣤⠞⣋⠥⢿⡿⠁
  ⢸⣿⡇⠀⠸⡷⢶⣤⢄⣀⡀⠀⠀⠀⠈⠒⠂⠤⠤⣄⣀⣀⣀⣀⣠⣤⣮⣤⣤⣾⢿⣿⣿⣿⡟⣇⣿⣾⢷⣧⣾⠟⢋⠔⠋⠈⠉⠁⠀⠀
  ⡿⣜⣇⣀⡤⠗⠤⢄⡉⠛⠛⠛⠻⢶⡒⠠⠤⢤⣄⢀⣹⣍⣉⣉⣉⣁⣀⠤⠔⠛⢹⣯⣽⣿⢛⣿⣿⣼⢈⠋⡠⠊⠁⠀⠀⠀⠀⠀⠀⠀
  ⠑⢌⣻⢄⡀⠀⣠⣶⣿⣽⣖⡢⠄⣀⢱⠀⠀⢾⠉⣷⠀⠀⣳⠤⠤⢿⠀⠀⠀⣴⠟⢉⣿⠈⡍⣍⢋⡿⠼⠋⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀
  ⠀⠀⠉⠓⠯⣕⠻⢷⣿⡿⠊⠁⠀⠀⢩⠃⠀⡤⠿⢿⣶⣾⣯⣏⣩⣿⠀⠀⢸⣿⡶⢾⢹⢼⡿⢃⡾⠁⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀
  ⠀⠀⠀⠀⠀⠀⠉⠒⠠⢍⣑⠒⠠⠴⠯⣤⣴⣚⣒⣒⣒⣒⣶⣿⣿⡧⠐⠊⠁⠀⠀⢸⣀⣾⣷⠟⠁⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀
  ⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠉⠑⠒⠤⠤⢀⣀⣀⣀⣀⣉⣉⣩⣽⣞⠠⠤⠤⠒⢊⠉⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀

  https://emojicombos.com/dot-ascii-art

`,
  "color:#F72798"
);

//////////////////////////////////////////////////////////////
/////////////////////////////////////////////////////////////
// console.log(
//   ` %c
// 47 - Loops, arrays, Breaking and continuing - LA
// `,
//   "color:yellow;font-size:1rem"
// );

// // Defining a new array
// const mistressLA = [
//   "Gina",
//   "Lik",
//   2024 - 2000,
//   "mistress",
//   ["far", "sca", "ass"],
//   true,
// ];

// // Setting the condition is the most important
// // Read valaues from array
// for (let i = 1; i < mistressLA.length; i++) {
//   console.log(mistressLA[i], typeof mistressLA[i]);
// }

// // Create a new array which creates a type for all the elements

// //step 1 create a new array

// console.log(
//   `%c
// Creating a new array with the types of variable sin mistressLA
// `,
//   "color:#FF55BB;font-size:14px;font-style:italic"
// );

// const typesLA = [];
// for (let i = 1; i < mistressLA.length; i++) {
//   //reading from mistressLA
//   console.log(mistressLA[i], typeof mistressLA[i]);

//   // In loop create new array with types
//   // typesLA[i] = typeof mistressLA[i]
//   typesLA.push(typeof mistressLA[i]);
// }
// // Printing the new variable
// console.log(
//   `%c
// Printing new array typesLA[]
// `,
//   "color:green"
// );
// console.log(typesLA);

// console.log(
//   `%c
// Practical example of a new array
// `,
//   "color:#FF55BB;font-size:14px;font-style:italic"
// );

// const yearsLA = [1991, 2007, 1969, 2000];
// const agesLA = [];
// for (let i = 0; i < yearsLA.length; i++) {
//   const nowYear = new Date().getFullYear();
//   agesLA.push(nowYear - yearsLA[i]);
// }
// console.log(agesLA);

// //Print out the elements
// for (let i = 0; i <= agesLA.length; i++) {
//   console.log(agesLA[i], typeof agesLA[i]);
// }

// // Continue and break

// console.log(
//   `%c
// Looping and Breaking in loops
// `,
//   "color:#FF55BB;font-size:14px;font-style:italic"
// );

// console.log(`----- ONLY sring----`);
// for (let i = 1; i < mistressLA.length; i++) {
//   console.log("Printing only strings");
//   // This statement is to extract only strings
//   if (typeof mistressLA[i] != "string") continue;
//   // This wont be reached
//   console.log(mistressLA[i], typeof mistressLA[i]);
// }

// // Log nothing after number found
// console.log(`--- BREAK WITH NUMBER ---`);
// console.log(mistressLA);
// for (let i = 0; i < mistressLA.length; i++) {
//   // Break after number found
//   if (typeof mistressLA[i] === "number") break;
//   // This wont be reached
//   console.log(mistressLA[i], typeof mistressLA[i]);
// }

//////////////////////////////////////////////////////////////
/////////////////////////////////////////////////////////////
// console.log(
//   ` %c
// 48 - Looping Backwards and Loop of Loops
// `,
//   "color:yellow;font-size:1rem"
// );

// console.log("hey");

// // Defining a new array
// const mistressLA = [
//   "Gina",
//   "Lik",
//   2024 - 2000,
//   "mistress",
//   ["far", "sca", "ass"],
//   true,
// ];

// for (let i = 0; i < mistressLA.length; i++) {
//   console.log(mistressLA[i]);
// }

// console.log(
//   ` %c
// Reverse Loop
// `,
//   "color:#97FEED;font-size:14px;font-style:italic"
// );

// for (let i = mistressLA.length - 1; i >= 0; i--) {
//   console.log(i, mistressLA[i], typeof mistressLA[i]);
// }

// console.log(
//   ` %c
// === Loop in Loop ===
// `,
//   "color:#97FEED;font-size:14px;font-style:italic"
// );

// // Situation - Need to complete 3 sets of excercises for a total of
// // 30 reps  this will require a loop in loop

// for (let excercise = 1; excercise < 4; excercise++) {
//   console.log(`%c --Startiing excercise ${excercise}`, "color:#F806CC");

//   for (let rep = 1; rep < 5; rep++) {
//     console.log(`%c === Rep ${rep} of ${excercise}`, "color:#FF85B3");
//   }
// }

//////////////////////////////////////////////////////////////
/////////////////////////////////////////////////////////////
console.log(
  ` %c
49 - While Loop - WL
`,
  "color:yellow;font-size:1rem"
);

for (let excercise = 1; excercise < 4; excercise++) {
  console.log(`%c --Startiing excercise ${excercise}`, "color:#F806CC");
}

// While loop
let rep = 1;
let pusy = 1;
while (rep <= 10) {
  console.log(`Bastard do excercise - ${rep}`);

  let pusy = 1;
  while (pusy <= 2) {
    console.log(`Licking Pusy - ${pusy}`);
    pusy++;
  }
  rep++;
}

// Dice rolling randomizer , and then when get 6 then stop
console.log(
  ` %c
 === Dice Roll ===
 `,
  "color:#97FEED;font-size:14px;font-style:italic"
);

//randomizer
let diceWL = Math.trunc(Math.random() * 6) + 1;
console.log(diceWL);

while (diceWL !== 6) {
  console.log(`Rolled: %c${diceWL}`, "color:pink");
  diceWL = Math.trunc(Math.random() * 6) + 1;
}
