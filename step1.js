var https = require('https');

function getAndPrintHTMLChunks () {

  var requestOptions = {
    host: 'sytantris.github.io',
    path: '/http-examples/step1.html'
  };

//This function should console.log each chunk of data as it is received,
//concatenated with a newline character ('\n')
//so you can visualize each chunk.

https.get(requestOptions, function(response) {
  var str = '';
  response.setEncoding('utf8');

  response.on('data', function(data) {
    console.log(data + "\n");
  });

  response.on('end', function() {
    console.log('Response stream complete. ');

  });

});
}

getAndPrintHTMLChunks();


