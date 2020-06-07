function avgPair(arr, average) {
	if (arr.length < 2) {
		return false;
	}

	let start = 0;
	let finish = arr.length - 1;
	let val = -Infinity;

	while (val !== average) {
		if (finish === Math.floor(arr.length / 2)) {
			return false;
		}
		if (val < average) {
			start += 1;
			val = (arr[start] + arr[finish]) / 2;
		} else if (val > average) {
			finish--;
			val = (arr[start] + arr[finish]) / 2;
		}
	}
	return true

}

console.log(avgPair([1,2,3], 2.5))
console.log(avgPair([], 4))
console.log(avgPair([-1, 0, 3, 4, 5, 6], 4.1))
console.log(avgPair([1,3,3,5,6,7,10,12,19], 8))