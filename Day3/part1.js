import fs from "fs"

const input = fs.readFileSync("./day3/input.txt").toString()

const data = input.split("\n")

let total = 0

for (let lineIndex = 0; lineIndex < data.length; lineIndex ++) {
    let numbers = []
    let match;
    const line = data[lineIndex]
    const numberCheckerRegex = /\d+/g
    while ((match = numberCheckerRegex.exec(line)) !== null ) {
        numbers.push({value: match[0], firstIndex: match.index, lastIndex: numberCheckerRegex.lastIndex})
    }
    for (const number of numbers){
        let hasSymbol = false
        for (let y = lineIndex - 1; y <= lineIndex + 1; y++) {
            for (let x = number.firstIndex - 1; x <= number.lastIndex; x++) {
               if( y >= 0 && y < data.length && x >= 0 && x < data[lineIndex].length) {
                if (isNaN(parseInt(data[y][x])) && data[y][x] !== ".") {
                    hasSymbol = true
                  }
               }
            }
        }
        if (hasSymbol) {
            total += parseInt(number.value)
        }
    }
}
console.log(total)