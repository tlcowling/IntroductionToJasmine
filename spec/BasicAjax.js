describe("This is an AJAX UNIT TEST, it doesn't perform the actual request", function() {
	it ("should make an AJAX request to the correct URL", function() {
		spyOn($, "ajax");
		getSomething(42);
		expect($.ajax.mostRecentCall.args[0]["url"]).toEqual("http://www.google.com/42");

	});

	function getSomething(id) {
		$.ajax({
			type: "GET",
			url: "http://www.google.com/" + id,
			contentType: "application/json; charset=utf-8",
			dataType: "json"
		});
	}
});

describe("This is an AJAX INTEGRATION TEST, the major difference is the requirement to wait for the callback", function() {
	it ("should make a REAL AJAX request", function() {
		var callback = jasmine.createSpy();
		getSomething(42, callback);

		waitsFor(function() {
			return callback.callCount > 0;
		});
		runs(function() {
			expect(callback).toHaveBeenCalled();
		});

	});

	function getSomething(id) {
		$.ajax({
			type: "GET",
			url: "http://www.google.com/" + id,
			contentType: "application/json; charset=utf-8",
			dataType: "json"
		});
	}
});