'use strict';

module.exports = {
	plugins: [
		'transform-es2015-function-name',
		'transform-es2015-arrow-functions',
		['transform-es2015-template-literals', {
			spec: true
		}],
		'transform-es2015-block-scoping',
		'check-es2015-constants',
		'transform-es2015-shorthand-properties',
		['transform-es2015-computed-properties', {
			loose: true
		}],
		'transform-es3-member-expression-literals',
		'transform-es3-property-literals'
	]
};
