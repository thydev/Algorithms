// Trapping Rain
//calculate water
//Find maxR the max value from right
//find maxl the max value from left
//calculate the value of the current list compare the maxR or maxL and keep the smller value
//              [0, 2, 3, 1, 2, 4, 1, 3]    => 5
// maxL =       [0, 2, 3, 3, 3, 4, 4, 4]
// maxR =       [4, 4, 4, 4, 4, 4, 3, 3]
// compare =    [0, 2, 3, 3, 3, 4, 3, 3] // Keep the smaller value of maxR and maxL
// Minus the original arry with the compare array
//  [0, 2, 3, 3, 3, 4, 3, 3]    // Compared
// - 
//  [0, 2, 3, 1, 2, 4, 1, 3]    // original
// ==========================
//  [0, 0, 0, 2, 1, 0, 2, 0]    = 5

function calRain(arr) {
    var maxL = getMaxLeft(arr);
    var maxR = getMaxRight(arr);
    var smallerValue = getSmaller(maxL, maxR);
    var result = 0;
    for (var i = 0; i < arr.length; i++) {
        if (smallerValue[i] - arr[i] > 0) {
            result += (smallerValue[i] - arr[i]);
        }
    }
    return result;

}

function getMaxLeft(arr) {
    var max = [];
    max.push(arr[0]);
    for (var i = 1; i < arr.length; i++) {
        if (max[i - 1] > arr[i]) {
            max.push(max[i - 1]);
        } else {
            max.push(arr[i]);
        }
    }

    return max;
}

function getMaxRight(arr) {
    var max = [];
    max[arr.length - 1] = (arr[arr.length - 1]);
    for (var i = arr.length - 1; i > 0; i--) {
        if (max[i + 1] > arr[i]) {
            max[i] = max[i + 1];
        } else {
            max[i] = arr[i];
        }
    }

    return max;
}

function getSmaller(arr1, arr2) {
    var smller = [];
    for (var i = 0; i < arr1.length; i++) {
        smller.push(arr1[i] > arr2[i] ? arr2[i] : arr1[i]);
    }
    return smller;
}

console.log(calRain([0, 2, 3, 1, 2, 4, 1, 3]));