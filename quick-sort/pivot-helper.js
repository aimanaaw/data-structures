function pivotHelper (arr, start = 0, end = arr.length) {
	let pivot = arr[start];
	let swapIndex = start;
	for (let i = start + 1; i < arr.length; i++) {
		if(pivot > arr[i]) {
			swapIndex++;
			console.log('before', arr);
			[arr[swapIndex], arr[i]] = [arr[i], arr[swapIndex]];
			console.log('after', arr)
		}
	}
	[arr[start], arr[swapIndex]] = [arr[swapIndex], arr[start]];
	return swapIndex;


}


console.log(pivotHelper([4,8,2,1,5,7,6,3]))