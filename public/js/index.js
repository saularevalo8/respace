$(document).ready(function() {
    var firstInput = $("#firstName_prefix");
    var lastInput = $("#lastName_prefix");
    var usernameInput = $("#username");
    var passwordInput = $("#password");

    //verify email format
    var passwordRegEx = (/^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])[0-9a-zA-Z]{8,}$/);
    passwordInput.bind('input propertychange', function() {
        if (!passwordRegEx.test($(this).val())) {
            $("#password-form").removeClass("has-success");

            $("#password-form").addClass("has-error");
            $("#password-feedback").text("Password must contain 1 lowercase, 1 uppercase, 1 number, and be 8 characters.");
        } else {
            $("#password-form").removeClass("has-error");

            $("#password-form").addClass("has-success");
            $("#password-feedback").text("Password set correctly!");
        }
    });

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


        if (!newUser.firstName || !newUser.lastName || !newUser.email || !newUser.password) {
            return alert("Please don't leave fields blank");
        }


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
