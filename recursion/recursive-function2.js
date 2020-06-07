  function sumRange(num) {
  	if (num === 1) return 1; // base case
  	return num + sumRange(num - 1) // recursive call
  }

