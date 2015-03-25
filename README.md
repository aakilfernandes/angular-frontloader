#Angular-Frontloader

Angular-Frontloader is a small module that helps your app pass data from your server to the client without an AJAX call. It consists of a directive `frontload` and a service `frontloaded`.

## Installation

    bower install angular-frontloader

    app.module('myApp',['frontloader'])

## How to use

HTML

    <textarea frontload="myName">Aakil</textarea>

JS
	
    app.controller('myController',function(frontloaded){
    	console.log(frontloaded.myName)
    	// Aakil
   	})

## Types

By default, everything you frontload is interpreted as a string. Angular-Frontloader also supports json, booleans, and integers.

### JSON
    
    <textarea frontload="thing" frontload-type="json">{"a":"b"}</textarea>

### Integer

	<textarea frontload="howMuchLonger" frontload-type="integer">47</textarea>

### Boolean

An empty string will be interpreted as `false`. Any other string ("0","1","true","false") will be interpreted as true. 
    
    <textarea frontload="isTheSkyBlue" frontload-type="boolean">1</textarea>
    <textarea frontload="isTheSkyRed" frontload-type="boolean"></textarea>