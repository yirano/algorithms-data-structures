function pageCount(n, p) {
  let point;
  let ans = 0;
  let temp = n - p;

  if (n % 2 == 0) {
    tempPt = Math.floor(n / 2);
    if (tempPt % 2 == 0) {
      point = tempPt - 0.5;
    } else {
      point = temp + 0.5;
    }
  } else {
    point = n / 2;
  }
  if (point > p) {
    ans = Math.floor(p / 2);
  } else {
    if (temp % 2 != 0) {
      if (p % 2 == 0) {
        ans = Math.floor(temp / 2);
      } else {
        ans = Math.ceil(temp / 2);
      }
    } else {
      ans = Math.floor(temp / 2);
    }
  }
  return ans;
}

let n = 19;
let p = 14;
pageCount(n, p);