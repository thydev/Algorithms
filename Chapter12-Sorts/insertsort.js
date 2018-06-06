// O(n^2)
function insertionSort(arr) {
    for (let i = 0; i < arr.length; i++) {
        let curElement = arr[i];
        let j = i;
        while (j > 0 && (arr[j - 1] > curElement)) {
            arr[j] = arr[j - 1];
            j--;
        }
        arr[j] = curElement;
    }
    return arr;
}

let arr = [32, 2, 31, 9, 21];
console.log(insertionSort(arr));
console.log(insertionSort([3, 1, 5, 8, 9]));