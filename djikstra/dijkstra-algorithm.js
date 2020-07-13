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


class WeightedGraph {
	constructor() {
		this.adjacencyList = {};
	}

	addVertex(vert) {
		if (!this.adjacencyList[vert]) this.adjacencyList[vert] = [];
		return this.adjacencyList;
	}

	addEdge(v1, v2, weight) {
		this.adjacencyList[v1].push({node: v2, weight});
		this.adjacencyList[v2].push({node: v1, weight});
		return this.adjacencyList;
	}

}

let wg = new WeightedGraph()
wg.addVertex("A")
wg.addVertex("B")
wg.addVertex("C")

console.log(wg.addEdge("A", "B", 9))
console.log(wg.addEdge("A", "C", 5))
console.log(wg.addEdge("B", "C", 7))

let q = new PriorityQueue();
console.log(q.enqueue("B", 3))
console.log(q.enqueue("C", 5))
console.log(q.enqueue("D", 2))
console.log(q.enqueue("Q", 20))
console.log(q.dequeue())