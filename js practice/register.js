    document.getElementById("registerForm").addEventListener("submit", function(event){
        event.preventDefault();
        var name = document.getElementById("name").value;
        var username = document.getElementById("username").value;
        var password = document.getElementById("password").value;
        var confirmPassword = document.getElementById("confirmPassword").value;
        if(password !== confirmPassword){
             document.getElementById("password-error").innerHTML = "Passwords do not match";
             settimeout(() => { document.getElementById("password-error").innerHTML = ""; }, 3000); 
            return;
        }
        if (password === "password" || password === "123456" || password === "098754") {
             document.getElementById("password-error").innerHTML = "Password is too weak";
             setTimeout(() => { document.getElementById("password-error").innerHTML = ""; }, 3000);
            return;
        }
         if (password.length < 6) {
             document.getElementById("password-error").innerHTML = "Password must be at least 6 characters long";
             setTimeout(() => { document.getElementById("password-error").innerHTML = ""; }, 3000);
            return;
        }
        if(username.length < 3){
             document.getElementById("username-error").innerHTML = "Username must be at least 3 characters long";
             settimeout(() => { document.getElementById("username-error").innerHTML = ""; }, 3000);
            return;
        }
        if(username.includes(" ")){
             document.getElementById("username-error").innerHTML = "Username cannot contain spaces";
                setTimeout(() => { document.getElementById("username-error").innerHTML = ""; }, 3000);    
            return;
        }
        if(username.toLowerCase() === "admin" || username.toLowerCase() === "user" || username.toLowerCase() === "null"){
            document.getElementById("username-error").innerHTML = "This username is not allowed";
            setTimeout(() => { document.getElementById("username-error").innerHTML = ""; }, 3000);
            return;
        }
        if(name.includes("1") || name.includes("2") || name.includes("3") || name.includes("4") || name.includes("5") || name.includes("6") || name.includes("7") || name.includes("8") || name.includes("9") || name.includes("0")){
            
            document.getElementById("name-error").innerHTML = "Name cannot contain numbers";

            setTimeout(() => { document.getElementById("name-error").innerHTML = ""; }, 3000);
            return;
        }   
        const user = {
            name: name,
            username: username,
            password: password
        };
        localStorage.setItem(username, JSON.stringify(user));
        alert("Registration successful, please login");
        window.location.href = "login.html";
    });


