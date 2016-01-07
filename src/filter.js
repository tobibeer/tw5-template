/*\
title: $:/plugins/tobibeer/PLUGINNAME/filter.js
type: application/javascript
module-type: filteroperator

a filter to...

@preserve
\*/

(function(){

/*jslint node: true, browser: true */
/*global $tw: false */
"use strict";

/*
The PLUGINNAME filter function...
*/
exports.PLUGINNAME = function(source,operator,options) {
	var results = [];
	source(function(tiddler,title) {
	});
	// Return errors
	try {
	// On error...
	} catch(e) {
		return ["Error in make filter:\n" + e];
	}

	// Return filter results
	return results;
};

})();