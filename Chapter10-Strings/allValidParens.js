
function allValidParens(num, parenCount=0, str="", arr=[], openCount=0) {
    if (parenCount == num) {
        for (let index = 0; index < openCount; index++) {
            str += ")";
        }
        arr.push(str);
        return;
    }

    allValidParens(num, parenCount+1, str + "(", arr, openCount+1);
    if (openCount != 0) {
        allValidParens(num, parenCount, str + ")", arr, openCount-1);
    }

    return arr;
}

console.log(allValidParens(2));
console.log(allValidParens(3));
console.log(allValidParens(4));
// console.log(allValidParens(5));
// console.log(allValidParens(7));