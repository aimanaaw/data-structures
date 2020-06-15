// Set a value at a specified index

// Accept a value and an index
// Find the specific node
// If node not found - return false
// If node found - set the value of that node to the value passed to the function
// return node

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
console.log(list.setValue(88, 1));
console.log(list);