var a = 1;
var b = 2;
b = 3;

function foo() {
	var _this = this;

	var bar = {
		bad: function () {
			var a = "a b c " + String(d) + " e";
			console.log(_this.foo);
		},
		"catch": function () {}
	};
	bar["catch"] = function () {};
}
