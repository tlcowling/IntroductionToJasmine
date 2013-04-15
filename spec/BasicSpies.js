describe("Jasmine's test doubles are called spies", function() {
	var company = null;

	beforeEach(function() {
		company = {
			setName: function(value) {
				name = value;
			}
		}; 

		spyOn(company, 'setName');

		company.setName('cellusys');
	});
	

	it("assert function call", function() {
		expect(company.setName).toHaveBeenCalled();
	});


	// it("track the number of calls made", function() {
	// 	expect(company.setName.calls.number).toEqual(1);
	// });

	describe("jasmine.any", function() {
	  it("matches any value", function() {
	    expect({}).toEqual(jasmine.any(Object));
	    expect(12).toEqual(jasmine.any(Number));
	  });

	  describe("when used with a spy", function() {
	    it("is useful for comparing arguments", function() {
	      var foo = jasmine.createSpy('foo');
	      foo(12, function() {
	        return true
	      });

	      expect(foo).toHaveBeenCalledWith(jasmine.any(Number), jasmine.any(Function));
	    });
	  });
	});
});