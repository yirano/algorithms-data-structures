function minimumBribes(q) {
	let limit = q[0];
	let people = q[1];
	let finalQue = q[2];
	let que = [];
	let ct = 0;
	let bound;
	let ans;

	// for (let i = 1; i <= people; i++) {
	// 	que.push(i);
	// }

	for (let j = 0; j < finalQue.length; j++) {
		bound = finalQue[j] - finalQue[(j += 1)];
		if (bound >= 1) {
			ct += bound;
		}
	}
	if (ct > limit) {
		ans = [ ct, 'Too Chaotic' ];
	} else {
		ans = ct;
	}
	console.log(ans);
	return ans;
}

minimumBribes([ 2, 5, [ 2, 1, 5, 3, 4 ] ]);
minimumBribes([ 1, 8, [ 1, 2, 5, 3, 4, 7, 8, 6 ] ]);
