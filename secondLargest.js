function secondLargest(arr) {
  if (arr.length < 2) return arr[0];
  let max1 = arr[0];
  let max2 = arr[1];
  if (max2 > max1) {
    max2 = max1;
    max1 = arr[1];
  }
  for (let i = 2; i < arr.length; i++) {
    if (arr[i] > max1) {
      max2 = max1;
      max1 = arr[i];
    }
  }
  return max2;
}

console.log(secondLargest([2, 3, 6, 12]));
console.log(secondLargest([22, 21, 16, 12]));
console.log(secondLargest([9, 13, 6, 12, 12]));
