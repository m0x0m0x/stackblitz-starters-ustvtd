// Code for all the challenges

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

for (let i = 0; i < 10; i++) {
  tips.push(calcTip(bills[i]));
  totals.push(bills[i] + calcTip(bills[i]));
}
console.log(tips, totals);

// Bonus Challenge
function calcAverage(arr) {
  let sum = 0;
  for (let i = 0; i < arr.length; i++) {
    sum = sum + arr[i];
  }
  return sum / arr.length;
}
console.log(calcAverage(totals));