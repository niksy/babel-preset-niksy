'use strict';

module.exports = {
	presets: [
		['env', {
			targets: {
				node: '4',
				browsers: [
					'last 2 versions',
					'ie >= 9'
				]
			},
			loose: true,
			modules: false,
			exclude: [
				// We want to use spec-compliant variant
				'transform-es2015-template-literals'
			]
		}]
	],
	plugins: [

		// We want to use spec-compliant variant
		['transform-es2015-template-literals', {
			spec: true
		}],

		'transform-es3-member-expression-literals',
		'transform-es3-property-literals'
	]
};
