import fs from "fs";

const input = fs.readFileSync("./day2/input.txt").toString();

let total = 0;

for (let line of input.split("\n")) {
    const cubeBalls = {
      red: 0,
      green: 0,
      blue: 0,
    };

  const [gameId, values] = line.split(": ");
  const subsets = values.split("; ");

  for (let set of subsets) {

    const cubes = set.split(", ");

    for (const cube of cubes) {
      let [number, color] = cube.split(" ");
      const parsedNumber = parseInt(number);
      if (parsedNumber >= cubeBalls[color]) {
        cubeBalls[color] = parsedNumber
      }     
    }
}
let subsetsTotal = 1

for (const cube in cubeBalls){
  subsetsTotal *= cubeBalls[cube]
}
 total += subsetsTotal
}

console.log(total)

