var https = require('https');

var requestOptions = {
  host: 'sytantris.github.io',
  path: '/http-examples/step3.html'
};



function getAndPrintHTML (options) {

  /* Add your code here */

  var str = '';

  var requestOptions = {
    host: options.host,
    path: options.path
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

getAndPrintHTML(requestOptions);
