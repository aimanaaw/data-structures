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

	removeVertex(vertex) {
		while(this.adjacencyList[vertex].length) {
			const adjacentVertex = this.adjacencyList[vertex].pop();
			this.removeEdge(vertex, adjacentVertex);
		}
		delete this.adjacencyList[vertex];
		return this.adjacencyList;
	}
}

let g = new Graph();
console.log(g.addVertex("Tokyo"))
console.log(g.addVertex("Toronto"))
console.log(g.addVertex("San Francisco"))
console.log(g.addVertex("New York"))
console.log(g.addVertex("Dallas"))
console.log(g.addVertex("Vancouver"))
console.log(g.addVertex("Calgary"))

console.log(g.addEdge("Tokyo", "Toronto"))
console.log(g.addEdge("Tokyo", "Vancouver"))
console.log(g.addEdge("Tokyo", "Dallas"))
console.log(g.addEdge("Tokyo", "Calgary"))

console.log(g.addEdge("Toronto", "New York"))
console.log(g.addEdge("Toronto", "Calgary"))
console.log(g.addEdge("Toronto", "Vancouver"))
console.log(g.addEdge("Toronto", "Dallas"))

console.log(g.removeEdge("Tokyo", "Toronto"))
console.log(g.removeVertex("Tokyo"))