let a = 1;
const b = 2;
b = 3;

function foo () {
	var bar = {
		bad: () => {
			var a = `a b c ${d} e`;
			console.log(this.foo);
		},
		catch: function () {}
	};
	bar.catch = function () {};
}
