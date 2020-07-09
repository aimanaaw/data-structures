// Undirected Graph

class Graph {
	constructor () {
		this.adjacencyList = {}
	}

	addVertex(vert) {
		if (!this.adjacencyList[vert]) this.adjacencyList[vert] = [];
		return this.adjacencyList;
	}

	addEdge(v1, v2) {
		this.adjacencyList[v1].push(v2);
		this.adjacencyList[v2].push(v1);
		return this.adjacencyList;
	}

	removeEdge(v1, v2) {
		this.adjacencyList[v1] =  this.adjacencyList[v1].filter(eachVertex => eachVertex !== v2);
		this.adjacencyList[v2] = this.adjacencyList[v2].filter(eachVertex => eachVertex !== v1);
		return this.adjacencyList;
	}
}

let g = new Graph();
console.log(g.addVertex("Tokyo"))
console.log(g.addVertex("Toronto"))
console.log(g.addVertex("San Francisco"))
console.log(g.addVertex("Ottawa"))
console.log(g.addEdge("Tokyo", "Toronto"))
console.log(g.addEdge("Tokyo", "Ottawa"))
console.log(g.removeEdge("Tokyo", "Toronto"))