function linearSearch(key, arr) {
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] === key) {
            return i;
        }
    }
    return -1;
}
const arr = [24, 8, 23, 3];
console.log(linearSearch(8, arr)); // => 1
console.log(linearSearch(-99, arr)); // => -1