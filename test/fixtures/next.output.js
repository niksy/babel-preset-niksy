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
