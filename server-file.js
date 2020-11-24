var mathh = require('./mathh.js');
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
    







     var http = require('http'),
     parse = require('url').parse,
     join = require('path').join,
     fs = require('fs'),
     root = join(__dirname, 'www'),
     PORT = 3300,
     
     
    
     
     server = http.createServer(function(req, res){
         var url = parse(req.url),
             path = join(root, url.pathname),
             stream = fs.createReadStream(path);
 
         stream.on('data', function(bagian){
             res.write(bagian);
         });
 
         stream.on('end', function(){
             res.end();
         });
 
         stream.on('error', function(){
             res.setHeader('Content-Type','text/html');
 
             
             let obj = JSON.parse(payload.toString());

            

             res.write('<head><script src="mathh.js"></script></head>');
             res.write('Nilai Random 10: <span id="r10"></span>');
             res.write('<script>');
             res.write('setInterval(myTimer,1000);');
             res.write('function myTimer(){');
             res.write('document.getElementById("r10").innerHTML = '+ mathh.mathh());
             res.write('}');
             res.write('</script>');
 
            //res.end();
         })
 
     });
 
     server.listen(PORT);
     console.log('Port '+PORT+': Server File ');
 
   });
   
