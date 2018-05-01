function selectsort(arr){
    for (let i = 0; i < arr.length; i++) {
        let min = arr[i];
        let minIndex = i;
        for (let j = i+1; j < arr.length; j++) {
            if (arr[j] < min) {
                min = arr[j];
                minIndex = j;
            }
        }
        const tmp = arr[i];
        arr[i] = min;
        arr[minIndex] = tmp;
    }
    return arr;
}

console.log(selectsort([3, 5, 1, 9, 2]));
console.log(selectsort([10, 65, 11, 9, 32]));
console.log(selectsort([32, 15, 1, 9, 24]));