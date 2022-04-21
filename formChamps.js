var champs = document.getElementById('champs');
fetch("http://ddragon.leagueoflegends.com/cdn/12.7.1/data/en_US/champion.json")
    .then(res => res.json())
    .then(data => data.data)
    .then(data =>{
        for (var key in data) {
            console.log(data[key].name)
            champs.innerHTML = champs.innerHTML + 
            "<option value='" + data[key].name + "'>" + data[key].name + "</option>";
         }
})