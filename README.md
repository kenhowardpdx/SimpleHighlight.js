SimpleHighlight.js
=================
**A tiny jQuery plugin for highlighting terms withing a string.**

The idea is simple.

* You have a string.
* You'd like to highlight some of the words in the string.

There are other highlight plugins that require an object. This plugin just takes a string and an array of terms/keywords and outputs a string with highlighted terms.

How Do I Use It?

jQuery or Zepto is required. Pass the function a string along with some terms you'd like to highlight.

```
<script src="path/to/jquery.min.js"></script>
<script src="path/to/jquery.simplehighlights.js"></script>
<script>
	var string = $('#content').html(); // OR -- var string = 'some string from a json return';
	var terms = [ // OR -- var terms = 'some array from json return';
		'some',
		'words',
		'to',
		'highlight'];
	var newString = $.simpleHighlight( string, terms );
	$('#content').html(newString); // Send your new string to replace the old string
</script>
```

Add some CSS to handle your highlighted terms.

```
.matchedTerm {
  font-weight: bold;
  color: green;
}
```

Changelog
=========

* *09.27.13 - v1.0.0 - 558b*
  * Initial release
  * String in, string out

Credits
=======

@kenhowardpdx

