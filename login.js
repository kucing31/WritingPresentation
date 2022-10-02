const form = document.getElementById("sign-in");    
form.addEventListener("submit", function (event) {
    event.preventDefault();
    const username = document.getElementById("username").value;
    const password = document.getElementById("password").value;
    console.log(username, password);

    form.reset();
}); 