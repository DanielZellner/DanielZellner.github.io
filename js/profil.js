
let idOnLoad = 0;
var info = false;
let users = {};
const xhr = new XMLHttpRequest();
xhr.onload = profileBox;

$.getJSON("../backend/users.json", function (data){
    profileBox(data)
});

function profileBox(data){
    console.log (idOnLoad)
    users = {
        id: data.users[idOnLoad].id,
        username: data.users[idOnLoad].username,
        firstname: data.users[idOnLoad].firstname,
        lastname: data.users[idOnLoad].lastname,
        birthdate: data.users[idOnLoad].birthdate,
        email: data.users[idOnLoad].email,
        password: data.users[idOnLoad].password
    }

    profilInfo(data);

}

function profilInfo(data){
    console.log(idOnLoad)
    let infoText = document.getElementById("profileInfo").innerHTML = `
    <p id="userdetails">Id: ${data.users[idOnLoad].id}
    <br>Username: ${data.users[idOnLoad].username}
    <br>First name: ${data.users[idOnLoad].firstname}
    <br>Last name: ${data.users[idOnLoad].lastname}
    <br>Birthdate: ${data.users[idOnLoad].birthdate}
    <br>Email: ${data.users[idOnLoad].email}
    <br>Password: ${data.users[idOnLoad].password}
    </p>
`;
}