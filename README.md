![Deprecated project](https://img.shields.io/badge/status-deprecated-red.svg)

**This project is deprecated.**

Use [`@babel/preset-env`](https://babeljs.io/docs/en/babel-preset-env) instead.

---

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
		"babel-preset-niksy"
	]
}
```

If you’re using [presets](#presets), **it’s highly recommended to apply default preset:**

```json
{
	"presets": [
		"babel-preset-niksy/other-preset",
		"babel-preset-niksy"
	]
}
```

## Options

You can pass additional options to default preset.

```json
{
	"presets": [
		["babel-preset-niksy", {
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
		"babel-preset-niksy/next"
	]
}
```

### React

Process React code (e.g. JSX syntax).

```json
{
	"presets": [
		"babel-preset-niksy/react"
	]
}
```

### Vue

Process Vue code (e.g. code with JSX syntax).

```json
{
	"presets": [
		"babel-preset-niksy/vue"
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
