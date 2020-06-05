// let mySet = new Set()

// mySet.add(1)
// let o = {a:1, b:2}
// mySet.add(o )

// console.log(mySet)

function anagram(string1, string2) {

	let charObject1 = {};
	let charObject2 = {};

	for (let eachCharacter of string1) {
		charObject1[eachCharacter] = (charObject1[eachCharacter] || 0) + 1
	}

	for (let eachCharacter of string2) {
		charObject2[eachCharacter] = (charObject2[eachCharacter] || 0) + 1
	}

	for (let key in charObject1) {
		if (!(key in charObject2)) {
			console.log(`${key} is not in the second array`)
			return false;
		}
		if (charObject1[key] !== charObject2[key]) {
			console.log(`${key} is not present in the second array as many times as array1`)
			return false; 
		}
	}

	return true;

}


// console.log(anagram('rat', 'car'))
console.log(anagram('anagram', 'nagaram'))
// console.log(anagram('aaz', 'zaz'))