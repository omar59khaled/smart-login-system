const loginEmail = document.getElementById("loginEmail");
const loginPassword = document.getElementById("loginPassword");
const btn = document.getElementById("btn");
let user=[];
if(localStorage.getItem("users")!=null){
   user=JSON.parse( localStorage.getItem("users"))
}
btn.addEventListener("click",function(){
    if(loginPassword.value == "" || loginEmail.value == "" ){
        document.getElementById("message").innerHTML = `<p class="text-center text-white">All is required to login </p>`;
    }
   
    else{
      checkUser();
    }
}
)

function checkUser(){
for(var i=0; i<user.length; i++){
if(loginPassword.value ==user[i].password && loginEmail.value == user[i].email){
var userName = user[i].name
localStorage.setItem('userName',userName)
// mesh 3aref aro7 ll home w da mesh 7al manti8y
window.location.href = "http://127.0.0.1:5500/Home/index.html";
}
else{
  document.getElementById("message").innerHTML = `<p class="text-center text-white">invalid email or password </p>`;
}

}}

