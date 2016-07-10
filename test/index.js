var fs = require('fs');
var path = require('path');
var assert = require('assert');
var babel = require('babel-core');

function getCodeFromFile ( file ) {
	return fs.readFileSync(path.join(__dirname, file), 'utf8');
}

function runBabel ( file, configFile ) {
	var options = {
		presets: [require.resolve(configFile)]
	};
	return babel.transform(getCodeFromFile(file), options).code + '\n';
}

describe('transform', function () {

	it('input properly transformed to output', function () {
		var transformedCode = runBabel('./fixtures/input.js', '../');
		assert.equal(transformedCode, getCodeFromFile('./fixtures/output.js'));
	});

});
