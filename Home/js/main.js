document.getElementById('user').innerHTML=localStorage.getItem('userName');
document.getElementById('logout').addEventListener('click', function(){

localStorage.removeItem('userName');
window.location.href = "http://127.0.0.1:5500/login/index.html";

})