function hash(key, arrayLen) {
	let total = 0;
	let weirdPrime = 31;
	for (let i = 0; i < Math.min(key.length, 100); i++) {
		let char = key[i];
		let value = char.charCodeAt(0) - 96;
		total = (total * weirdPrime + value) % arrayLen;
	}
	return total;
}



console.log(hash("hello", 13))
console.log(hash("goodbye", 13))
console.log(hash("hi", 13))