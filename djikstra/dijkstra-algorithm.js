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

	Dijkstra(start, finish) {
		const nodes = new PriorityQueue();
		const distances = {};
		const previous = {};
		let path = [];
		let smallest;

		// build up initial state
		for (let vertex in this.adjacencyList) {
			if (vertex === start) {
				distances[vertex] = 0;
				nodes.enqueue(vertex, 0);
			} else {
				distances[vertex] = Infinity
				nodes.enqueue(vertex, Infinity);
			}
			previous[vertex] = null;
		}

		// As long as there is something to visit
		while (nodes.values.length) {
			smallest = nodes.dequeue().val;
			if (smallest === finish) {
				while(previous[smallest]) {
					path.push(smallest);
					smallest = previous[smallest];
				}
				break;
				// We are done
				// Build path to return
			}

			if (smallest || distances[smallest] !== Infinity) {
				for (let neighbour in this.adjacencyList[smallest]) {
					let neighbourNode = this.adjacencyList[smallest][neighbour];
					
					let candidate = distances[smallest] + neighbourNode.weight;

					let nextNeighbour = neighbourNode.node
					if (candidate < distances[nextNeighbour]) {
						// Updating new smallest distance to neighbour
						distances[nextNeighbour] = candidate;
						// Updating previous
						previous[nextNeighbour] = smallest;
						// Enqueue in the priority queue with new priority
						nodes.enqueue(nextNeighbour, candidate);
					}
				}
			}
		}
		return path.concat(smallest).reverse()
	}

}

let wg = new WeightedGraph()
wg.addVertex("A")
wg.addVertex("B")
wg.addVertex("C")
wg.addVertex("D")
wg.addVertex("E")
wg.addVertex("F")

wg.addEdge("A", "B", 4)
wg.addEdge("A", "C", 2)
wg.addEdge("B", "E", 3)
wg.addEdge("C", "D", 2)
wg.addEdge("C", "F", 4)
wg.addEdge("D", "E", 3)
wg.addEdge("D", "F", 1)
wg.addEdge("E", "F", 1)

console.log(wg.Dijkstra("A", "E"))
console.log(wg.Dijkstra("A", "C"))
