var champs = document.getElementById('champs');
var searchChamps = document.getElementById('sChamp_txt')
fetch("http://ddragon.leagueoflegends.com/cdn/12.8.1/data/en_US/champion.json")
    .then(res => res.json())
    .then(data => data.data)
    .then(data => {
        for (var key in data) {
            searchValue = data[key].name.toLowerCase();
            if (searchValue == "nunu & willump") { searchValue = "Nunu"; }
            if (searchValue == "renata glasc") { searchValue = "Renata"; }
            searchValue = searchValue.replace(/\s+/g, '');
            searchValue = searchValue.replace('.', '')
            searchValue = searchValue.replace("'", '');
            searchValue = searchValue.charAt(0).toUpperCase() + searchValue.slice(1);
            if (searchValue == "Jarvaniv") { searchValue = "JarvanIV"; }
            if (searchValue == "Kogmaw") { searchValue = "KogMaw"; }
            if (searchValue == "Leesin") { searchValue = "LeeSin"; }
            if (searchValue == "Drmundo") { searchValue = "DrMundo"; }
            if (searchValue == "Aurelionsol") { searchValue = "AurelionSol"; }
            if (searchValue == "Masteryi") { searchValue = "MasterYi"; }
            if (searchValue == "Reksai") { searchValue = "RekSai"; }
            if (searchValue == "Tahmkench") { searchValue = "TahmKench"; }
            if (searchValue == "Twistedfate") { searchValue = "TwistedFate"; }
            if (searchValue == "Xinzhao") { searchValue = "XinZhao"; }

            champs.innerHTML = champs.innerHTML +
                "<option value='" + searchValue + "'>" + data[key].name + "</option>";
        }
    })
