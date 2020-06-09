function binarySearch(arr, val) {
	if (arr.length === 0) return -1;
	let middle = 0;
	let start = 0;
	let finish = arr.length;

	while ((finish - start) > 1) {
		middle = Math.floor((finish + start) / 2);
		if (arr[middle] < val) {
			start = middle;
		} else if (arr[middle] > val) {
			finish = middle;
		} else if (arr[middle] === val) {
			return middle;
		} else {
			return -1;
		}
	}
	return -1;
}


console.log(binarySearch([1,2,3,4,5], 2))
console.log(binarySearch([1,2,3,4,5], 3))
console.log(binarySearch([1,2,3,4,5], 5))
console.log(binarySearch([1,2,3,4,5], 6))