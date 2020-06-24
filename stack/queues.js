// Add to the end. Remove from the beginning
class Node {
	constructor(val) {
		this.value = val;
		this.next = null;
	}
}


class Queue {
	constructor() {
		this.first = null;
		this.last = null;
		this.size = 0;
	}
	enqueue(val) {
		let newNode = new Node(val);
		if (this.size === 0) {
			this.first = newNode;
			this.last = newNode;
		} else {
			let oldTail = this.last;
			oldTail.next = newNode;
			this.last = newNode;
		}
		this.size++;
		return this;
	}

	dequeue() {
		if (this.size === 0) return null;
		let removedNode = this.first;
		if (this.size === 1) {
			this.first = null;
			this.last = null;
		} else {
			let newHead = removedNode.next;
			this.first = newHead;
			removedNode.next = null;
		}
		this.size--;
		return removedNode;
	}
}

let q = new Queue()
q.enqueue(10);
q.enqueue(20);
q.enqueue(30);
q.enqueue(40);
q.enqueue(50);
q.enqueue(60);
q.enqueue(70);
q.enqueue(80);
console.log(q.dequeue());
console.log(q)