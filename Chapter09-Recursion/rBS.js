// Let's make recursive function
function rBS(arr, val, min = 0, max = arr.length - 1) {
  if (min > max) return -1;

  const mid = Math.floor(min + (max - min) / 2);
  if (val < arr[mid]) {
    return rBS(arr, val, min, mid - 1);
  } else if (val > arr[mid]) {
    return rBS(arr, val, mid + 1, max);
  } else {
    return mid;
  }
}

function binarysearch(arr, val) {
  var start = 0;
  var end = arr.length - 1;
  while (start <= end) {
    mid = Math.floor((start + end) / 2);
    if (val == arr[mid]) {
      return true;
    } else {
      if (val > arr[mid]) {
        start = mid + 1;
      } else {
        end = mid - 1;
      }
    }
  }
  return false;
}

const arr = [2, 3, 6, 7, 9, 12, 32];
console.log(binarysearch(arr, 2));
console.log(binarysearch(arr, 22));

console.log(rBS(arr, 2)); // 0 => need a  return statement after left and right recursive call
console.log(rBS(arr, 7)); // undefined?
console.log(rBS(arr, 5)); // undefined?
