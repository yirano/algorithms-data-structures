function sockMerchant(n, arr) {
	let ct = 0;
	arr.sort((a, b) => {
		return a - b;
	});

	for (let i = 0; i < arr.length - 1; i++) {
		if (arr[i] === arr[i + 1]) {
			ct++;
			i++;
		}
	}

	console.log(ct);
	return ct;
}

sockMerchant(9, [ 10, 20, 20, 10, 10, 30, 50, 10, 20 ]); // 3
sockMerchant(15, [ 6, 5, 2, 3, 5, 2, 2, 1, 1, 5, 1, 3, 3, 3, 5 ]); // 6
