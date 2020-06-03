

function countString (str) {
	const newString = str.split(' ').join('')
	let charObject = {};

	for (let eachCharacter of newString) {
		if (charObject[eachCharacter] > 0 && isNaN(eachCharacter)) {
			charObject[eachCharacter]++;
		} else if (!charObject[eachCharacter] && isNaN(eachCharacter)) {
			charObject[eachCharacter.toLowerCase()] = 1;
		} 
	}


	return charObject;
}

console.log(countString('Your Pin is 1234'))