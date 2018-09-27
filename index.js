'use strict';

module.exports = ( context, passedOptions ) => {

	const presetEnvKey = '@babel/preset-env';

	const options = {
		[presetEnvKey]: {
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
