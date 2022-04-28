const apiKey = "RGAPI-ae635b09-2d6e-41c7-b239-53f674de9876";
var searchBtn = document.getElementById('sChampPlayerBTN');
var inputName = document.getElementById('sPlayer_txt');
var modalPlayer = document.getElementById("modalPlayer");
var spanPlayer = document.getElementById("closePlayer");
var champPlayer = document.getElementById("headerPlayer");
var champPlayerImg = document.getElementById("playerImgSearched");
var champPlayerName = document.getElementById("playerNameSearched");
var champPlayerKill = document.getElementById("playerKillSearched");
var champPlayerDeath = document.getElementById("playerDeathsSearched");
var champPlayerAssist = document.getElementById("playerAssistsSearched");
var champPlayerKDA = document.getElementById("playerKDASearched");
const historyTemplate = document.querySelector("[playerSearch]");
const historyContainer = document.querySelector("[playerSearchContainer]");

searchBtn.addEventListener("click", function () {
    playerName = inputName.value;
    champPlayer.textContent = playerName;
    const link = "https://euw1.api.riotgames.com/lol/summoner/v4/summoners/by-name/" + playerName + "?api_key=" + apiKey;
    modalPlayer.style.display = "block";
    fetch(link)
        .then(res => res.json())
        .then(data => {
            userPuuid = data.puuid;
            matchIDlink = "https://europe.api.riotgames.com/lol/match/v5/matches/by-puuid/" + userPuuid + "/ids?start=0&count=5&api_key=" + apiKey;
            fetch(matchIDlink)
                .then(res2 => res2.json())
                .then(data2 => {
                    for (i = 0; i < 5; i++) {
                        matchLink = "https://europe.api.riotgames.com/lol/match/v5/matches/" + data2[i] + "?api_key=" + apiKey;
                        fetch(matchLink)
                            .then(res3 => res3.json())
                            .then(data3 => {
                                console.log(data3.info.participants);
                                userLength = data3.info.participants.length;
                                for (i = 0; i < userLength; i++) {
                                    if (data3.info.participants[i].puuid == userPuuid) {
                                        imgimg = "http://ddragon.leagueoflegends.com/cdn/12.8.1/img/champion/" + data3.info.participants[i].championName + ".png"
                                        imgimgheight = "100px";
                                        imgimgwidth = "auto";
                                        const currentHist = historyTemplate.content.cloneNode(true).children[0];
                                        const playerImg = currentHist.querySelector("[playerImgSearched]")
                                        const playerNameS = currentHist.querySelector("[playerNameSearched]")
                                        const playerKills = currentHist.querySelector("[playerKillSearched]")
                                        const playerDeaths = currentHist.querySelector("[playerDeathsSearched]")
                                        const playerAssists = currentHist.querySelector("[playerAssistsSearched]")
                                        const playerImgKDA = currentHist.querySelector("[playerKDASearched]")
                                        playerImg.innerHTML = "<img src='" + imgimg + "'" + " " + "height='" + imgimgheight + "'" + " " + "width='" + imgimgwidth + "'>";
                                        playerNameS.textContent = data3.info.participants[i].championName;
                                        playerKills.textContent = data3.info.participants[i].kills;
                                        playerDeaths.textContent = data3.info.participants[i].deaths;
                                        playerAssists.textContent = data3.info.participants[i].assists;
                                        KDA = (data3.info.participants[i].kills + data3.info.participants[i].assists) / data3.info.participants[i].deaths;
                                        playerImgKDA.textContent = "KDA: " + KDA;
                                        historyContainer.append(currentHist)
                                        console.log(data3.info.participants[i]);
                                        console.log(data3.info.participants[i].championName)
                                        console.log(data3.info.participants[i].assists)
                                        console.log(data3.info.participants[i].kills)
                                        console.log(data3.info.participants[i].deaths)
                                    }
                                }
                            })
                    }

                })
        })

})

spanPlayer.onclick = function () {
    modalPlayer.style.display = "none";
}
window.onclick = function (event) {
    if (event.target == modalPlayer) {
        modalPlayer.style.display = "none";
    }
}