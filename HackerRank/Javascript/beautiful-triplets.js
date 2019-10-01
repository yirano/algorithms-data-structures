function beautifulTriplets(d, arr) {
  let count = 0;

  for (let i = 0; i < arr.length; i++) {
    for (let j = i + 1; j < arr.length; j++) {
      if (arr[j] - arr[i] > d) break;
      for (let k = j + 1; k < arr.length; k++) {
        if (arr[j] - arr[i] == d && arr[k] - arr[j] == d) {
          count++;
        }
      }
    }
  }
  console.log(count);
  return count;
}

let d = 3;
let arr = [1, 2, 4, 5, 7, 8, 10, 45]

beautifulTriplets(d, arr)