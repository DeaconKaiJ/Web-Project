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
    while (historyContainer.hasChildNodes()) {
        historyContainer.removeChild(historyContainer.firstChild);
    }
    
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
                    console.log(data2)
                    for (i = 0; i < 5; i++) {
                        matchLink = "https://europe.api.riotgames.com/lol/match/v5/matches/" + data2[i] + "?api_key=" + apiKey;
                        console.log(matchLink);
                        console.log(data2[i]);
                        fetch(matchLink)
                            .then(res3 => res3.json())
                            .then(data3 => {
                                console.log(data3)
                                userLength = data3.info.participants.length;
                                for (j = 0; j < userLength; j++) {
                                    if (data3.info.participants[j].puuid == userPuuid) {
                                        imgimg = "http://ddragon.leagueoflegends.com/cdn/12.8.1/img/champion/" + data3.info.participants[j].championName + ".png"
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
                                        champName= data3.info.participants[j].championName;
                                        if(champName == "MonkeyKing"){champName = "Wukong"};
                                        playerNameS.textContent = champName;
                                        playerKills.textContent = data3.info.participants[j].kills;
                                        playerDeaths.textContent = data3.info.participants[j].deaths;
                                        playerAssists.textContent = data3.info.participants[j].assists;
                                        KDA = (data3.info.participants[j].kills + data3.info.participants[j].assists) / data3.info.participants[j].deaths;
                                        KDA = KDA.toFixed(2);
                                        playerImgKDA.textContent = "KDA: " + KDA;
                                        historyContainer.append(currentHist)
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