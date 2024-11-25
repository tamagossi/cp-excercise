const { bruteForceSolution, optimalSolution } = require('../two-indices');

const TEST_CASES = [
	{
		input: [1, 2, 7, 9],
		target: 11,
		expected: [1, 3],
	},
	{
		input: [1, 2, 7, 9, 2],
		target: 10,
		expected: [0, 3],
	},
	{
		input: [1, 2, 7, 9, 2],
		target: 12,
		expected: null,
	},
	{
		input: [],
		target: 10,
		expected: null,
	},
	{
		input: [1],
		target: 10,
		expected: null,
	},
	// Edge case: target is the sum of the first and last elements
	{
		input: [1, 4, 5, 6],
		target: 7,
		expected: [0, 3],
	},
	// Edge case: array with only two elements that sum to the target
	{
		input: [3, 7],
		target: 10,
		expected: [0, 1],
	},
	// Edge case: array with only two elements but no solution
	{
		input: [3, 7],
		target: 5,
		expected: null,
	},
	// Edge case: target is larger than the sum of any two elements
	{
		input: [1, 2, 3, 4, 5],
		target: 100,
		expected: null,
	},
	// Edge case: target is the sum of the two smallest numbers
	{
		input: [1, 9, 8, 7, 2],
		target: 3,
		expected: [0, 4],
	},
	// Edge case: target is the sum of the two largest numbers
	{
		input: [1, 5, 3, 8, 7],
		target: 15,
		expected: [3, 4],
	},
];

describe('two-indices brute force solution test', () => {
	test.each(TEST_CASES)(
		'given $input and $target, should return $expected',
		({ input, target, expected }) => {
			expect(bruteForceSolution(input, target)).toEqual(expected);
		}
	);
});

describe('two-indices optimal solution test', () => {
	test.each(TEST_CASES)(
		'given $input and $target, should return $expected',
		({ input, target, expected }) => {
			expect(optimalSolution(input, target)).toEqual(expected);
		}
	);
});
