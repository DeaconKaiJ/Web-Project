var sum1 = document.getElementById('summonerSpells1')
var sum2 = document.getElementById('summonerSpells2')
fetch("http://ddragon.leagueoflegends.com/cdn/12.8.1/data/en_US/summoner.json")
    .then(res => res.json())
    .then(data => data.data)
    .then(data => {
        for (var key in data) {
            console.log(data[key])
            sum1.innerHTML = sum1.innerHTML +
                "<option value='" + data[key].image.full + "'>" + data[key].name + "</option>";
            sum2.innerHTML = sum2.innerHTML +
                "<option value='" + data[key].image.full + "'>" + data[key].name + "</option>";

        }
    })
