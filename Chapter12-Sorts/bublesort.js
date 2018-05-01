function bublesort(arr) {
    let isSorted = false;
    while(!isSorted) {
        isSorted = true;
        for (let i = 1; i < arr.length; i++) {
            if (arr[i-1] > arr[i]){
                isSorted = false;
                const tmp = arr[i-1];
                arr[i-1] = arr[i]
                arr[i] = tmp;
            }
            
        }
        
    }
    return arr;
}

console.log(bublesort([3, 4, 2, 1, 3]));
console.log(bublesort([3, 4, 2, 1, -3]));