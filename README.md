# babel-preset-niksy

[![Build Status][ci-img]][ci]

[Babel][babel] preset for my projects.

## Install

```sh
npm install babel-preset-niksy --save
```

## Usage

Add this config to your `.babelrc`:

```json
{
	"presets": [
		"niksy"
	]
}
```

If you’re using [presets](#presets), **it’s highly recommended to apply default preset:**

```json
{
	"presets": [
		"niksy/other-preset",
		"niksy"
	]
}
```

## Options

You can pass additional options to default preset.

```json
{
	"presets": [
		["niksy", {
			// Additional options
		}]
	]
}
```

### `@babel/preset-env`

Type: `Object`

Options for [`@babel/preset-env`][babel-preset-env].

## Presets

In addition to default preset, there are also specific presets. You can apply
multiple presets with [Babel `presets` option][babel-presets].

### Next

Features usually available in next major Node.js version or [latest proposals][tc39-proposals].

```json
{
	"presets": [
		"niksy/next"
	]
}
```

### React

Process React code (e.g. JSX syntax).

```json
{
	"presets": [
		"niksy/react"
	]
}
```

### Vue

Process Vue code (e.g. code with JSX syntax).

```json
{
	"presets": [
		"niksy/vue"
	]
}
```

## License

MIT © [Ivan Nikolić](http://ivannikolic.com)

[ci]: https://travis-ci.org/niksy/babel-preset-niksy
[ci-img]: https://travis-ci.org/niksy/babel-preset-niksy.svg?branch=master
[babel]: https://babeljs.io/
[babel-presets]: https://babeljs.io/docs/en/plugins.html#plugin-ordering
[tc39-proposals]: https://github.com/tc39/proposals#active-proposals
[babel-preset-env]: https://babeljs.io/docs/en/babel-preset-env.html#options
