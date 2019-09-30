function libraryFine(d1, m1, y1, d2, m2, y2) {
  if (y1 == y2 || y1 < y2) {
    if (m1 == m2 || m1 < m2) {
      if (d1 == d2 || d1 < d2) {
        console.log("day diff found");
        total = 0;
      } else {
        total = (d1 - d2) * 15;
      }
    } else {
      console.log("mo diff found");
      total = (m1 - m2) * 500;
    }
  } else {
    console.log("year diff found");
    total = (y2 - y1) * 10000;
  }

  console.log(total);
  return total;
}

let d1 = 12;
let m1 = 31;
let y1 = 2015;

let d2 = 1;
let m2 = 1;
let y2 = 2016;

libraryFine(d1, m1, y1, d2, m2, y2);