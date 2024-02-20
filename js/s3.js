'use strict';

console.log(
  ` %c
Section 3 - Js Fundamentals 2 - Strict Mode
`,
  'color:#F72798;font-size: 1rem;'
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
  'color:#F72798'
);

//////////////////////////////////////////////////////////////
/////////////////////////////////////////////////////////////
console.log(
  ` %c
47 - Loops, arrays, Breaking and continuing - LA
`,
  'color:yellow;font-size:1rem'
);

// Defining a new array
const mistressLA = [
  'Gina',
  'Lik',
  2024 - 2000,
  'mistress',
  ['far', 'sca', 'ass'],
  true,
];

// Setting the condition is the most important
// Read valaues from array
for (let i = 1; i < mistressLA.length; i++) {
  console.log(mistressLA[i], typeof mistressLA[i]);
}

// Create a new array which creates a type for all the elements

//step 1 create a new array

console.log(
  `%c
Creating a new array with the types of variable sin mistressLA
`,
  'color:#FF55BB;font-size:14px;font-style:italic'
);

const typesLA = [];
for (let i = 1; i < mistressLA.length; i++) {
  //reading from mistressLA
  console.log(mistressLA[i], typeof mistressLA[i]);

  // In loop create new array with types
  // typesLA[i] = typeof mistressLA[i]
  typesLA.push(typeof mistressLA[i]);
}
// Printing the new variable
console.log(
  `%c
Printing new array typesLA[]
`,
  'color:green'
);
console.log(typesLA);

console.log(
  `%c
Practical example of a new array
`,
  'color:#FF55BB;font-size:14px;font-style:italic'
);

const yearsLA = [1991, 2007, 1969, 2000];
const agesLA = [];
for (let i = 0; i < yearsLA.length; i++) {
  const nowYear = new Date().getFullYear();
  agesLA.push(nowYear - yearsLA[i]);
}
console.log(agesLA);

//Print out the elements
for (let i = 0; i <= agesLA.length; i++) {
  console.log(agesLA[i], typeof agesLA[i]);
}

console.log('ya')