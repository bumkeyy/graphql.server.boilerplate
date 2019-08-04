var NATS = require('nats');
var nats = NATS.connect();


// Simple Subscriber
nats.subscribe('machineInfo', function (msg) {
  console.log('Received a message: ' + msg);
});