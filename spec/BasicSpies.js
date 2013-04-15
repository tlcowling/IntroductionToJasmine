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





	describe("Jasmine has matchers for ANY", function() {
	  it("matches any value", function() {
	    expect({}).toEqual(jasmine.any(Object));
	    expect(12).toEqual(jasmine.any(Number));
	  });


	  describe("Using ANY with SPIES ", function() {
	    it("is useful for comparing arguments", function() {

	      var Ed = jasmine.createSpy('Ed');
	      Ed(12, function() {
	        return true
	      });

	      expect(Ed).toHaveBeenCalledWith(jasmine.any(Number), jasmine.any(Function));
	    });
	  });
	});
});