function collectOddValues(arr) {
	let results = [];

	if (arr.length === 0) {
		return results;
	}

	if (arr[0] % 2 !== 0) {
		results.push(arr[0]);
	}

	results = results.concat(collectOddValues(arr.slice(1)));
	return results;
}


console.log(collectOddValues([1,2,3,4,5,6,7,8,9,10]))