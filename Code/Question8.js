/*
	prob : 정수 배열(int array)이 주어지면 두번째로 큰 값을 프린트하시오.

	time complexity : O(n)
	space complexity : O(1)
*/

let question8 = ( nums ) => {
	let max = Number.MIN_VALUE;
	let result;
	nums.forEach(( num ) => {
		max = Math.max(max, num);
	});
	nums.forEach(( num ) => {
		if( max > num ) {
			result = ( result ) ? Math.max(result, num) : num;
		}
	});
	return ( result ) ? result : 'Does not exist';
};

// test
let nums = [10, 5, 4, 3, -1];
console.log(question8(nums));