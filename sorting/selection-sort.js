function selectionSort(arr) {
	for (let i = 0; i < arr.length; i++) {
		let min = i;
		for (let j = i + 1; j < arr.length; j++) {
			if (arr[j] < arr[min]) {
				min = j;
			}
			console.log(arr[i], arr[j], arr[min])
		}
		if (i !== min) {
			[arr[i], arr[min]] = [arr[min], arr[i]]
		}
	}
	return arr;
}


console.log(selectionSort([34,22,10,19,17]))