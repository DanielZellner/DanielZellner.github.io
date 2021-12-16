var idOnLoad = 0;
var info = false;
let movieTask = {};
const xhr = new XMLHttpRequest();
xhr.onload = swipeBoxCreate;

$.getJSON("../backend/movieLibrary.json", function (data){
    swipeBoxCreate(data)
});
function swipe(){
    if (idOnLoad === 9){
        idOnLoad = 0;
    }
    else{
        this.idOnLoad = this.idOnLoad + 1
    }

    $.getJSON("../backend/movieLibrary.json", function (data){
        swipeBoxCreate(data)
    });
}
function swipeBoxCreate(data) {
    console.log(idOnLoad)
    var slider = document.getElementById("slide-div");

    movieTask = {
        id: data.movies[idOnLoad].id,
        movieName: data.movies[idOnLoad].movieName,
        movieCoverPage: data.movies[idOnLoad].movieCoverPage,
        firstBroadcast: data.movies[idOnLoad].firstBroadcast,
        playtime: data.movies[idOnLoad].playtime,
        genre: data.movies[idOnLoad].genre,
        director: data.movies[idOnLoad].director,
        screenplay: data.movies[idOnLoad].screenplay,
        casting: data.movies[idOnLoad].casting,
        originalTitle: data.movies[idOnLoad].originalTitle,
        likeStatus: data.movies[idOnLoad].likeStatus,
        youTubeLink: data.movies[idOnLoad].youTubeLink
    }
    if (idOnLoad <= 9) {
        console.log(movieTask)
    }
    document.getElementById("slide-div").style.backgroundImage = "url(" + movieTask.movieCoverPage + ")";
    slider.innerHTML = `
    <div class="movieTextDiv">
        <p class="movieTitel">${movieTask.originalTitle}</p>
        <p class="movieInfos">Duration: ${movieTask.playtime}min<br>Genre: ${movieTask.genre}</p>
    </div>
    `;
    if (info){
    infoShow("doNotSwitch");
    }
}

function infoShow(text){
    if (text === "toNotSwitch"){
        if (!info){
            document.getElementById("movieTrailer").innerHTML = "";
            infoText.innerHTML = "";
        } else {
            document.getElementById("movieTrailer").innerHTML = movieTask.youTubeLink;
            infoText.innerHTML = `
        <p class="movieInfos">Duration: ${movieTask.playtime}min
        <br>Genre: ${movieTask.genre}
        <br>First Broadcast: ${movieTask.firstBroadcast}
        <br>PlayTime: ${movieTask.playtime}
        <br>Genre: ${movieTask.genre}
        <br>Director: ${movieTask.director}
        <br>Screenplay: ${movieTask.screenplay}
        <br>Casting: ${movieTask.casting}
        </p>
        `;
        }
    }else{
    var infoText = document.getElementById("moreInfoMovie");
    if (info){
        info = false;
        document.getElementById("movieTrailer").innerHTML = "";
        infoText.innerHTML = "";
    } else {
        info = true;
        document.getElementById("movieTrailer").innerHTML = movieTask.youTubeLink;
        infoText.innerHTML = `
        <p class="movieInfos">Duration: ${movieTask.playtime}min
        <br>Genre: ${movieTask.genre}
        <br>First Broadcast: ${movieTask.firstBroadcast}
        <br>PlayTime: ${movieTask.playtime}
        <br>Genre: ${movieTask.genre}
        <br>Director: ${movieTask.director}
        <br>Screenplay: ${movieTask.screenplay}
        <br>Casting: ${movieTask.casting}
        </p>
        `;
    }
    }
}