const robot = {
	model: 'SAL-1000',
  mobile: true,
  sentient: false,
  armor: 'Steel-plated',
  energyLevel: 75
};

// What is missing in the following method call?
//robot was missing
const robotKeys = Object.keys(robot);

console.log(robotKeys);

// Declare robotEntries below this line:
//has to have the robot argument
const robotEntries = Object.entries(robot);

console.log(robotEntries);

// Declare newRobot below this line:
const newRobot = Object.assign({ 
  //target
laserBlaster: true, voiceRecognition: true}, robot);]
 //robot is the source

console.log(newRobot);
