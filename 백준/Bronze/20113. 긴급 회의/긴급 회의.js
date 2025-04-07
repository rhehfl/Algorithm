const input = require('fs')
  .readFileSync(process.platform === 'linux' ? '/dev/stdin' : '예제.txt')
  .toString()
  .trim()
  .split('\n');

const voting = input[1].split(' ').map(Number);
const voteMap = {};
let maxVote = -Infinity;
let expulsion = '';
let voteCounter = 0;
for (let i = 0; i < input[0]; i++) {
  const vote = voting[i];
  if (vote) {
    voteMap[vote] = voteMap[vote] ? voteMap[vote] + 1 : 1;
  }
}

for (vote in voteMap) {
  if (maxVote < voteMap[vote]) {
    maxVote = voteMap[vote];
    expulsion = vote;
  }
}

const voteValues = Object.values(voteMap);

for (let j = 0; j < voteValues.length; j++) {
  if (voteValues[j] === Math.max(...voteValues)) {
    voteCounter++;
  }
}

console.log(voteCounter > 1 ? 'skipped' : expulsion);
