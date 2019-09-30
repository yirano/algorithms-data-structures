function hurdleRace(k, height_count, height) {
  let maxHt = Math.max(...height_count);
  if (maxHt > k) {
    console.log(maxHt - k);
    return maxHt - k;
  } else {
    console.log(0);
    return 0;
  }


}

let k = 4;
let height_count = [1, 6, 3, 5, 2];
let height = 5;

hurdleRace(k, height_count, height);