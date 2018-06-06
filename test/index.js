'use strict';

const fs = require('fs');
const path = require('path');
const assert = require('assert');
const babel = require('babel-core');

function getCodeFromFile ( file ) {
	return fs.readFileSync(path.join(__dirname, file), 'utf8');
}

function runBabel ( file, config, cb ) {
	return babel.transformFile(path.join(__dirname, file), config, function ( err, result ) {
		if ( err ) {
			throw err;
		}
		cb(`${result.code}\n`);
	});
}

describe('Basic', function () {

	if ( /^4\./.test(process.versions.node) ) {
		// Node 4 has sometimes racing condition problems with babel-preset-env
		this.timeout(5000);
	}

	it('should properly transform code', function ( done ) {
		runBabel('./fixtures/basic.input.js', {
			presets: require.resolve('../')
		}, function ( transformedCode ) {
			assert.equal(transformedCode, getCodeFromFile('./fixtures/basic.output.js'));
			done();
		});
	});

});

describe('Next', function () {

	it('should properly transform code', function ( done ) {
		runBabel('./fixtures/next.input.js', {
			presets: require.resolve('../next')
		}, function ( transformedCode ) {
			assert.equal(transformedCode, getCodeFromFile('./fixtures/next.output.js'));
			done();
		});
	});

});

describe('React', function () {

	it('should properly transform code', function ( done ) {
		runBabel('./fixtures/react.input.js', {
			presets: require.resolve('../react')
		}, function ( transformedCode ) {
			assert.equal(transformedCode, getCodeFromFile('./fixtures/react.output.js'));
			done();
		});
	});

});

describe('Vue', function () {

	it('should properly transform code', function ( done ) {
		runBabel('./fixtures/vue.input.js', {
			presets: require.resolve('../vue')
		}, function ( transformedCode ) {
			assert.equal(transformedCode, getCodeFromFile('./fixtures/vue.output.js'));
			done();
		});
	});

});
