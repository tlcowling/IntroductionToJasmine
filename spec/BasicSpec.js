describe("A collection of tests summarising matchers", function() {
	
	it("should test some aspect of some code", function() {
		expect(true).toBe(true);
	});

	it("code is tested just like in junit", function() {
		expect(true).not.toBe(false);
	});

	it("the toBe matcher compares using javascript's === operator", function() {
		var a = 42;
		var b = a;

		expect(a).toBe(b);
		expect(a).not.toBe(null);
	});

	it("the toEqual matcher compares using javascripts equals method", function() {
		var a = 42;
		expect(a).toEqual(42);

		var first = { a:12, b:34 };
		var second = { a:12, b:34 };

		expect(first).toEqual(second);
	});

	it("the toMatch matcher is for regular expressions", function() {
		var message = "Here is a sample message";

		expect(message).toMatch(/sample/);
		expect(message).toMatch('message');
		expect(message).not.toMatch(/cellusys/);
	});

	it("the toBeUndefined matcher compares against javascript's undefined", function() {
		var a = { cellusys: 'cellusys' };
		var unknown;

		expect(a.cellusys).not.toBeUndefined();
		expect(a.something).toBeUndefined();
		expect(unknown).toBeUndefined();
	});

	it("some more match types", function() {
		expect(null).toBeNull();
		expect(true).toBeTruthy();
		expect(false).toBeFalsy();
		expect([4,5,6]).toContain(4);
		expect([4,5,6]).not.toContain(3);
		expect(3).toBeLessThan(4);
		expect(4).toBeGreaterThan(3);

		var pi = 3.141592654;
		var e = 2.718;

		expect(pi).toBeCloseTo(e, 0);
		expect(pi).not.toBeCloseTo(e, 2);
	});

	it("shold throw an exception", function() {
		var cellusys = function() {
			return a + 4;
		};

		expect(cellusys).toThrow();
	});
});