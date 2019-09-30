function equalizeArray(arr) {
  let o = {};
  for (let i of arr) {
    if (o[i]) {
      o[i]++;
    } else {
      o[i] = 1;
    }
  }
  return arr.length - o[Object.keys(o).reduce((a, b) => o[a] > o[b] ? a : b)];
}
let arr = [3, 3, 2, 1, 3]; //2
/* 51 */
let arr1 = [81, 70, 95, 44, 66, 49, 85, 50, 4, 68, 98, 81, 81, 70, 30, 98, 37, 92, 4, 11, 70, 66, 49, 17, 95, 66, 92, 66, 68, 68, 92, 98, 92, 49, 4, 30, 69, 4, 53, 95, 11, 98, 81, 11, 70, 48, 49, 81, 81, 81, 14, 95, 49, 95, 68, 69, 68, 44];
let arr2 = [37, 32, 97, 35, 76, 62]; // 5
let arr3 = [1, 1, 1];
let arr4 = [96, 96, 45, 52, 73, 44, 51, 96]; //5

equalizeArray(arr4);