function countUniqueValues(arr) {
	let counter = 1;
	let i = 0;
	if(arr.length === 0) {
		return 0;
	} else {
		for (let j = 1; j < arr.length; j++) {
			if (arr[i] !== arr[j]) {
				counter++;
				i = j;
			}

		}

	}

	return counter;

}

console.log(countUniqueValues([1,1,1,1,1,2]))
console.log(countUniqueValues([1,2,3,4,4,4,7,7,12,12,13]))
console.log(countUniqueValues([]))
console.log(countUniqueValues([-2, -1, -1, 0, 1]))