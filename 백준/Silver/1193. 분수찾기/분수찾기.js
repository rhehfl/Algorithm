const n = Number(
  require('fs')
    .readFileSync(process.platform === 'linux' ? '/dev/stdin' : '예제.txt')
    .toString()
    .trim()
);
let counter = 1;
let direction = 'forward';

for (let i = 1; i <= n; i++) {
  let x;

  if (direction === 'backward') {
    x = 1;
    for (let y = i; y > 0; y--) {
      if (counter === n) {
        console.log(`${x}/${y}`);
        return;
      }
      x++;
      counter++;
    }
    direction = 'forward';
    continue;
  }

  if (direction === 'forward') {
    x = i;
    for (let y = 1; y <= i; y++) {
      if (counter === n) {
        console.log(`${x}/${y}`);

        return;
      }
      x--;
      counter++;
    }
    direction = 'backward';
    continue;
  }
}
