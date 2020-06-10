function insertionSort(arr) {
	for (let i = 1; i < arr.length; i++) {
		let currentVal = arr[i];
		for (let j = i - 1; j >= 0; j--) {
			if(arr[j] > currentVal) {
				arr[j + 1] = arr[j]
				arr[j] = currentVal
			}
		}
	}
	return arr;
}

console.log(insertionSort([2,1,9,76,4]))	