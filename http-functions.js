var https = require('https');

var requestOptions = {
  host: 'sytantris.github.io',
  path: '/http-examples/step4.html'
};

function printHTML (html) {
  console.log(html);
}

function getHTML (options, callback) {

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
    callback(str);
    console.log('Response sbuffer ends. ');
  });

  });
}

getHTML(requestOptions, printHTML);

module.exports = function getHTML (options, callback) {
    /* Your code here */
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
    printHTML(str);
    console.log('Response sbuffer ends. ');
  });

  });
};