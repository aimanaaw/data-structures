// Undirected Graph

class Graph {
	constructor () {
		this.adjacencyList = {}
	}

	addVertex(vert) {
		if (!this.adjacencyList[vert]) this.adjacencyList[vert] = [];
		return this.adjacencyList;
	}
}

let g = new Graph();
console.log(g.addVertex("Tokyo"))
console.log(g.addVertex("Toronto"))
console.log(g.addVertex("San Francisco"))
console.log(g.addVertex("Ottawa"))