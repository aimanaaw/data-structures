// Remove a node from a specific index

class Node {
	constructor(val) {
		this.val = val;
		this.next = null;
		this.prev = null;
	}
}

class DoublyLinkedList {
	constructor() {
		this.head = null;
		this.tail = null;
		this.length = 0;
	}

	push(val) {
		let newNode = new Node(val);
		if (this.length === 0) {
			this.head = newNode;
			this.tail = newNode;
			
		} else {
			this.tail.next = newNode;
			newNode.prev = this.tail;
			this.tail = newNode;
		}
		this.length++;
		return this;
	}

	pop() {
		if (this.length === 0) return undefined;
		if (this.length === 1) {
			this.head = null;
			this.tail = null;
		} else {
			let newTail = this.tail.prev;
			newTail.next = null;
			this.tail = newTail;
		}
		this.length--;
		return this;
	}

	shift() {
		if (this.length === 0) return undefined;
		let currentHead = this.head;
		if (this.length === 1) {
			this.head = null;
			this.tail = null;
		} else {
			let newHead = currentHead.next;
			newHead.prev = null;
			this.head = newHead;
		}
		this.length--;
		return currentHead;
	}

	unshift(val) {
			let newNode = new Node(val);
			if (this.length === 0) {
				this.head = newNode;
				this.tail = newNode;
			} else {
				newNode.next = this.head;
				this.head.prev = newNode;
				this.head = newNode;
			}
			this.length++;
			return this;

	}

	getValue(index) {
		if (index < 0 || index >= this.length) return null;
		let counter;
		let currentNode;
		if (index < this.length - index) {
			counter = 0;
			currentNode = this.head;
			while (counter !== index) {
				currentNode = currentNode.next;
				counter++;
			};
		} else {
			counter = this.length - 1;
			currentNode = this.tail;
			while (counter !== index) {
				currentNode = currentNode.prev;
				counter--;
			}
		}
		return currentNode;
	}

	setValue(setValue, index) {
		if (index < 0 || index >= this.length) return null;
		let currentNode = this.getValue(index);
		currentNode.val = setValue;
		return currentNode;
	}

	insert (newValue, index) {
		if (index < 0 || index >= this.length) return null;
		if (index === 0) {
			this.unshift(newValue);
			return true;
		} else if (index === this.length) {
			this.push(newValue);
			return true;
		} else {
			let previousNode = this.getValue(index - 1);
			let nextNode = this.getValue(index);
			let newNode = new Node(newValue);
			
			previousNode.next = newNode;
			nextNode.prev = newNode;
			newNode.next = nextNode;
			newNode.prev = previousNode;
			this.length++;
		}
		return this;
	}

	remove(index) {
		if (index < 0 || index >= this.length) return null;
		if (index === 0) return this.shift();
		if (index === this.length - 1) return this.pop();

		let removedNode = this.getValue(index);
		let previousNode = removedNode.prev;
		let nextNode = removedNode.next;

		previousNode.next = nextNode;
		nextNode.prev = previousNode;
		removedNode.next = null;
		removedNode.prev = null;
		this.length--;

		return this;
	}
}

let list = new DoublyLinkedList();

list.push('85');
list.push('87');
list.push('89');
list.push('91');
list.push('93');
list.push('95');
list.push('97');
list.push('99');
// console.log(list)
console.log(list.remove(1));
console.log(list.getValue(1))