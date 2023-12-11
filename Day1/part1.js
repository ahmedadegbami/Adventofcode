 import fs from "fs"

 let input = fs.readFileSync("./day1/input.txt").toString()


 let total = 0
 for (let line of input.split("\n")) {
    const numbers = line.split("").filter(item => !isNaN(parseInt(item)))
   total += parseInt(`${numbers[0]}${numbers[numbers.length - 1]}`)
 }

 console.log(total)
