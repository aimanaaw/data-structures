// function bubbleSort(arr) {
// 	for (let i = arr.length; i > 0; i--) {
// 		for (let j = 0; j < i - 1; j++) {
			
// 			if(arr[j] > arr[j+1]) {
// 				[arr[j], arr[j+1]] = [arr[j+1], arr[j]]
// 			}
// 			console.log(arr)
// 		}
// 	}
// 	return arr;
// }


function bubbleSort(arr) {
	let noSwaps;
	for (let i = arr.length; i > 0; i--) {
		for (let j = 0; j < i - 1; j++) {
			noSwaps = true;
			
			if(arr[j] > arr[j+1]) {
				[arr[j], arr[j+1]] = [arr[j+1], arr[j]];
				noSwaps = false
			}
			if (noSwaps) break;
		}
	}
	return arr;
}


console.log(bubbleSort([37, 45, 29, 8]))
console.log(bubbleSort([8,1,2,3,4,5,6,7]))