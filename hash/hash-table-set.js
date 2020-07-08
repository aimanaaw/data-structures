
class HashTable {
	constructor(size = 4) {
		this.keyMap = new Array(size);
	}

	_hash(key) {
		let total = 0;
		let WEIRD_PRIME = 31;
		for (let i = 0; i < Math.min(key.length, 100); i++) {
			let char = key[i];
			let value = char.charCodeAt(0) - 96;
			total = (total * WEIRD_PRIME + value) % this.keyMap.length;
		}
		return total;
	}

	set(key, value) {
		let index = this._hash(key);
		if (!this.keyMap[index]) {
			this.keyMap[index] = [];
		}
		this.keyMap[index].push([key, value]);
		return index;
	}
}

let ht = new HashTable();
console.log(ht.set("hello world", "goodbye!!"))
console.log(ht.set("hello", "mo!!"))
console.log(ht.set("world", "ok!!"))
console.log(ht.set("yes", "see you later!!"))
console.log(ht.set("lmao", "why!!"))
console.log(ht.set("later", "bye!!"))
console.log(ht.set("carpenter", "swim!!"))
console.log(ht.set("rumble", "drive!!"))
console.log(ht.set("subaru", "sti!!"))
console.log(ht)