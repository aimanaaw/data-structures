// Insert method

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
}

let tree = new BinarySearchTree();
tree.root = new Node(10);
tree.root.right = new Node(15);
tree.root.left = new Node(7);
tree.root.left.right = new Node(9);
console.log(tree.insert(10));
