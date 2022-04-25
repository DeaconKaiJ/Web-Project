var sum1 = document.getElementById('summonerSpells1')
var sum2 = document.getElementById('summonerSpells2')
fetch("http://ddragon.leagueoflegends.com/cdn/12.7.1/data/en_US/summoner.json")
    .then(res => res.json())
    .then(data => data.data)
    .then(data => {
        for (var key in data) {
            sum1.innerHTML = sum1.innerHTML +
                "<option value='" + data[key].name + "'>" + data[key].name + "</option>";
            sum2.innerHTML = sum2.innerHTML +
                "<option value='" + data[key].name + "'>" + data[key].name + "</option>";

        }
    })
