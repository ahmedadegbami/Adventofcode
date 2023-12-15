import fs from "fs";

const input = fs.readFileSync("./day3/input.txt").toString();

const data = input.split("\n");

let total = 0;
const asterikMap = [];

for (let lineIndex = 0; lineIndex < data.length; lineIndex++) {
  let numbers = [];
  let match;
  const line = data[lineIndex];
  const numberCheckerRegex = /\d+/g;
  while ((match = numberCheckerRegex.exec(line)) !== null) {
    //https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/RegExp/exec
    numbers.push({
      value: match[0],
      firstIndex: match.index,
      lastIndex: numberCheckerRegex.lastIndex,
    });
  }

  for (const number of numbers) {
    for (let y = lineIndex - 1; y <= lineIndex + 1; y++) {
      for (let x = number.firstIndex - 1; x <= number.lastIndex; x++) {
        if (y >= 0 && y < data.length && x >= 0 && x < data[lineIndex].length) {
          if (data[y][x] == "*") {
            asterikMap.push({ x, y, number: parseInt(number.value) });
          }
        }
      }
    }
  }
}

for (let y = 0; y < data.length; y++) {
  for (let x = 0; x < data[y].length; x++) {
    let selected = asterikMap.filter((el) => el.x == x && el.y == y);
    if (selected.length == 2) {
      let nums = selected.map((el) => el.number);
      total += nums[0] * nums[1];
    }
  }
}

console.log(total);
