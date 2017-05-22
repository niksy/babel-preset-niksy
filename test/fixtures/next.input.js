const jackie = ['leo', 'mimi', 'hunter'];
const piper = ['sparky', 'coco', 'diesel'];
const chester = [...jackie, 'nala'];
const sally = [...jackie, ...piper];
const [leo, mimi, hunter] = jackie;
const [sparky, coco, ...diesel] = piper;

const jackson = { finn: 'finn', charlie: 'charlie', zoey: 'zoey' };
const missy = { hazel: 'hazel', prince: 'prince', roscoe: 'roscoe' };
const macy = {...jackson, penny: 'penny'};
const abby = {...jackson, ...missy};
const {finn, charlie, zoey} = jackson;
const {hazel, prince, ...roscoe} = missy;
