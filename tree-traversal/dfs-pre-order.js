// Depth First Search

class Node {
	constructor(value) {
		this.value = value;
		this.left = null;
		this.right = null;
	}
}

class BinarySearchTree {
	constructor() {
		this.root = null;
	}

	insert(val) {
		let newNode = new Node(val);
		if (!this.root) {
			this.root = newNode;
			return this;
		}
		let current = this.root;
		let looper = true;
		while (looper) {
			if (val > current.value) {
				if (current.right) {
					current = current.right;
				} else {
					current.right = newNode;
					looper = false;
				}
			} else {
				if (current.left) {
					current = current.left;
				} else {
					current.left = newNode;
					looper = false;
				}
			}
		}
		return this;

	}

	find(val) {
		if (!this.root) return false;
		let currentNode = this.root;
		let found = false;
		while(currentNode && !found) {
			if(val < currentNode.value) {
				currentNode = currentNode.left;
			} else if (val > currentNode.value) {
				currentNode = currentNode.right
			} else {
				found = true;
			}
		}
		if (!found) return false;
		return currentNode;
	}

	BFS() {
		let data = [];
		let queue = [];
		let node = this.root
		queue.push(node);
		while (queue.length) {
			node = queue.shift();
			data.push(node);
			if (node.left) queue.push(node.left);
			if (node.right) queue.push(node.right);
		}
		return data;
	}

	DFSPreOrder() {
		let data = [];

		function traverse(node) {
			data.push(node.value);
			if (node.left) traverse(node.left);
			if (node.right) traverse(node.right);
		}

		traverse(this.root);

		return data;
	}
}

let tree = new BinarySearchTree();
tree.root = new Node(10);
tree.root.right = new Node(15);
tree.root.left = new Node(6);
tree.root.left.left = new Node(3);
tree.root.left.right = new Node(8);
tree.root.right.right = new Node(20);
console.log(tree.DFSPreOrder())