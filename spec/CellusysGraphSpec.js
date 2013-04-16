describe("Cellusys Graph", function() {

  it("should obtain a JSON object containing message count information", function() {
    var url = ""; 

    var count = countForMessageType('ALL');
    

  });

  function countForMessageType(messageType) {
    $.ajax({
      type: "GET",
      url: url,
      contentType: "application/json; charset=utf-8",
      dataType: "json"
    });
  } 
});