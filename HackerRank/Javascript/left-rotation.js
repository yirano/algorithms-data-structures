function rotLeft(a, d) {
	let move = a.splice(0, d);
	a = a.concat(move);

	return a;
}
