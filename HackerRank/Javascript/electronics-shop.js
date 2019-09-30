function getMoneySpent(keyboards, drives, b) {
  let arr = [];
  let ans;

  for (let i = 0; i < keyboards.length; i++) {
    for (let j = 0; j < drives.length; j++) {
      let temp = drives[j] + keyboards[i];
      if (temp <= b) {
        arr.push(drives[j] + keyboards[i]);
      }
    }
  }

  arr = arr.sort((a, b) =>
    a - b);

  if (arr.length == 0) {
    return -1;
  }

  ans = arr[arr.length - 1];
  console.log(ans);
  return ans;
}

let b = 10;
let keyboards = [3, 1];
let drives = [5, 2, 8];
getMoneySpent(keyboards, drives, b);