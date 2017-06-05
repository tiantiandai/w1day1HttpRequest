var https = require('https');

function getAndPrintHTML () {

  var str = '';

  var requestOptions = {
    host: 'sytantris.github.io',
    path: '/http-examples/step2.html'
  };

  /* Add your code here */
  https.get(requestOptions, function(response) {

    response.setEncoding('utf8');

    response.on('data', function(data) {
    str += data;
  });



    response.on('end', function(){
    console.log(str);
    console.log('Response sbuffer ends. ');
  });

  });
}

getAndPrintHTML();