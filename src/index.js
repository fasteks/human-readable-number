const objUnits = {
  1: 'one',
  2: 'two',
  3: 'three',
  4: 'four',
  5: 'five',
  6: 'six',
  7: 'seven',
  8: 'eight',
  9: 'nine',
  0: 'zero'
}

const objTeens = {
  0: 'ten',
  1: 'eleven',
  2: 'twelve',
  3: 'thirteen',
  4: 'fourteen',
  5: 'fifteen',
  6: 'sixteen',
  7: 'seventeen',
  8: 'eighteen',
  9: 'nineteen'
}

const objTens = {
  2: 'twenty',
  3: 'thirty',
  4: 'forty',
  5: 'fifty',
  6: 'sixty',
  7: 'seventy',
  8: 'eighty',
  9: 'ninety'
}

module.exports = function toReadable(number) {
  let numberString = number.toString()

  if (numberString.length === 1) {
    return objUnits[+numberString[0]]
  }

  if (numberString.length === 2) {
    if (+numberString[0] === 1) {
      return objTeens[+numberString[1]]
    }

    if (+numberString[1] === 0) {
      return objTens[+numberString[0]]
    }

    return `${objTens[+numberString[0]]} ${objUnits[+numberString[1]]}`
  }

  if (numberString.length === 3) {
    if (+numberString[1] === 0 && +numberString[2] === 0) {
      return `${objUnits[+numberString[0]]} hundred`
    }

    if (+numberString[1] === 0 && numberString[2] !== 0) {
      return `${objUnits[+numberString[0]]} hundred ${objUnits[+numberString[2]]}`
    }

    if (+numberString[1] === 1) {
      return `${objUnits[+numberString[0]]} hundred ${objTeens[+numberString[2]]}`
    }

    if (+numberString[2] === 0) {
      return `${objUnits[+numberString[0]]} hundred ${objTens[+numberString[1]]}`
    }

    if (+numberString[2] !== 0) {
      return `${objUnits[+numberString[0]]} hundred ${objTens[+numberString[1]]} ${objUnits[+numberString[2]]}`
    }
  }

  return 'Something went wrong! Check inputed value! The program can handle number from 0 to 999!'
}
