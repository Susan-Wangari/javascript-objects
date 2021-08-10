let retreatMessage = 'We no longer wish to conquer your planet. It is full of dogs, which we do not care for.';

// Write your code below
let alienShip = {
  retreat() {
    console.log(retreatMessage);
  },
  //adding another method and separting it using a comma
  takeOff() {
    console.log('Spim... Borp... Glix... Blastoff!');
  }
};
//invoking the methods
alienShip.retreat();
alienShip.takeOff();
