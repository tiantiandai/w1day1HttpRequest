var getHTML = require('../http-functions');


var requestOptions = {
  host: 'sytantris.github.io',
  path: '/http-examples/step6/uppercase.html'
};

function printUpperCase (html) {

  /* Write your code here! */
  var str = html.toUpperCase();
  console.log(str);
}

getHTML(requestOptions, printUpperCase);