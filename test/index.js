'use strict';

const fs = require('fs');
const path = require('path');
const assert = require('assert');
const babel = require('babel-core');

function getCodeFromFile ( file ) {
	return fs.readFileSync(path.join(__dirname, file), 'utf8');
}

function runBabel ( file, config ) {
	return `${babel.transform(getCodeFromFile(file), config).code}\n`;
}

describe('Basic', function () {

	it('should properly transform code', function () {
		const transformedCode = runBabel('./fixtures/basic.input.js', {
			presets: require.resolve('../')
		});
		assert.equal(transformedCode, getCodeFromFile('./fixtures/basic.output.js'));
	});

});

describe('Next', function () {

	it('should properly transform code', function () {
		const transformedCode = runBabel('./fixtures/next.input.js', {
			presets: require.resolve('../next')
		});
		assert.equal(transformedCode, getCodeFromFile('./fixtures/next.output.js'));
	});

});
