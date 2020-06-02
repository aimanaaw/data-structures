const timer = require('performance-now')

function addUpTo1(n) {
	let total = 0;
	for (let i = 0; i <= n; i++) {
		total += 1;
	}
	return total;
}

let t1 = timer();
addUpTo1(1000000000);
let t2 = timer();
console.log(`Time elapsed is: ${(t2 - t1) * (Math.pow(10, -3))} s`)

function addUpTo2(n) {
	return n * (n + 1) / 2;
}

let t3 = timer();
addUpTo2(1000000000);
let t4 = timer();
console.log(`Time elapsed is: ${(t4 - t3) *(Math.pow(10, -3))} s`)