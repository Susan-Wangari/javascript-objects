const robot = {
  model: '1E78V2',
  energyLevel: 100,
  functionality: {
    beep() {
      console.log('Beep Boop');
    },
    fireLaser() {
      console.log('Pew Pew');
    },
  }
};
//destructuring 
//calls the value of functionality on robot
const { functionality } = robot;
//accesses the inner value of inner components of functionality
functionality.beep();
