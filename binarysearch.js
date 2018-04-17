function binarysearch(arr, val){
    var start = 0;
    var end = arr.length - 1;
    while (start <= end){
        mid = Math.floor((start + end) / 2);
        if (val == arr[mid]) {
            return true;
        } else {
            if (val > arr[mid]) {
                start = mid + 1;
            } else {
                end = mid -1;
            }
        }
    }
    return false;
}

var arr = [2, 3,6, 7, 9]
console.log(binarysearch(arr, 2));
console.log(binarysearch(arr, 22));