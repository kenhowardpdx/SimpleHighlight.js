/*!
* SimpleHighlight 1.0.0
*
* Copyright 2013, Ken Howard - http://kenowardpdx.com
* Released under the WTFPL license - http://sam.zoy.org/wtfpl/
*
* Date: Thu Sept 27 12:00:00 2013 -0700
*/
(function( $ ){

  "use strict";

  $.simpleHighlight = function( string, terms ) {

	$.each(terms, function(i,term) {
		var regex = new RegExp('(\\b' + term + '\\b)','gi'),
		    newStr = '##$1&&'; // To prevent highlighting html tags
		string = string.replace(regex, newStr);
	});
	string = string.replace(/##/g,'<span class="matchedTerm">').replace(/&&/g,'</span>'); // Clean up for display
	return string;
  };

// Works with either jQuery or Zepto
})( window.jQuery || window.Zepto );
