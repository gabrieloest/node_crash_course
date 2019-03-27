const EventEmmiter = require('events');

// Create class
class MyEmitter extend EventEmmiter {}


// Init object
const myEmitter = new MyEmitter()'

// Event listener
myEmitter.on('event', () => console.log('Event Fired!'));

// Init event
myEmitter.emit('event');
myEmitter.emit('event');
myEmitter.emit('event');
myEmitter.emit('event');