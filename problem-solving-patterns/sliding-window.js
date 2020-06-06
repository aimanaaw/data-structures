function maxSubArray(arr, num) {
	if (arr.length < num) {
		return null;
	}
	let tempSum = 0;
	for (let i = 0; i < num; i++) {
		tempSum = tempSum + arr[i];
	}
	let maxSum = tempSum;

	for (let i = num; i < arr.length; i++) {
		tempSum = tempSum - arr[i - num] + arr[i];
		maxSum = Math.max(tempSum, maxSum);
	}
	return `The maximum sum in ${num} item subset of ${arr} is \t ${maxSum}`
}

console.log(maxSubArray([2,6,9,2,1,8,5,6,3], 3))