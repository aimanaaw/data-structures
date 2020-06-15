// Removes from the end of the list

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
		return this;
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

console.log(list.pop());
console.log(list.pop());
console.log(list.tail);
console.log(list.pop());
console.log(list.tail);
console.log(list.pop());
console.log(list.tail);