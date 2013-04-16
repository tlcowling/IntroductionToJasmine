var Cellusys = {
	numberOfEmployees: function() {
		return Math.floor(Math.random() * 15) + 1
	},

	worth: function() {
		return 10000000;
	},

	buildSMSDefence: function() {
		setTimeout(function(){
			console.log("takes a while");
		}, 10000);
		return false;
	},

	sendLetterOfRecommendationFor: function(person) {
		return person + " is a truly gifted human being and is extraordinarily humanly gifted";
	},
};

