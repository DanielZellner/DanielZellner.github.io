
$.getJSON("../backend/users.json", function (data){
   console.log(data)
    displayUser(data)
});
function displayUser(user){
    var profile = document.getElementById("profilnav");
    profile.innerHTML = `<a href="profil.html">👤${user.users[0].username}</a>`;
}