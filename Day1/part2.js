import fs from "fs"

let input = fs.readFileSync("./day1/input.txt").toString()


const numbersObject = {
    one: "o1e",
    two: "t2o",
    three: "t3e",
    four: "f4ur",
    five: "f5ve",
    six: "s6x",
    seven: "s7ven",
    eight: "e8ight",
    nine: "n9ne",
}

let total = 0
for (let line of input.split("\n")) {
for (const num of Object.keys(numbersObject)){
    line = line.replaceAll(num, numbersObject[num])
}
 const numbers = line.split("").filter(item => !isNaN(parseInt(item)))
  total += parseInt(`${numbers[0]}${numbers[numbers.length - 1]}`)
}

console.log(total)