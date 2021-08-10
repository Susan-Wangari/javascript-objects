let spaceship = {
  'Fuel Type' : 'Turbo Fuel',
  homePlanet : 'Earth',
  color: 'silver',
  'Secret Mission' : 'Discover life outside of Earth.'
};

// Write your code below
//changes the object property
spaceship.color = 'glorious gold';
//adds a new property to the object
spaceship.numEngines = 8;
//using delete keyword to delete a property
delete spaceship['Secret Mission'];
