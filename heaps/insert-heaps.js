class MaxBinaryHeap {
	constructor() {
		this.values = [41,39,33,18,27,12];
	}
	insert(element) {
		this.values.push(element);
		this.bubbleUp();
	}

	bubbleUp() {
		let idx = this.values.length - 1;
		const element = this.values[idx];
	}
}


// [41,39,33,18,27,12]

let heap = new MaxBinaryHeap();
console.log(heap.insert(55));