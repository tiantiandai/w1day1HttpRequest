var getHTML = require('../http-functions');

var requestOptions = {
  host: 'sytantris.github.io',
  path: '/http-examples/step6/lowercase.html'
};

function printLowerCase (html) {

  /* Write your code here! */
  var str = html.toLowerCase();
  console.log(str);
}

getHTML(requestOptions, printLowerCase);