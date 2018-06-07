function partition(arr, start, end) {
    const pivot = arr[end]; // Get the last element as the pivot
    let p_index = start - 1; // The wall of the pivot value
    for (let i = start; i <= end; i++) {
        // Swap the smaller element to the left of the wall / p_index position
        if (arr[i] < pivot) {
            p_index++;
            const temp = arr[p_index];
            arr[p_index] = arr[i];
            arr[i] = temp;
        }
        console.log(arr)
    }
    // Swap the pivot value / the last element to the wall / p_index position
    p_index++;
    const temp = arr[p_index];
    arr[p_index] = pivot;
    arr[end] = temp;

    console.log(arr)
    return p_index;
}
console.log(partition([3, 8, 2, 9, 4, 7], 0, 5));

// BigO O(nlog(n))
function quickSort(arr, start = 0, end = arr.length - 1) {
    if (start >= end) {
        return arr;
    }
    const pivot_index = partition(arr, start, end);
    quickSort(arr, start, pivot_index - 1);
    quickSort(arr, pivot_index + 1, end);
    return arr;
}
console.log(quickSort([3, 8, 2, 9, 4, 7]));
// Sudo code
// do quicksort(arr, start = 0, end = arr.length-1)

// if (start == end) 
//     return arr
// const pi = partition(arr, start, end )
// quicksort(arr, 0, pi -1)
// quicksort(arr, pi + 1, arr.length-1)