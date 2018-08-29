'use strict';

const fs = require('fs');
const path = require('path');
const assert = require('assert');
const pify = require('pify');
const babel = require('@babel/core');

function getCodeFromFile ( file ) {
	return pify(fs.readFile)(path.join(__dirname, file), 'utf8');
}

function runBabel ( file, config ) {
	return pify(babel.transformFile)(path.join(__dirname, file), config)
		.then(( result ) => `${result.code}\n`);
}

describe('Basic', function () {

	it('should properly transform code', function () {

		return Promise.all([
			runBabel('./fixtures/basic.input.js', {
				presets: [require.resolve('../')]
			}),
			getCodeFromFile('./fixtures/basic.output.js')
		])
			.then(([ transformedCode, fixture ]) => {
				assert.equal(transformedCode, fixture);
			});

	});

});

describe('Basic, options', function () {

	it('should properly transform code', function () {

		return Promise.all([
			runBabel('./fixtures/basic-options.input.js', {
				presets: [
					[
						require.resolve('../'),
						{
							'@babel/preset-env': {
								modules: 'commonjs'
							}
						}
					]
				]
			}),
			getCodeFromFile('./fixtures/basic-options.output.js')
		])
			.then(([ transformedCode, fixture ]) => {
				assert.equal(transformedCode, fixture);
			});

	});

});

describe('Next', function () {

	it('should properly transform code', function () {

		return Promise.all([
			runBabel('./fixtures/next.input.js', {
				presets: [require.resolve('../next')]
			}),
			getCodeFromFile('./fixtures/next.output.js')
		])
			.then(([ transformedCode, fixture ]) => {
				assert.equal(transformedCode, fixture);
			});

	});

});

describe('React', function () {

	it('should properly transform code', function () {

		return Promise.all([
			runBabel('./fixtures/react.input.js', {
				presets: [require.resolve('../react')]
			}),
			getCodeFromFile('./fixtures/react.output.js')
		])
			.then(([ transformedCode, fixture ]) => {
				assert.equal(transformedCode, fixture);
			});

	});

});

describe('Vue', function () {

	it('should properly transform code', function () {

		return Promise.all([
			runBabel('./fixtures/vue.input.js', {
				presets: [require.resolve('../vue')]
			}),
			getCodeFromFile('./fixtures/vue.output.js')
		])
			.then(([ transformedCode, fixture ]) => {
				assert.equal(transformedCode, fixture);
			});

	});

});
