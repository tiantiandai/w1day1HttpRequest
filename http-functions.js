var https = require('https');


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

module.exports = getHTML;