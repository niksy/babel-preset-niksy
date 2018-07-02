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
			modules: false
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
			'transform-es3-member-expression-literals',
			'transform-es3-property-literals'
		]
	};

};
