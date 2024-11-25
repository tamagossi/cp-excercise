/**
 * Given an array of integers, return the indices of the two numbers that add up to a given target.
 * Example input: [1, 2, 7, 9, 2] → 11
 * Example output: [3, 4]
 *
 * 1. Are all the numbers positive or can there be negatives? **No negatives**
 * 2. Is there any duplicate numbers? **No duplicate**
 * 3. Will there always be a solution available? **No**
 * 4. Empty array? **Yes**
 */

/**
 *
 * @param {*} arr | is the array of numbers, it can be empty array or 1 ... n numbers
 * @param {*} target | is the single target numbers
 * @returns a pair of indices of the two numbers that add up to the target
 *
 * The time complexity is O(n^2) and the memoty complexity is O(1)
 */
const bruteForceSolution = (arr, target) => {
	if (target.length <= 1) return null;

	for (const [idx, num] of arr.entries()) {
		for (let targetIdx = idx + 1; targetIdx < arr.length; targetIdx++) {
			if (arr[targetIdx] + num === target) {
				return [idx, targetIdx];
			}
		}
	}

	return null;
};

/**
 *
 * @param {*} arr | is the array of numbers, it can be empty array or 1 ... n numbers
 * @param {*} target  | is the single target numbers
 * @returns
 *
 * The time complexity is O(n) and the memoty complexity is O(n)
 */
const optimalSolution = (arr, target) => {
	if (target.length <= 1) return null;

	const map = {};

	for (const [idx, num] of arr.entries()) {
		const remain = target - num;

		if (remain in map) {
			return [map[remain], idx];
		} else {
			map[num] = idx;
		}
	}

	return null;
};

module.exports = {
	bruteForceSolution,
	optimalSolution,
};
