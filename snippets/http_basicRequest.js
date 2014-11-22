/*global $, localStorage, angular, alert, document, console, confirm, require */
/*jshint unused:false */

var http = require("http");

// http://nodejs.org/api/http.html
var options = {
  hostname: 'templates.dynamicweb.com',
  port: 80,
  path: '/TemplateTags/Dynamicweb-template-tags/General-tags/Global-template-tags.aspx',
  method: 'GET'
};

var req = http.request(options, function(res) {
  console.log('STATUS: ' + res.statusCode);
  console.log('HEADERS: ' + JSON.stringify(res.headers));
  res.setEncoding('utf8');
  res.on('data', function (chunk) {
    console.log('BODY: ' + chunk);
  });
});

req.on('error', function(e) {
  console.log('problem with request: ' + e.message);
});

// write data to request body
req.write('data\n');
req.write('data\n');
req.end();