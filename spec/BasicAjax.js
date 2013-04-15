describe("Testing AJAX requests", function() {
	it ("should make an AJAX request to the correct URL", function() {
		spyOn($, "ajax");

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