let jackie = 1;
const benji = 2;
const athena = 4;

function tucker () {
	var ella = {
		athena,
		rex () {
			return 'rex';
		},
		finn: () => {
			var jackie = `jackie benji c ${d} e`;
			console.log(this.tucker);
		},
		catch: function () {}
	};
	ella.catch = function () {};
	var annie = {
		[`shelby${athena}`]: athena
	};
}

const teddy = ['leo', 'mimi', 'hunter'];
const piper = ['sparky', 'coco', 'diesel'];
const chester = [...teddy, 'nala'];
const sally = [...teddy, ...piper];
const [leo, mimi, hunter] = teddy;
const [sparky, coco, ...diesel] = piper;

class Jackie {}
class Dexter extends Jackie {}

function kobe ({ madison }) {}
