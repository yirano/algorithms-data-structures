function angryProfessor(k, a) {
  let compare = a.filter(x => x <= 0);
  return compare.length >= k ? "NO" : "YES";
}

let k = 3;
let a = [-2, -1, 0, -1];

angryProfessor(k, a);