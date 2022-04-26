var champs = document.getElementById('champs');
var searchChamps = document.getElementById('sChamp_txt')
fetch("http://ddragon.leagueoflegends.com/cdn/12.7.1/data/en_US/champion.json")
    .then(res => res.json())
    .then(data => data.data)
    .then(data =>{
        for (var key in data) {
            champs.innerHTML = champs.innerHTML + 
            "<option value='" + data[key].name + "'>" + data[key].name + "</option>";
         }
})
