'use strict';

module.exports = {
	plugins: [
		'syntax-dynamic-import',
		['transform-object-rest-spread', {
			useBuiltIns: true
		}]
	]
};
