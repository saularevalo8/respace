//change the is name to the html page
$("#add-btn").on("click", function(event){
	event.preventDefault();
//confirm the name properties name are the same as html
	var newSupplier = {
		name: $("#name").val().trim(),
		address: $("address").val().trim(),
		city: $("city").val().trim(),
		state: $("state").val().trim(),
		zip: $("zip").val().trim(),
		carSize: $("zip").val().trim(),
		duration: $("duration").val().trim().
	}
	$.post("/api/new", newSupplier)
	.done(function(data){
		console.log(data);
	});

	$("#name").val("");
	$("address").val("");
	$("city").val("");
	$("zip").val("");
	$("zip").val("");
	$("duration").val("");
})