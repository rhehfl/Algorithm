const [h, m] = require('fs')
  .readFileSync(process.platform === 'linux' ? '/dev/stdin' : '예제.txt')
  .toString()
  .split(' ')
  .map(Number);

const calcTime = (h, m) => {
  const minAgo = 45;
  let newH = 0,
    newM = 0;

  if (m >= 45) {
    return console.log(h, m - minAgo);
  }

  if (h !== 0) {
    newH = h - 1;
    newM = m + 60 - minAgo;
  } else {
    newH = 23;
    newM = m + 60 - minAgo;
  }
  return console.log(newH, newM);
};

calcTime(h, m);
