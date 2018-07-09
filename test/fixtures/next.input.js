const jackson = { finn: 'finn', charlie: 'charlie', zoey: 'zoey' };
const missy = { hazel: 'hazel', prince: 'prince', roscoe: 'roscoe' };
const macy = {...jackson, penny: 'penny'};
const abby = {...jackson, ...missy};
const {finn, charlie, zoey} = jackson;
const {hazel, prince, ...roscoe} = missy;

import('jackie').then(( jackie ) => jackie);
