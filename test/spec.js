describe('frontloader', function() {

	beforeEach(module('frontloader'));

	var frontloaded;

	beforeEach(inject(function(_frontloaded_) {
	    frontloaded = _frontloaded_
	}));

	beforeEach(inject(function($rootScope, $compile) {

		[
			'<textarea frontload="default">a simple string</textarea>'
			,'<textarea frontload="string" frontload-type="string">another simple string</textarea>'
			,'<textarea frontload="json" frontload-type="json">{"a":"b"}</textarea>'
			,'<textarea frontload="booleanTrue" frontload-type="boolean">1</textarea>'
			,'<textarea frontload="booleanFalse" frontload-type="boolean"></textarea>'
			,'<textarea frontload="integer" frontload-type="string">44</textarea>'
		].forEach(function(string){
			element = angular.element(string);
		    outerScope = $rootScope;
		    $compile(element)(outerScope);
		})

	
	}));

	it('should in a string by default', function() {
    	assert.equal(frontloaded.default,'a simple string');
    });

    it('should evaluate a string', function() {
    	assert.equal(frontloaded.string,'another simple string');
    });

    it('should evaluate json', function() {
    	assert.equal(frontloaded.json.a,'b');
    });

    it('should handle a boolean "true"', function() {
    	assert.equal(frontloaded.booleanTrue,true);
    });

    it('should handle a boolean "false"', function() {
    	assert.equal(frontloaded.booleanFalse,false);
    });

    it('should handle an integer', function() {
    	assert.equal(frontloaded.integer,44);
    });
});