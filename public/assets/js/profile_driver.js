var geocoder = require("geocoder");

$("#driver").on("click", function(event){
	event.preventDefault();
//confirm the name properties name are the same as html
	var newDriver = {
		address: $("#destAddress").val().trim(),
		city: $("#destCity").val().trim(),
		state: $("#destState").val().trim(),
		zip: $("#destZipCode").val().trim(),
		// carSize: $("#carSize").val().trim(),
		// startTime: $("#startTime").val().trim(),
		// endTime: $("#endTime").val().trim()
	}
    geocoder.geocode(newDriver.address + newDriver.city + newDriver.state + newDriver.zip, function(err, data){
    	console.log(data.results[0].geometry.bounds.northeast); 
    })
	$.post("/api/new", newSupplier)
	.done(function(data){
		console.log(data);
	});

	$("#address").val("");
	$("#city").val("");
	$("#zip").val("");
	$("#carSize").val("");
	$("#startTime").val("");
	$("#endTime").val("");
})


$("#cancelSupplierParking").on("click", function(event){
	event.preventDefault();

	$("#address").val("");
	$("#city").val("");
	$("#zip").val("");
	$("#carSize").val("");
	$("#startTime").val("");
	$("#endTime").val("");

});



