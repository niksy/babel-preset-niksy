'use strict';

const fs = require('fs');
const path = require('path');
const assert = require('assert');
const babel = require('babel-core');

function getCodeFromFile ( file ) {
	return fs.readFileSync(path.join(__dirname, file), 'utf8');
}

function runBabel ( file, configFile ) {
	const options = {
		presets: [require.resolve(configFile)]
	};
	return `${babel.transform(getCodeFromFile(file), options).code}\n`;
}

describe('Basic', function () {

	it('should properly transform code', function () {
		const transformedCode = runBabel('./fixtures/input.js', '../');
		assert.equal(transformedCode, getCodeFromFile('./fixtures/output.js'));
	});

});
