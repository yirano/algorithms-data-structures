function minimumBribes(q) {
	let limit = q[0];
	let people = q[1];
	let finalQue = q[2];
	let que = [];

	for (let i = 1; i <= people; i++) {
		que.push(i);
	}
	console.log(que);
}

minimumBribes([ 2, 5, [ 2, 1, 5, 3, 4 ] ]);
