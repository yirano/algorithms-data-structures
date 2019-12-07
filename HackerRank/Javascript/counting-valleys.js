function countingValleys(n, s) {
	let seaLevel = 0;
	let ct = 0;
	let arr = [];

	for (let i = 0; i < s.length; i++) {
		if (s[i] == 'U') {
			seaLevel += 1;
		} else {
			seaLevel -= 1;
		}

		arr.push(seaLevel);
	}

	for (let i = 0; i < arr.length; i++) {
		if (arr[i] < 0 && arr[i + 1] == 0) {
			ct += 1;
		}
	}

	console.log(ct);
	return ct;
}
