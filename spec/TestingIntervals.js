describe("Using a mock clock to test setTimeout and setInterval", function() {
	var timerCallback;

	beforeEach(function() {
		timerCallback = jasmine.createSpy('timerCallback');
		jasmine.Clock.useMock();
	});

	it("causes a timeout to be called synchronously", function() {
		setTimeout(function() {
			timerCallback();
		}, 100);

		expect(timerCallback).not.toHaveBeenCalled();

		jasmine.Clock.tick(101);

		expect(timerCallback).toHaveBeenCalled();
	});

	it("causes an interval to be called synchronously", function() {
		setInterval(function() {
			timerCallback();
		}, 100);

		expect(timerCallback).not.toHaveBeenCalled();

		jasmine.Clock.tick(101);
		expect(timerCallback.callCount).toEqual(1);

		jasmine.Clock.tick(50);
		expect(timerCallback.callCount).toEqual(1);

		jasmine.Clock.tick(50);
		expect(timerCallback.callCount).toEqual(2);

	})

});