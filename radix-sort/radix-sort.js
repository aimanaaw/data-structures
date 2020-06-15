function getDigit(num, i) {
	return Math.floor(Math.abs(num) / Math.pow(10, i)) % 10;
}

function digitCount(num) {
	if (num === 0) return 1;
	return Math.floor(Math.log10(Math.abs(num))) + 1;
}

function mostDigits(arr) {
	let maxDigits = 0;
	for (let i = 0; i < arr.length; i++) {
		maxDigits = Math.max(maxDigits, digitCount(arr[i]))
	}
	return maxDigits;
}

function radixSort(nums) {
	let maxDigitCount = mostDigits(nums);

	for (let k = 0; k < maxDigitCount; k++) {
		let digitBuckets = Array.from({length : 10}, () => []);
		for (let i = 0; i < nums.length; i++) {
			digitBuckets[getDigit(nums[i], k)].push(nums[i]);
		}
		nums = [].concat(...digitBuckets);
	}
	return nums
}

console.log(radixSort([23,345,5467,12,2345,9852]))