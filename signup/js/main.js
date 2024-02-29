const signUpName = document.getElementById("signName");
const signUpEmail = document.getElementById("signEmail");
const signUpPassword = document.getElementById("signPassword");
const btn = document.getElementById("btn");
let user = [];
if (localStorage.getItem("users") != null) {
    user = JSON.parse(localStorage.getItem("users"))
}
btn.addEventListener("click", function () {
    if (signUpName.value == "" || signUpEmail.value == "" || signUpPassword.value == "") {
        document.getElementById("message").innerHTML = `<p class="text-center text-white">All is required</p>`;
    }
    else {
        let signUser = {
            name: signUpName.value,
            email: signUpEmail.value,
            password: signUpPassword.value
        };
        user.push(signUser);
        // mesh 3aref aro7 ll login w da mesh 7al manti8y
        window.location.href = "http://127.0.0.1:5500/login/index.html";
        clear() 
        localStorage.setItem("users", JSON.stringify(user))

    }
})
function clear() {
    signUpName.value = "";
    signUpEmail.value = "";
    signUpPassword.value = "";
}