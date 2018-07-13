// M = 1000, D = 500, C = 100, L = 50, X = 10, V = 5, I = 1

function romanNumeral(num) {
    var romanStr = "";
    var romanChar = [
        'M', 'CM', 'D', 'CD', 'C', 'XC', 'L', 'XL', 'X', 'IX', 'V', 'IV', 'I'
    ];
    var romnaVals = {
        M: 1000,
        CM: 900,
        D: 500,
        CD: 400,
        C: 100,
        XC: 90,
        L: 50,
        XL: 40,
        X: 10,
        IX: 9,
        V: 5,
        IV: 4,
        I: 1
    }
    for (var i = 0; i < romanChar.length; i++) {
        while (num >= romnaVals[romanChar[i]]) {
            romanStr += romanChar[i];
            num -= romnaVals[romanChar[i]];
        }
    }
    return romanStr;
}
console.log(romanNumeral(3966))
// MMMCMLXVI
console.log(romanNumeral(363))
// CCCLXIII
console.log(romanNumeral(398))
// CCCXCVIII