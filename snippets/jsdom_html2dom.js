/*  DESCRIPTION:
	This snippet will convert content from an URL to a DOM elment and do something with it.
	VERSION:
	1.0.0
	REQUIRES:
	// https://github.com/tmpvar/jsdom
	npm install jsdom --save
*/
/*global $, localStorage, angular, alert, document, console, confirrequire */
/*jshint unused:false */

// Count all of the links from the Node.js build page
var jsdom = require("jsdom").jsdom;

jsdom.env(
	"http://nodejs.org/dist/", // This is where some HTML is fetched from
  ["http://code.jquery.com/jquery.js"], // We will include jQuery
	function (errors, window) {
		console.log("there have been", window.$("a").length, "nodejs releases!"); // We do a jQuery lookup to count the number of released nodeJs versions (244 At the time of writing)
	}
);

// Another example
// Visit documentation page for Dynamicweb CMS template tags and get array of tags
function getTags(window, selector) {
	selector = (typeof selector !== "undefined") ? selector : "a.M0";
	var tags = [];
	window.$(selector).each(function () {
		var tag = window.$(this).text();
		tags.push(window.$.trim(tag.replace(/[<!--\@\,--\>]/ig, "")));
	});
	return tags;
}

jsdom.env(
	"http://templates.dynamicweb.com/TemplateTags/Dynamicweb-template-tags/General-tags/Global-template-tags.aspx", // This is where some HTML is fetched from
  ["http://code.jquery.com/jquery.js"], // We will include jQuery
	function (errors, window) {
		console.log(getTags(window)); // Find Dynamicweb tags on page
	}
);