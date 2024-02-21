// Code for all the challenges

console.log(
  ` %c
s3c.js - Section 3 coding challenges
`,
  "color:#F72798;font-size: 1rem;"
);
console.log(
  ` %c
  ⡇⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⣠⠔⠊⠉⠉⠀⠀⠉⠉⠑⠲⢶⣫⣵⣲⣿⡛⠉⠁⠀⠀⠀⠀⠀⠀⠀⣀⠀⠀⢸
  ⣇⡤⠔⠒⠤⢄⡀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⢀⡴⠊⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠉⠓⢤⣀⣠⠤⠒⠚⠉⠀⢀⣀⢼
  ⡏⠀⠀⠀⠀⠀⠈⢳⣄⠀⠀⠀⠀⠀⠀⠀⢠⠎⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⢀⣰⣷⡀⠀⠀⠀⠀⠀⠙⢦⣀⠤⠴⠒⠉⢁⣀⣸
  ⡿⢗⣲⣦⣤⡀⠀⠈⠻⣧⡀⠀⠀⠀⠀⣤⠇⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⢠⠏⠀⠃⠀⡄⠀⠀⠀⠀⠀⠀⢣⡤⠤⠒⠋⣩⣤⣾
  ⣇⢴⣿⢹⠻⣿⣿⣦⡀⠈⢷⣄⣦⣶⣿⠏⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⢀⡞⠀⡇⡀⡆⢳⠀⠀⠀⠀⠀⠀⠀⢣⠀⠀⠀⣾⠁⢸
  ⣇⡆⣇⡸⠖⠋⠉⠉⠉⠉⠘⠛⠯⢭⡏⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⢀⡜⠀⡸⢡⡧⡇⠘⠄⠀⠀⠀⠀⠀⠀⠈⡇⠀⠀⢿⠀⢸
  ⣿⢠⠋⠀⠀⢠⠀⠀⠀⠀⠀⠀⠀⡞⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⣠⠎⢀⡴⢡⣾⠇⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⢸⡀⠀⣼⠀⢸
  ⡿⡆⠀⠀⠀⠀⡇⠀⠀⠀⠀⠀⡜⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⢀⡴⠊⢁⠴⠋⠀⣾⡟⠀⡆⠀⠀⠀⠀⠀⠀⠀⠀⠀⠈⡇⠀⢿⠀⢸
  ⡇⢀⠀⠀⠀⠀⡇⠀⠀⠀⠀⡰⠁⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⡠⠋⢀⡜⠁⠀⠀⠘⠛⠁⢰⠁⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⢡⠀⣾⣤⣼
  ⣗⣾⠀⠀⠀⠀⡅⠀⠀⠀⢠⠃⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⡴⠁⢀⡞⠀⠀⠀⠀⠀⠀⠀⡇⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠸⡄⠀⠀⢸
  ⡇⠸⠀⠀⠀⢸⡇⢀⠀⠀⡎⠀⠀⠀⠀⠀⠀⠀⠀⠀⢀⡜⠁⠀⣜⣀⣀⢀⡴⢒⡤⠖⠊⢃⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⡇⠀⠀⢸
  ⡇⡀⠀⢸⡄⢸⢷⣌⠀⠼⠀⠀⠀⠀⠀⠀⠀⠀⠀⢀⡞⠀⠀⡼⠁⠀⠰⢋⡴⢯⠀⠀⠀⠸⡀⠀⠰⡀⠀⠀⠀⠀⠀⠀⠀⠀⢠⠀⠀⢸
  ⡇⡇⠀⠀⠀⠸⢸⠀⢉⡇⠀⠀⠀⠀⠀⠀⠀⠀⢀⡞⠀⢠⣾⣁⡤⠒⠊⠁⢀⡀⠑⠦⡀⠀⢣⠀⠀⢣⠀⠀⠀⠀⠀⠀⠀⠀⠸⠀⠀⢸
  ⡇⠇⠀⠀⠀⠀⢸⠀⢸⠀⠀⠀⠀⠀⠀⠀⠀⠀⡜⠀⢀⡼⡏⠀⠈⠲⣄⠀⠀⠙⢆⠀⠈⠑⢬⡦⠀⠈⠂⠀⠀⠀⠀⠀⠀⠀⠀⡄⠀⢸
  ⡇⠘⠀⠀⠀⠐⡞⠀⡄⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⢀⢾⣼⢷⣤⣤⣤⣬⣷⣤⡄⠀⠃⠀⠀⠀⠘⡆⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠁⠀⢸
`,
  "color:#F72798"
);

/*
Coding Excercise 8 : Chanllenge #4
*/

console.log(
  ` %c
Coding Excercise 8 : Chanllenge #4
`,
  "color:#15F5BA;font-size:1rem"
);
const calcTip = function (bill) {
  return bill >= 50 && bill <= 300 ? bill * 0.15 : bill * 0.2;
};

const bills = [22, 295, 176, 440, 37, 105, 10, 1100, 86, 52];
const tips = [];
const totals = [];

for (let i = 0; i < bills.length; i++) {
  const tip = calcTip(bills[i]);
  tips.push(tip);
  totals.push(tip + bills[i]);
}
console.log(bills, tips, totals);

// Bonus Challenge
function calcAverage(arr) {
  let sum = 0;
  for (let i = 0; i < arr.length; i++) {
    sum = sum + arr[i];
  }
  return sum / arr.length;
}
console.log("calcAverage Function", calcAverage(totals));

// Second way of doing this
const calcAverage2 = function (arr) {
  let sum = 0;
  for (let i = 0; i < arr.length; i++) {
    sum = +arr[i];
  }
  console.log("Sum of array passed in ", sum);
  return sum / arr.length;
};
console.log("calcAverage2 Function", calcAverage2(totals));
