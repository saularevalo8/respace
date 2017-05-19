$(document).ready(function() {
    var firstInput = $("#firstName_prefix");
    var lastInput = $("#lastName_prefix");
    var usernameInput = $("#username");
    var passwordInput = $("#password");
    var usernameLogin = $("#usernameLogin");
    var passwordLogin = $("#passwordLogin");

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
            username: usernameInput.val().trim(),
            password: passwordInput.val().trim()
        };


        // if (!newUser.firstName || !newUser.lastName || !newUser.email || !newUser.password) {
        //     return alert("Please don't leave fields blank");
        // }


        console.log(newUser);
        if (newUser) {
            signUpUser(newUser.firstName, newUser.lastName, newUser.username, newUser.password);
        }
        firstInput.val("");
        lastInput.val("");
        usernameInput.val("");
        passwordInput.val("");
    });

    function signUpUser(firstName, lastName, username, password) {
        $.post("/api/signup", {
            firstName: firstName,
            lastName: lastName,
            username: username,
            password: password
        }).then(function(data) {
            window.location.replace(data);
        }).catch(function(err) {
            console.log(err);
        });
    }

    $("#login").on("click", function() {
        event.preventDefault();
        var userData = {
            username: usernameLogin.val().trim(),
            password: passwordLogin.val().trim()
        };

        if (!userData.username || !userData.password) {
            return;
        }

        // If we have an email and password we run the loginUser function and clear the form
        loginUser(userData.username, userData.password);
        usernameLogin.val("");
        passwordLogin.val("");
    });

    function loginUser(email, password) {
        $.post("/api/login", {
            username: username,
            password: password
        }).then(function(data) {
            window.location.replace(data);
            // If there's an error, log the error
        }).catch(function(err) {
            console.log(err);
        });
    }


});
