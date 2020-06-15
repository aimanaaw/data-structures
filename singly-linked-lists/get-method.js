// Get a value at a specified index

// Accept an index
// Check if index is within the length
// Manually loop through until the index is reached

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

	getValue(val) {
		if (val < 0 || val >= this.length) return null;
		let counter = 0;
		let currentNode = this.head;
		while (counter < val) {
			currentNode = currentNode.next;
			counter++;
		}
		return currentNode;

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
console.log(list.getValue(9));
console.log(list);