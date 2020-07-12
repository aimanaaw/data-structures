class PriorityQueue {
	constructor () {
		this.values = [];
	}

	enqueue(val, priority) {
		this.values.push({val, priority});
		this.sort();
		return this.values;
	};

	dequeue() {
		return this.values.shift();
	};

	sort() {
		this.values.sort((a, b) => a.priority - b.priority);
	};
}

let q = new PriorityQueue();
console.log(q.enqueue("B", 3))
console.log(q.enqueue("C", 5))
console.log(q.enqueue("D", 2))
console.log(q.enqueue("Q", 20))
console.log(q.dequeue())