// Remove from a heap - Max Binary Heap

class MaxBinaryHeap {
	constructor() {
		this.values = [55,50,41,39,33,18,27,12];
	}
	insert(element) {
		this.values.push(element);
		this.bubbleUp();
		return this;
	}

	bubbleUp() {
		let idx = this.values.length - 1;
		const element = this.values[idx];
		while(idx > 0) {
			let parentIdx = Math.floor((idx - 1) / 2);
			let parent = this.values[parentIdx];

			if (element <= parent) break;

			this.values[parentIdx] = element;
			this.values[idx] = parent;
			idx = parentIdx;
		}
	}

	extractMax() {
		let lastElement = this.values.pop();
		this.values[0] = lastElement;

		let currentIdx = this.values.indexOf(lastElement);
		let currentValue = this.values[currentIdx];

		let leftIdx = (2 * currentIdx) + 1;
		let leftValue = this.values[leftIdx]
		let rightIdx = (2 * currentIdx) + 2;
		let rightValue = this.values[rightIdx];
		let loop = true;

		while (loop) {
			if (currentValue < leftValue && leftValue > rightValue) {
				let tempIdx = currentIdx;
				let tempValue = currentValue;
				this.values[currentIdx] = leftValue;
				this.values[leftIdx] = tempValue;

				currentIdx = leftIdx;
				currentValue = this.values[currentIdx];
				leftIdx = (2 * currentIdx) + 1;
				leftValue = this.values[leftIdx];
				console.log("left", currentValue, leftValue)

			} else if (currentValue < leftValue && leftValue < rightValue) {
				let tempIdx = currentIdx;
				let tempValue = currentValue;
				this.values[currentIdx] = rightValue;
				this.values[rightIdx] = tempValue;

				currentIdx = rightIdx;
				currentValue = this.values[currentIdx];
				rightIdx = (2 * currentIdx) + 2;
				rightValue = this.values[rightIdx];

				console.log("right", currentValue, rightValue);
			} else if (rightIdx > this.values.length - 1 || leftIdx > this.values.length - 1) {
				loop = false;
			} else if (currentValue > leftValue && currentValue > rightValue) {
				loop = false;
			}
		}
		return lastElement;
	}


}


// [41,39,33,18,27,12]

let heap = new MaxBinaryHeap();
console.log(heap)
console.log(heap.extractMax());
console.log(heap)