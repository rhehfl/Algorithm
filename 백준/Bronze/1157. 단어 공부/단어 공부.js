const input = require('fs')
  .readFileSync(process.platform === 'linux' ? '/dev/stdin' : '예제.txt')
  .toString()
  .trim();
const lowerString = input.toLocaleLowerCase();
const stringMap = {};
for (let i = 0; i < input.length; i++) {
  stringMap[lowerString[i]] = stringMap[lowerString[i]]
    ? stringMap[lowerString[i]] + 1
    : 1;
}

const values = Object.values(stringMap);
const keys = Object.keys(stringMap);

const maxI = maxIndex(values);
values[maxI];

const maxValues = values.filter((value) => value === values[maxI]).length;

if (maxValues >= 2) {
  console.log('?');
  return '?';
}

console.log(keys[maxI].toLocaleUpperCase());

function maxIndex(array) {
  let max = array[0];
  let maxIndex = 0;
  for (let i = 0; i < array.length; i++) {
    if (max <= array[i]) {
      max = array[i];
      maxIndex = i;
    }
  }
  return maxIndex;
}
