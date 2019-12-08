function hourglassSum(arr) {
  let top = 0;
  let mid = 0;
  let bottom = 0;
  for (let i = 0; i < arr.length; i++) {
    for (let j = 0; j < arr[i].length; j++) {
      top = (arr[i][j] + arr[i][j + 1] + arr[i][j + 2]);
    }
  }
  console.log(top);
  console.log(arr[1][2]);
}

hourglassSum([
  [1, 1, 1, 0, 0, 0],
  [0, 1, 0, 0, 0, 0],
  [1, 1, 1, 0, 0, 0],
  [0, 0, 0, 0, 0, 0],
  [0, 0, 0, 0, 0, 0],
  [0, 0, 0, 0, 0, 0]
]);
