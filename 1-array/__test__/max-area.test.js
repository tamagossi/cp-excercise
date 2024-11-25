const { bruteForceSolution } = require('../max-area');

const TEST_CASES = [
	{
		input: [1, 8, 6, 2, 5, 4, 8, 3, 7],
		expected: 49, // Max area between indices 1 and 8 with height 7
	},
	{
		input: [1, 2],
		expected: 1, // Only two lines, so max area is min(1, 2) * 1 = 1
	},
	{
		input: [3, 3, 3, 3, 3],
		expected: 12, // Max area between first and last index: 3 * (5 - 1) = 12
	},
	{
		input: [5, 4, 3, 2, 1],
		expected: 6, // Max area between first and last index: min(5, 1) * 4 = 6
	},
	{
		input: [1, 2, 3, 4, 5],
		expected: 6, // Max area between first and last index: min(1, 5) * 4 = 6
	},
	{
		input: [],
		expected: 0, // No lines, so no area
	},
	{
		input: [5],
		expected: 0, // Only one line, so no container can be formed
	},
	{
		input: [1, 2, 1, 2, 1, 2, 1, 2],
		expected: 12, // Max area between indices 1 and 7 with height 2: 2 * 6 = 12
	},
	{
		input: [100, 1, 1, 1, 100],
		expected: 400, // Max area between the two 100s at the edges: min(100, 100) * 4 = 400
	},
	{
		input: [1, 2, 4, 3, 5, 2],
		expected: 8, // Max area between indices 2 and 4: min(4, 5) * 2 = 8
	},
];

describe('max area brute force solution unit test: ', () => {
	test.each(TEST_CASES)(
		'Given input $input, the expected max area is $expected',
		({ input, expected }) => {
			expect(bruteForceSolution(input)).toBe(expected);
		}
	);
});
