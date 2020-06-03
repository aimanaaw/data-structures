

function countString (str) {
	const newString = str.split(' ').join('')
	console.log("the new string", newString)
	let charObject = {};

	for (let i = 0; i < newString.length; i++) {
		const eachCharacter = newString[i];
		if (charObject[eachCharacter] > 0 && isNaN(eachCharacter)) {
			charObject[eachCharacter]++;
		} else if (!charObject[eachCharacter] && isNaN(eachCharacter)) {
			charObject[eachCharacter.toLowerCase()] = 1;
		} else {
			continue;
		}
	}


	return charObject;
}

console.log(countString('Your Pin is 1234'))