var flipAndInvertImage = function(A) {
  for (var i = 0; i < A.length; i++) {
    for (var j = 0; j < Math.floor(A[i].length / 2); j++) {
      var tmp = A[i][j];
      A[i][j] = A[i][A[i].length - j - 1];
      A[i][A[i].length - j - 1] = tmp;

      A[i][j] = A[i][j] === 1 ? 0 : 1;
      A[i][A[i].length - j - 1] = A[i][A[i].length - j - 1] === 1 ? 0 : 1;
    }
    if (A[i].length % 2 === 1) {
      A[i][Math.floor(A[i].length / 2)] =
        A[i][Math.floor(A[i].length / 2)] == 1 ? 0 : 1;
    }
  }
  return A;
};

console.log(flipAndInvertImage([[1, 1, 0], [1, 0, 1], [0, 0, 0]]));
//Input: [[1,1,0],[1,0,1],[0,0,0]]
//Output: [[1,0,0],[0,1,0],[1,1,1]]
