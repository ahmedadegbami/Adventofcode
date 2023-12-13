import fs from "fs";

const input = fs.readFileSync("./day2/input.txt").toString();

let total = 0;

for (let line of input.split("\n")) {
  let valid = true;
  const [gameId, values] = line.split(": ");
  const subsets = values.split("; ");

  for (let set of subsets) {
    const cubeBalls = {
      red: 12,
      green: 13,
      blue: 14,
    };

    let cubes = set.split(", ");
    for (const cube of cubes) {
      let [number, color] = cube.split(" ");
      cubeBalls[color] -= parseInt(number);

      for (let key of Object.keys(cubeBalls)) {
        if (cubeBalls[key] < 0) {
          valid = false;
          break;
        }
      }
    }
  }

  if (valid) {
    total += parseInt(gameId.split(" ")[1]);
  }
}

console.log(total);
