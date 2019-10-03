function chocolateFeast(n, c, m) {
  let ct = 0;
  let wr = 0;

  wr = ct = n / c;

  while (wr >= m) {
    let tempCt = Math.floor(wr / m);
    ct += tempCt;
    wr %= m;
    wr += tempCt;
  }

  return Math.floor(ct);
}

let n = 15;
let c = 3;
let m = 2;

chocolateFeast(n, c, m);