//this will display all post rental posts for a specific user. 
$.get("/api/all", function(data){
	for(var i = 0; i < data.length; i++){
		var wellSection = $("<div>");
		wellSection.addClass("well");
		wellSection.attr("id", "profile-well-" + i);
		$("well-section").append(wellSection);

		$("#profile-well-" + i).append("<h2>" + (i + 1)+ ". " + data[i].address + "<h2>");
		//duration needs to be added to db
		$("#profile-well-" + i).append("<h3>Rental Duration: " + data[i].duration + "<h3>");
		//date needs to be added to the db.
		$("#profile-well-" + i).append("<h3>Date: " + data[i].date + "<h3>");
		$("#profile-well-" + i).append("<h3>Car Size: " + data[i].carSize + "<h3>");

	}
})