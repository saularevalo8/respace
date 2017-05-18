//change the is name to the html page
$("#supplierParking").on("click", function(event){
	event.preventDefault();
//confirm the name properties name are the same as html
	var newSupplier = {
		address: $("#parkingAddress").val().trim(),
		city: $("#parkingCity").val().trim(),
		state: $("#parkingState").val().trim(),
		zip: $("#zip").val().trim(),
		carSize: $("#carSize").val().trim(),
		startTime: $("#startTime").val().trim(),
		endTime: $("#endTime").val().trim()
	}
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



