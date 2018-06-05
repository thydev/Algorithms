function bublesort(arr) {
    let isSorted = false;
    while (!isSorted) {
        isSorted = true;
        // sortedNum: use to optimize the number of loop time by cutting the last sorted elements
        // After one loop the biggest element will be in the right place/ last position
        let sortedNum = 0;
        for (let i = 1; i < arr.length - sortedNum; i++) {
            if (arr[i - 1] > arr[i]) {
                isSorted = false;
                const tmp = arr[i - 1];
                arr[i - 1] = arr[i]
                arr[i] = tmp;
            }
            if (i === arr.length) sortedNum++;
        }
    }
    return arr;
}

console.log(bublesort([3, 4, 2, 1, 3]));
console.log(bublesort([3, 4, 2, 1, -3]));