// Remove a node from the linked list at a specific point

// Accept a value and an index
// If index is less than 0 or greater than the length. Return undefined
// If the index is 0 or the same as the length - 1. Use shift or pop
// Find the node just before to the specified index
// Find the node just after the specified index
// Set the previous node's next property to the next node
// Decrement the length
// Return true or false

class Node {
	constructor(val) {
		this.val = val;
		this.next = null;
	}
}

class SinglyLinkedList {

	constructor() {
		this.head = null;
		this.tail = null;
		this.length = 0;
	}

	push(val) {
		const newNode = new Node(val);
		if (this.length === 0) {
			this.head = newNode;
			this.tail = newNode;
			this.length++;
		} else {
			this.tail.next = newNode;
			this.tail = newNode;
			this.length++;
		}
		return this;
	}

	pop() {
		if (!this.head) return undefined;

		let newTail = this.head;
		let currentNode = newTail.next;

		while (currentNode.next) {
			newTail = currentNode;
			currentNode = currentNode.next;
		}
		
		this.tail = newTail;
		newTail.next = null;
		this.length--;
		if (this.length === 0) {
			this.head = null;
			this.tail = null;
		}
		return this;
	}

	shift() {

		if (!this.head) return undefined;

		let currentNode = this.head;
		this.head = currentNode.next;
		this.length--;
		if (this.length ===0) {
			this.tail = null;
		}
		return currentNode;
	}

	unshift(val) {

		const newNode = new Node(val);

		if(!this.head) {
			this.head = val;
			this.tail = val;
		} else {
			let oldHead = this.head;
			this.head = newNode;
			newNode.next = oldHead;
		}

		this.length++;
		return this;
	}

	getValue(index) {
		if (index < 0 || index >= this.length) return null;
		let counter = 0;
		let currentNode = this.head;
		while (counter < index) {
			currentNode = currentNode.next;
			counter++;
		}
		return currentNode;

	}

	setValue(setValue, index) {
		let foundNode = this.getValue(index);
		if (foundNode) {
			foundNode.val = setValue;
			return true;
		}
		return false;
	}

	insert(val, index) {
		if (index < 0 || index >= this.length) return false;
		if (index === this.length) {
			this.push(val);
			return true;
		} else if (index === 0) {
			this.unshift(val);
			return true;
		} else {
			let previous = this.getValue(index - 1);
			let currentNode = this.getValue(index);
			let newNode = new Node(val);
			previous.next = newNode;
			newNode.next = currentNode;
			this.length++;
			return true;
		}
	}

	remove(index) {
		if (index < 0 || index >= this.length) return undefined;
		if (index === this.length - 1) {
			this.pop();
			return true;
		} else if (index === 0) {
			this.shift();
			return true;
		} else {
			let previousNode = this.getValue(index - 1);
			let removedNode = this.getValue(index);
			previousNode.next = removedNode.next;
			// previousNode.next = nextNode;
			// currentNode = null;
			this.length--;
			return removedNode;
		}
	}
}

let list = new SinglyLinkedList()
list.push('85');
list.push('87');
list.push('89');
list.push('91');
list.push('93');
list.push('95');
list.push('97');
list.push('99');
console.log(list.remove(1));
console.log(list.remove(1));
console.log(list);