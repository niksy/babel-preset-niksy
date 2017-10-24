'use strict';

module.exports = {
	plugins: [
		'transform-es2015-spread',
		'transform-es2015-destructuring',
		['transform-object-rest-spread', {
			useBuiltIns: true
		}],
		'transform-es2015-parameters',
		'transform-es2015-classes'
	]
};
