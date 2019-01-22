'use strict';

// Complete this algo
const binarySearch = (array, target) => {
	let sorted = array.sort()
	let midPoint = sorted[Math.ceil(sorted.length/2)]

	while(sorted.length > 1){
		if(midPoint === target){
			return true
		}
		if (target > midPoint){
			sorted = sorted.slice(sorted.indexOf(midPoint) + 1)
			midPoint = sorted[Math.ceil(sorted.length/2)]
		}
		if (target < midPoint){
			sorted = sorted.slice(0, sorted.indexOf(midPoint))
			midPoint = sorted[Math.ceil(sorted.length/2)]
		}
	}
	return false
};

console.log(binarySearch([1,2,3,4,5], 3))

/*
	EXTRA CREDIT:

	Can you augment the function above to run in constant O(1) space?
	This means, you cannot edit/copy the original array!
	How can we use other pieces of data, like pointers, to avoid slicing?

*/

module.exports = binarySearch