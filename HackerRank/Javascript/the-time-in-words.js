function timeInWords(h, m) {
  let hour;
  let min;
  let ans;

  if (m > 30) {
    h += 1;
  }

  switch (h) {
    case 1:
      hour = "one";
      break;
    case 2:
      hour = "two";
      break;
    case 3:
      hour = "three";
      break;
    case 4:
      hour = "four";
      break;
    case 5:
      hour = "five";
      break;
    case 6:
      hour = "six";
      break;
    case 7:
      hour = "seven";
      break;
    case 8:
      hour = "eight";
      break;
    case 9:
      hour = "nine";
      break;
    case 10:
      hour = "ten";
      break;
    case 11:
      hour = "eleven";
      break;
    default:
      hour = "twelve";
      break;
  }

  switch (m) {
    case 1:
    case 59:
      min = "one minute";
      break;
    case 2:
    case 58:
      min = "two minutes";
      break;
    case 3:
    case 57:
      min = "three minutes";
      break;
    case 4:
    case 56:
      min = "four minutes";
      break;
    case 5:
    case 55:
      min = "five minutes";
      break;
    case 6:
    case 54:
      min = "six minutes";
      break;
    case 7:
    case 53:
      min = "seven minutes";
      break;
    case 8:
    case 52:
      min = "eight minutes";
      break;
    case 9:
    case 51:
      min = "nine minutes";
      break;
    case 10:
    case 50:
      min = "ten minutes";
      break;
    case 11:
    case 49:
      min = "eleven minutes";
      break;
    case 12:
    case 48:
      min = "twelve minutes";
      break;
    case 13:
    case 47:
      min = "thirteen minutes";
      break;
    case 14:
    case 46:
      min = "fourteen minutes";
      break;
    case 15:
    case 45:
      min = "quarter";
      break;
    case 16:
    case 44:
      min = "sixteen minutes";
      break;
    case 17:
    case 43:
      min = "seventeen minutes";
      break;
    case 18:
    case 42:
      min = "eighteen minutes";
      break;
    case 19:
    case 41:
      min = "nineteen minutes";
      break;
    case 20:
    case 40:
      min = "twenty minutes";
      break;
    case 21:
    case 39:
      min = "twenty one minutes";
      break;
    case 22:
    case 38:
      min = "twenty two minutes";
      break;
    case 23:
    case 37:
      min = "twenty three minutes";
      break;
    case 24:
    case 36:
      min = "twenty four minutes";
      break;
    case 25:
    case 35:
      min = "twenty five minutes";
      break;
    case 26:
    case 34:
      min = "twenty six minutes";
      break;
    case 27:
    case 33:
      min = "twenty seven minutes";
      break;
    case 28:
    case 32:
      min = "twenty eight minutes";
      break;
    case 29:
    case 31:
      min = "twenty nine minutes";
      break;
    case 30:
      min = "half";
      break;
    case 0:
      min = "o' clock";
      break;
    default:
      min = -1;
      break;
  }

  if (m > 0 && m <= 30) {
    ans = min + " past " + hour;
  } else if (m > 30) {
    ans = min + " to " + hour;
  } else if (m == 0) {
    ans = hour + " " + min;
  }

  console.log(ans);
  return ans;
}

let h = 7;
let m = 00;

timeInWords(h, m);