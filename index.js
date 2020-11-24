var http = require('http');
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
    //console.log('Message Sent');
  });

device
  .on('message', function(topic, payload) {
    console.log('message', topic, payload.toString());

    nilaiSub = function(){
      let pesan = payload.toString()
      return pesan;
    }

  });

  const express = require('express');
  const app = express();
  
  const port = 8080;
  
  app.use('/', (req, res) => {
  
      // res.send('welcomeeeeee');
      res.writeHead(200, { 'Content-Type': 'text/html' });
      
          res.write('Nilai Random 10: ');
          res.write('<span id="r10"></span>');
            
            var obj = JSON.parse(nilaiSub());

            res.write('<script>');
            res.write('document.getElementById("r10").innerHTML =' + obj.random10);
            res.write('</script>');

          
          res.end();
  
  })
  
  app.listen(port, () => {
      console.log('web is running');
  })


// http.createServer(function (req, res) {
//   res.writeHead(200, { 'Content-Type': 'text/html' });

    
    
//     res.write('Nilai Random 10: ');
//     res.write('<span id="r10"></span>');

//     // setInterval(myTimer,1000);
//     // function myTimer(){
      
//       var obj = JSON.parse(nilaiSub());
//       // let a = "Nilai Random 10: " + obj.random10 + "<br></br>" + " Nilai Random 5: " + obj.random5
    
//       // res.write(a)
      

//       // let a = "Nilai Random 10: " + obj.random10;
//       // let b = " Nilai Random 5: " + obj.random5;
//       res.write('<script>');
//       res.write('document.getElementById("r10").innerHTML =' + obj.random10);
//       res.write('</script>');
//     // }
    
//     res.end();
    


// }).listen(8080);



