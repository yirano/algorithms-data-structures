function libraryFine(d1, m1, y1, d2, m2, y2) {
  let fine = 0;
  let ans = 0;

  if (y1 > y2) {
    ans = 10000 * (y1 - y2);
    console.log('year');
  } else {
    if (m1 > m2) {
      ans = 500 * (m1 - m2);
      console.log('month');
    } else if (d1 > d2 && m1 >= m2) {
      ans = 15 * (d1 - d2);
      console.log('day', ans);
    } else {
      ans = 0;
    }
  }
  if (ans < 0) {
    ans = 0;
  }

  console.log(ans);
  return ans;
}

let d1 = 2;
let m1 = 8;
let y1 = 2014;

let d2 = 1;
let m2 = 1;
let y2 = 2015;

libraryFine(d1, m1, y1, d2, m2, y2);