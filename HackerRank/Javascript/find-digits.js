function findDigits(n) {
  return n.toString().split('').filter(a => n % a == 0).length;
}

let n = 12;
findDigits(n);

/**
 * AHMED
 * const numbers = Array.from(n.toString()).map(Number);
   return numbers.filter(f => parseInt(n % f) === 0).length;

   MARK
   return n.toString().split('').filter(x => n%x==0 && x!=0).length;
 */