const path = require('path');
const fs = require('fs');

const input = fs
	.readFileSync(path.join(__dirname, 'input.txt'), 'utf8')
	.toString()
	.trim()
	.split('\n');

const sampleInputs = [
	{
		input: ``.split('\n').map(elem => elem.trim()),
		partOne: undefined,
		partTwo: undefined,
	},
	{
		input: ``.split('\n').map(elem => elem.trim()),
		partOne: undefined,
		partTwo: undefined,
	},
];

module.exports = {
	input,
	sampleInputs,
};
