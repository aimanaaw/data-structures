class Node {
	constructor(val) {
		this.val = val;
		this.next = null;
		this.prev = null;
	}
}

class Stack {
	constructor() {
		this.first = null;
		this.last = null;
		this.size = 0;
	}

	push(val) {
		let newNode = new Node(val);
		// console.log(newNode)
		if (this.size === 0) {
			this.first = newNode;
			this.last = newNode;
			this.size++;
		} else {
			let nextNode = this.first;
			nextNode.prev = newNode;
			newNode.next = nextNode;
			this.first = newNode;
			this.size++;
		}
		return this;
	}

	pop() {
		if (this.size === 0) return null;
		let removedHead = this.first;
		if (this.size === 1) {
			this.first = null;
			this.last = null;
		} else {
			let newHead = this.first.next;
			newHead.prev = null;
			this.first = newHead;
		}
		this.size--;
		return removedHead;

	}
}

let stack = new Stack();

stack.push(10);
stack.push(20);
stack.push(30);
stack.push(40);
stack.push(50);
stack.push(60);
stack.push(70);
console.log(stack.pop())






