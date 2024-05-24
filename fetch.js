let user = 'progamer63';
        let url = 'https://lastfm-last-played.biancarosa.com.br/' + user + '/latest-song';
        let song = document.querySelector('#song');
        let artist = document.querySelector('#artist');
        let art = document.querySelector('#albumArt');
        fetch(url)
            .then(function (response) {
                return response.json();
            }).then(function (json) {
                song.innerHTML = json['track']['name'];
                artist.innerHTML = json['track']['artist']['#text'];
                document.getElementById("realArt").src = json['track']['image'][3]['#text'];
                let imurlwork = json['track']['image'][3]['#text'];
                console.log(imurlwork);
                /*document.getElementById("all").style.backgroundImage="url("+imurlwork+")";*/
            });