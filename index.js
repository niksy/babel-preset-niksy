'use strict';

module.exports = ( context, passedOptions ) => {

	const options = {
		'preset-env': {
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
		}
	};

	if (
		typeof passedOptions !== 'undefined' &&
		('preset-env' in passedOptions)
	) {
		options['preset-env'] = Object.assign({}, options['preset-env'], passedOptions['preset-env']);
	}

	return {
		presets: [
			[
				'env',
				options['preset-env']
			]
		],
		plugins: [

			// We want to use spec-compliant variant
			[
				'transform-es2015-template-literals',
				{
					spec: true
				}
			],

			'transform-es3-member-expression-literals',
			'transform-es3-property-literals'
		]
	};

};
