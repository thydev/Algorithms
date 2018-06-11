// Determine if a string has all unique charaters

// Runtime O(2n) => O(n)
function isUnique(str) {
    let charDict = {}
    for (let i = 0; i < str.length; i++) {
        charDict.hasOwnProperty(str[i]) ?
            charDict[str[i]] += 1 :
            charDict[str[i]] = 1;
    }
    for (const key in charDict) {
        if (charDict[key] > 1) return false;
    }
    return true;
}

console.log(isUnique('asdf')) // true
console.log(isUnique('asdaf')) // false
console.log(isUnique('cat or pig')) // true