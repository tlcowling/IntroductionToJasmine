describe("Expectations for jQuery objects", function() {
	it("matching jquery objects", function() {
		var domObject = $('<div id="someId"></div>');
	});

	it("can assert that DOM objects are hidden", function() {
		expect($('#div')).not.toBeHidden();
	});

	
});

describe("Expectations using fixtures", function() {
	it("can use HTML fixtures to assert against objects", function() {
		loadFixtures('example-page.html');
	});

	it("should assert against example CSS data", function() {

	});

	it("should assert against example JSON data fixture", function() {
		var data = getJSONFixture('example-json.json');

		// or load and get the JSON two-step
		var fixtures = loadJSONFixtures('example-json.json');
		var data2 = fixtures['example-json.json'];
	});

});

describe("Spying on events", function() {
	it("can spy on events using spyOnEvent syntax", function() {
		// var spyEvent = spyOnEvent('#some_element', 'click');
		// $('#some_element').click();
		// expect('click').toHaveBeenTriggeredOn('#some_element');
		// expect(spyEvent).toHaveBeenTriggered();
	});
});

