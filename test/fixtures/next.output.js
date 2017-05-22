function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }

const jackie = ['leo', 'mimi', 'hunter'];
const piper = ['sparky', 'coco', 'diesel'];
const chester = [].concat(jackie, ['nala']);
const sally = [].concat(jackie, piper);
const leo = jackie[0],
      mimi = jackie[1],
      hunter = jackie[2];
const sparky = piper[0],
      coco = piper[1],
      diesel = piper.slice(2);


const jackson = { finn: 'finn', charlie: 'charlie', zoey: 'zoey' };
const missy = { hazel: 'hazel', prince: 'prince', roscoe: 'roscoe' };
const macy = Object.assign({}, jackson, { penny: 'penny' });
const abby = Object.assign({}, jackson, missy);
const finn = jackson.finn,
      charlie = jackson.charlie,
      zoey = jackson.zoey;

const hazel = missy.hazel,
      prince = missy.prince,
      roscoe = _objectWithoutProperties(missy, ['hazel', 'prince']);

let Jackie = function Jackie() {
  _classCallCheck(this, Jackie);
};

let Dexter = function (_Jackie) {
  _inherits(Dexter, _Jackie);

  function Dexter() {
    _classCallCheck(this, Dexter);

    return _possibleConstructorReturn(this, (Dexter.__proto__ || Object.getPrototypeOf(Dexter)).apply(this, arguments));
  }

  return Dexter;
}(Jackie);
