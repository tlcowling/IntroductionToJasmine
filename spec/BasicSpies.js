describe("Jasmine's test doubles are called spies -  a 'spy' replaces the function it is spying on.", function() {


	beforeEach(function() {
		spyOn(Cellusys, 'numberOfEmployees');
		spyOn(Cellusys, 'worth');
		spyOn(Cellusys, 'sendLetterOfRecommendationFor');
	});

	xit("expects a method of an object to have been called", function() {
		expect(Cellusys.numberOfEmployees).toHaveBeenCalled();

		//similarly
		expect(Cellusys.worth).not.toHaveBeenCalled();
	});	

	xit("expects a method of an object to have been called with a particular argument", function() {
		expect(Cellusys.sendLetterOfRecommendationFor).toHaveBeenCalledWith('Johnny');
	});

	xit("expects a method of an object to have been more than once", function() {
		expect(Cellusys.sendLetterOfRecommendationFor.callCount).toBeGreaterThan(1);
	});

	xit("create a default spy to do something that you want", function() {
		var dummy = jasmine.createSpy('dummy');
	});
});
