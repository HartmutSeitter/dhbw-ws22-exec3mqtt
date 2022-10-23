var mqtt    = require('mqtt');
//var client  = mqtt.connect('mqtt://test.mosquitto.org');
var client  = mqtt.connect('mqtt://test.mosquitto.org',{clientId:"hsMQTT"});

client.on('connect', function () {
  console.log("in client.on publish msg");
  //client.subscribe('hs');
  client.publish('hs', 'Hello mqtt');
});
/*
client.on('message', function (topic, message) {
  // message is Buffer
  console.log(message.toString());
  client.end();
});
*/