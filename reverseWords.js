function reverseWords(str) {
  let reverseStr = '';
  let temp = '';
  for (let i = 0; i < str.length - 1; i++) {
    if (str[i] === ' ') {
      if (reverseStr === '') {
        reverseStr = temp;
      } else {
        reverseStr += ' ' + temp;
        temp = '';
      }
    } else {
      temp = str[i] + temp;
    }
  }
  reverseStr += ' ' + temp;
  return reverseStr;
}

console.log(reverseWords('We are living in Seattle'));
