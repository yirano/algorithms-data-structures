function repeatedString(s, n) {

  let test = s.indexOf('a');
  console.log(test);
  let indArr = [];
  for (let i = 0; i < s.length; i++) {

  }


  /** 
  * let ans;
  if (s.length == 1 && s == 'a') {
    ans = n;
  } else if (s.length == 1 && s != 'a') {
    ans = 0;
  } else {

    let sArr = s.split('');
    let base = Math.floor(n / s.length);
    let rpt = s.repeat(base);
    let diff = n - rpt.length;
    for (let i = 0; i < diff; i++) {
      rpt = rpt.concat(sArr[i]);
    }
    rpt = rpt.split("");
    ans = rpt.filter((x) => x == 'a').length;

  }
  console.log(ans);
  return ans; 
  */

}


let s = 'kmretasscityylpdhuwjirnqimlkcgxubxmsxpypgzxtenweirknjtasxtvxemtwxuarabssvqdnktqadhyktagjxoanknhgilnm';
let n = 736778906400;

repeatedString(s, n);