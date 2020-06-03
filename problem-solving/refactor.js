function countString(str) {
	let charObject = {};
	for (let eachCharacter of str) {
		if (/[a-zA-Z]/.test(eachCharacter)) {

			charObject[eachCharacter] = ++charObject[eachCharacter] || 1;
			// if (charObject[eachCharacter] > 0) {
			// 	charObject[eachCharacter]++;
			// } else {
			// 	charObject[eachCharacter] = 1;
			// }
		}
	}
	return charObject;
}



console.log(countString('Your Pin is 1234!'))