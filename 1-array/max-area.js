/**
 * You are given an array of positive integers where each integer
 * represents the height of a vertical line on a chart.
 * Find two lines which together with the x-axis forms a container that would
 * hold the greatest amount of water. Return the area of water it would hold.
 *
 * 1. Does the thickness of the lines affect the area? **NO**
 * 2. Do the left and right sides of the graph count as walls? **NO**
 * 3. Does a higher line inside our container affect our are? **NO**
 */

const bruteForceSolution = (arr) => {
	let maxArea = 0;
	if (!arr || arr.length <= 1) return maxArea;

	for (const [leftWallIdx, leftWallHeight] of arr.entries()) {
		for (let rightWallIdx = leftWallIdx + 1; rightWallIdx < arr.length; rightWallIdx++) {
			/**
			 * Since the water will fall and won't fill the highest wall
			 * hence, we use the wall with lower height
			 */
			const height = Math.min(leftWallHeight, arr[rightWallIdx]);
			const base = rightWallIdx - leftWallIdx;
			const area = base * height;

			if (area > maxArea) maxArea = area;
		}
	}

	return maxArea;
};

module.exports = {
	bruteForceSolution,
};
