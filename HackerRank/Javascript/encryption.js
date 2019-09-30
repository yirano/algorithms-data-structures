function encryption(s) {
  s = s.split('');
  let len = s.length;
  let row = Math.ceil(Math.sqrt(len));
  let spliceArr = [];
  let colArr = [];

  // if the sqrt is not a whole number, add the length by 1 to get the correct row and col number
  if (len % 2 !== 0) {
    if (!(Number.isInteger(Math.sqrt(len)))) {
      len += 1;
    }
  }

  // creating a 2D array to stack on top of each other based on row and col numbers

  for (let i = 0; i < len; i++) {
    spliceArr.push(s.splice(0, row));
  }

  // grab the chars by col importance to create new string
  colArr = spliceArr.reduce(function (spliceArr, x) {
    x.forEach(function (v, i) {
      spliceArr[i] = (spliceArr[i] || '') + v;
    });
    return spliceArr;
  }, []);

  // join array to make a string.
  return colArr.join(' ');
}

let s = 'haveaniceday';
let s2 = 'chillout';
let s3 = 'wclwfoznbmyycxvaxagjhtexdkwjqhlojykopldsxesbbnezqmixfpujbssrbfhlgubvfhpfliimvmnny';

encryption(s3);