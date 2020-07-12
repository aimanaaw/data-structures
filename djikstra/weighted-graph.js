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
console.log(wg.addVertex("A"))
console.log(wg.addVertex("B"))
console.log(wg.addVertex("C"))
console.log(wg.addEdge("A", "B", 9))
console.log(wg.addEdge("A", "C", 5))
console.log(wg.addEdge("B", "C", 7))