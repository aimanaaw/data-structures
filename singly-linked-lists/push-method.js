// piece of data - val
// reference to next node - next

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
}

let list = new SinglyLinkedList()
console.log(list.push('hi'));
console.log(list.push('you'));
console.log(list.push('99'));
console.log(list.length);
console.log(list.head);
console.log(list.tail);