$(document).ready(function() {
	var firstInput = $("#firstName_prefix");
  var lastInput = $("#lastName_prefix");
  var usernameInput = $("#username");
  var passwordInput = $("#password");

  $("#create").on("click", function() {
  	event.preventDefault();
    // Wont submit the post if we are missing a body or a title
    if (!firstInput.val().trim() || !lastInput.val().trim()) {
      return;
    }
    // Constructing a newPost object to hand to the database
    var newUser = {
      firstName: firstInput.val().trim(),
      lastName: lastInput.val().trim(),
      email: usernameInput.val().trim(),
      password: passwordInput.val().trim()
    };

    console.log(newUser);
if (newUser) {
     submitUser(newUser);

    }
    
  	});

  	function submitUser(User) {
    $.post("/api/users/", User, function() {
      window.location.href = "/profile";
    }); 
  	};

  	});