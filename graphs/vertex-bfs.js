// Depth First Search

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

	dFSRecursive(start) {
		const result = [];
		const visited = {};
		const adjacencyList = this.adjacencyList;

		(function dfs(vertex) {
			if (!vertex) return null;

			visited[vertex] = true;
			result.push(vertex);

			adjacencyList[vertex].forEach(neighbour => {
				if(!visited[neighbour]) {
					return dfs(neighbour);
				}
			})
		
				})(start);

				return result;
	}

	dFSIterative(start) {
		const result = [];
		const visited = {};
		const stack = [start];
		let currentVertex;

		visited[start] = true;
		while (stack.length) {
			console.log("stack", stack)

			currentVertex = stack.pop();
			result.push(currentVertex);

			this.adjacencyList[currentVertex].forEach(neighbour => {
				if(!visited[neighbour]) {
					visited[neighbour] = true;
					stack.push(neighbour);
				}
			})
		}
		return result;
	}

	bfs(start) {
		const queue = [start];
		const result = [];
		const visited = {[start]: true};
		// visited[start] = true;
		let currentVertex;

		while (queue.length) {
			console.log(visited)
			currentVertex = queue.shift();
			result.push(currentVertex);

			this.adjacencyList[currentVertex].forEach(neighbour => {
				if (!visited[neighbour]) {
					visited[neighbour] = true;
					queue.push(neighbour);
				}
			})
		}
		return result;
	}
}

let g = new Graph();
g.addVertex("A")
g.addVertex("B")
g.addVertex("C")
g.addVertex("D")
g.addVertex("E")
g.addVertex("F")

g.addEdge("A", "B")
g.addEdge("A", "C")
g.addEdge("B", "D")
g.addEdge("C", "E")

g.addEdge("D", "E")
g.addEdge("D", "F")
g.addEdge("E", "F")
// console.log(g.dFSRecursive("A"))
// console.log(g.dFSIterative("A"))
console.log(g.bfs("A"));