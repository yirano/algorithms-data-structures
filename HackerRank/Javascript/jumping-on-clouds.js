function jumpingOnClouds(c) {
	console.log(c);
	let arr = [];
	let curr = 0;
	let ct = 0;
	for (let i = 0; i < c.length; i++) {
		if (c[i] == 0) {
			arr.push(i);
		}
	}

	for (let j = curr; j < arr.length; ) {
		if (arr[j] - arr[j + 2] == -2) {
			j += 2;
		} else if (arr[j] - arr[j + 2] != -2) {
			j += 1;
		}
		ct += 1;
	}
	console.log(arr);
	console.log(ct - 1);
	return ct - 1;
}

jumpingOnClouds([ 0, 0, 0, 0, 1, 0 ]);
