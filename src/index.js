module.exports = function toReadable(number) {
  const numbers = {
    1: 'one',
    2: 'two',
    3: 'three',
    4: 'four',
    5: 'five',
    6: 'six',
    7: 'seven',
    8: 'eight',
    9: 'nine',
    0: 'zero',
    10: 'ten',
    11: 'eleven',
    12: 'twelve',
    13: 'thirteen',
    14: 'fourteen',
    15: 'fifteen',
    16: 'sixteen',
    17: 'seventeen',
    18: 'eighteen',
    19: 'nineteen',
    20: 'twenty',
    30: 'thirty',
    40: 'forty',
    50: 'fifty',
    60: 'sixty',
    70: 'seventy',
    80: 'eighty',
    90: 'ninety',
  };
  if (number >= 0 && number < 20) return numbers[number];

  let tensWords;
  const tens = number % 100;
  if (tens < 20 && tens !== 0) {
    tensWords = numbers[tens];
  } else {
    const first = Math.trunc(tens / 10) * 10;
    const second = tens % 10;
    if (second === 0 && first === 0) {
      tensWords = ``;
    } else if (second === 0 && first !== 0) {
      tensWords = `${numbers[first]}`;
    } else {
      tensWords = `${numbers[first]} ${numbers[second]}`;
    }
  }

  const b = Math.trunc(number / 100);

  const result =
    b !== 0 ? `${numbers[b]} hundred ${tensWords}` : `${tensWords}`;
  return result.trimEnd();
};
