function chocolateFeast(n, c, m) {
  let ct = 0;
  let wr = 0;

  wr = ct = n / c;
  console.log('wr beginning: ', wr);
  console.log('ct beginning: ', ct);
  console.log('cost of wrapper for choc: ', m);
  console.log("---------------");

  while (wr >= m) {
    let tempCt = Math.floor(wr / m);
    console.log('tempCt: ', tempCt);
    ct += tempCt;
    console.log('ct: ', ct);
    wr %= m;
    console.log('additional chocolate wrapper: ', wr);
    wr += tempCt;
    console.log('wrapper in total: ', wr);
    console.log("---------------");
  }
  return Math.floor(ct);
}

let n = 15;
let c = 3;
let m = 2;

chocolateFeast(n, c, m);