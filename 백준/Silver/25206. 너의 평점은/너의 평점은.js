const input = require('fs')
  .readFileSync(process.platform === 'linux' ? '/dev/stdin' : '예제.txt')
  .toString()
  .trim()
  .split('\n');

const subjectEvaluation = {
  'A+': 4.5,
  A0: 4.0,
  'B+': 3.5,
  B0: 3.0,
  'C+': 2.5,
  C0: 2.0,
  'D+': 1.5,
  D0: 1.0,
  F: 0.0,
};
let totalWeightedScore = 0;
let totalCredits = 0;
for (let i = 0; i < input.length; i++) {
  const [_, credit, rating] = input[i].split(' ');
  if (rating !== 'P') {
    totalCredits += Number(credit);
    totalWeightedScore += Number(credit) * subjectEvaluation[rating.trim()];
  }
}
console.log(totalWeightedScore / totalCredits);
