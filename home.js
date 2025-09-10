 var user = localStorage.getItem("user");
    if(user){
        var parsedUser = JSON.parse(user);
        document.getElementById("welcomemessage").innerHTML = `Hello ${parsedUser.name} <br> Welcome to our site! <br><br>`;
        document.getElementById("logoutBtn").classList.remove("hidden");
        document.getElementById("logo").innerHTML = `<i class="ri-user-follow-line"></i>`;
    }
    else{
        document.getElementById("welcomemessage").innerHTML = `Hello, please <br> <a href="login.html" > login </a>`;
    }
    document.getElementById("logoutBtn").addEventListener("click", function(){
        localStorage.removeItem("user");
        window.location.href = "login.html";
    });