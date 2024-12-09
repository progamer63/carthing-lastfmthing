function fetchinfo() {
    /* this shit keeps breaking waaa
    uname = document.getElementById('inputReal').value;
    localStorage.setItem("username", uname);
    user = localStorage.getItem("username");
    */
    let user = 'progamer63';
    let url = 'https://lastfm-last-played.biancarosa.com.br/' + user + '/latest-song';
    let song = document.querySelector('#song');
    let artist = document.querySelector('#artist');
    let art = document.querySelector('#albumArt');
    let maxlen = 54;
    fetch(url)
    .then(function (response) {
        return response.json();
    }).then(function (json) {
        console.log(json);
        if ('@attr' in json['track']) {
            song.innerHTML = json['track']['name'];
            console.log(song.innerHTML);
            if (song.innerHTML.length >= maxlen) {
                song.innerHTML = song.innerHTML.substring(0, maxlen);
                song.innerHTML = song.innerHTML+'...';
            }
            document.documentElement.style.setProperty("--title-length", song.innerHTML.length);
            artist.innerHTML = json['track']['artist']['#text'];
            document.getElementById("realArt").src = json['track']['image'][3]['#text'];
            /* remnants of getting the background to be an image, insane i want to do that someday */
            /*let imurlwork = json['track']['image'][3]['#text'];*/
            /*document.getElementById("all").style.backgroundImage="url("+imurlwork+")";*/
        } else {
            song.innerHTML = "Nothing Playing";
            artist.innerHTML = "";
            document.documentElement.style.setProperty("--title-length", 16);
            document.getElementById("realArt").src = "https://img.icons8.com/?size=512&id=9414&format=png&color=FFFFFF";     
        }
    });
}
fetchinfo();
setInterval(fetchinfo, 3000);