'use strict';

module.exports = ( context, passedOptions ) => {

	const presetEnvKey = '@babel/preset-env';

	const options = {
		[presetEnvKey]: {
			targets: {
				node: '4',
				browsers: [
					'last 2 versions',
					'ie >= 9'
				]
			},
			modules: false
		}
	};

	if (
		typeof passedOptions !== 'undefined' &&
		(presetEnvKey in passedOptions)
	) {
		options[presetEnvKey] = Object.assign({}, options[presetEnvKey], passedOptions[presetEnvKey]);
	}

	return {
		presets: [
			[
				presetEnvKey,
				options[presetEnvKey]
			]
		],
		plugins: [
			'@babel/plugin-transform-member-expression-literals',
			'@babel/plugin-transform-property-literals'
		]
	};

};
