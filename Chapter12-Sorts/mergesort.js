// O(log(n)) ?
function mergeSort(arr, start = 0, end = arr.length - 1) {
    console.log(start, end)
    if (start === end) {
        return [arr[end]];
    }
    const mid = Math.floor((start + end) / 2);
    return merge(mergeSort(arr, start, mid), mergeSort(arr, mid + 1, end));
}

// Merge two sorted arrays
function merge(arr1, arr2) {
    let sortedArr = [];
    while (arr1.length > 0 && arr2.length > 0) {
        if (arr1[0] < arr2[0]) {
            // sortedArr.push(arr1.splice(0, 1));
            // Will return an array of arrays
            // [ [ 2 ], [ 3 ], [ 5 ], [ 19 ] ]
            sortedArr.push(arr1.shift());
            // shift will return only one array
            // [ 2, 3, 5, 19 ]

        } else {
            sortedArr.push(arr2.shift());
        }
        if (arr1.length === 0) {
            // This method does not change the existing arrays, 
            // but instead returns a new array.
            sortedArr = sortedArr.concat(arr2);

        }
        if (arr2.length === 0) {
            sortedArr = sortedArr.concat(arr1);
        }
    }
    return sortedArr;
}

console.log(merge([2, 5, 19], [3, 90]));
console.log(merge([-3, 1, 19], [20, 90]));

console.log(mergeSort([32, 3, 12, 5]));
console.log(mergeSort([4, 13, 212, 25, 39, 87]));