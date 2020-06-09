function naiveSearch(bigString, smallString) {
	if (bigString.length === 0 || smallString.length === 0) return `empty string`;
	for (let i = 0; i < bigString.length; i++) {
			let counter = 0;
			while (counter < smallString.length) {
				if (counter === (smallString.length - 1)) return true;
				if (smallString[counter] !== bigString[i + counter]) {
					break;
				} else {
					counter++;
				}
				
			}
	}
	return false;

}


console.log(naiveSearch("wozozomgozoz", "omgzz"))