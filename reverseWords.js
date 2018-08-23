function reverseWords(str) {
  let reverseStr = '';
  let temp = '';
  for (let i = 0; i < str.length; i++) {
    if (str[i] === ' ') {
      if (reverseStr === '') {
        reverseStr = temp;
        temp = '';
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

console.log(reverseWords('We are living in Seattle')); // eW eraeW gnivil ni elttaeS
console.log(reverseWords('Software developers are awesome')); // erawtfoS srepolevederawtfoS era emosewa
