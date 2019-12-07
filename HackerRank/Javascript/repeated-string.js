function repeatedString(s, n) {
	let base = Math.ceil(n / s.length);
	s = s.split('');
	let repeat = s.length * base;
	let subtract = n - repeat;

	let found = s.filter((x) => x == 'a'); // a's found in s argument
	let total = found.length * base; // total a's found overall with overflow
	let remove = s.slice(subtract).filter((x) => x == 'a'); // overflow a's to remove

	// if the difference to remove is 0
	if (subtract == 0) {
		total = total;
	} else {
		total -= remove.length;
	}

	console.log('total', total);
	return total;
}

repeatedString(
	'udjlitpopjhipmwgvggazhuzvcmzhulowmveqyktlakdufzcefrxufssqdslyfuiahtzjjdeaxqeiarcjpponoclynbtraaawrps',
	872514961806
);

repeatedString('aba', 10);

repeatedString('a', 100000);
