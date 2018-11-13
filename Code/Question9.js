let question9 = ( nums ) => {
	let cnt = 0;
	let idx = 0;
	let len = nums.length;
	for( let i = 0 ; i < len ; i++ ){
		if( nums[i] === 0 ) {
			cnt++;
			continue;
		}
		nums[idx] = nums[i];
		idx++;
	}

	for( let i = len - cnt ; i < len ; i++ ) {
		nums[i] = 0;
	}
	return nums;
};

// test
let nums = [0, 5, 0, 3, -1];
console.log(question9(nums));