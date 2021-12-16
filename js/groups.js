let idOnLoad = 0;
var info = false;

const xhr = new XMLHttpRequest();
xhr.onload = addNewGroup;

let counter = 0;

function addNewGroup(){
    var groups = document.getElementById("groups");
    var group = `
        <div class="group">
            <div>
                <p>group${counter}</p>
            </div>
            <div>
                <p>📊</p>
                <p>🧍</p>
                <p>💬</p>
            </div>
        </div>
        `;
    counter++;
    groups.innerHTML += group;
}
