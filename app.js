var awsIot = require('aws-iot-device-sdk');

var device = awsIot.device({
   keyPath: '237de72567-private.pem.key',
  certPath: '237de72567-certificate.pem.crt',
    caPath: 'rootCA.pem',
  clientId: 'awalanlagi',
      host: 'a1fif474smypl7-ats.iot.ap-southeast-1.amazonaws.com'
});

device
  .on('connect', function() {
    console.log('connect');
    device.subscribe('topic_2');

    device.publish('topic_2', JSON.stringify({ test_data: 1}));
    console.log('Message Sent');
  });

device
  .on('message', function(topic, payload) {
    console.log('message', topic, payload.toString());
  
  exports.nilaiSub = function(){
    let pesan = payload.toString()
    return pesan;
  }
  });