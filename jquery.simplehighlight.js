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
		var regex = new RegExp('(' + term + ')\\b','gi'),
		    newStr = '<span class="matchedTerm">$1</span>';
		string = string.replace(regex, newStr);
	});
	return string;
  };
  
// Works with either jQuery or Zepto
})( window.jQuery || window.Zepto );