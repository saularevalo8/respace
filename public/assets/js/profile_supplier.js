

$(document).ready(function() {
    var parkingAddress = $("#parkingAddress")
    var parkingCity = $("#parkingCity");
    var parkingState = $("#parkingState");
    var parkingZipCode = $("#parkingZipCode");
    var carSize = $("#carsize");
    var startTime = $("#startTime");
    var endTime = $("#endTime");

    $("#submit").on("click", function() {
        event.preventDefault();
        

        // Constructing a newPost object to hand to the database
        var newSupplier = {
            address: parkingAddress.val().trim(),
            city: parkingCity.val().trim(),
            state: parkingState.val().trim(),
            zip: parkingZipCode.val().trim(),
            carSize: carSize.val().trim(),
            startTime: startTime.val().trim(),
            endTime: endTime.val().trim()
        };


        // if (!newSupplier.address || !newSupplier.city || !newSupplier.state || !newSupplier.zip) {
        //     return alert("Please don't leave fields blank");
        // }


        console.log(newSupplier);
        if (newSupplier) {
            submitLocation(newSupplier);
        }
	    });

    function submitLocation(location) {
        $.post("/api/locations/", location, function() {
            window.location.href = "/profile";
  });
  };
});



