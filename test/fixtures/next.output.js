function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }

const jackson = { finn: 'finn', charlie: 'charlie', zoey: 'zoey' };
const missy = { hazel: 'hazel', prince: 'prince', roscoe: 'roscoe' };
const macy = Object.assign({}, jackson, { penny: 'penny' });
const abby = Object.assign({}, jackson, missy);
const { finn, charlie, zoey } = jackson;
const { hazel, prince } = missy,
      roscoe = _objectWithoutProperties(missy, ['hazel', 'prince']);
