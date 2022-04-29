var item1 = document.getElementById('item1');
var item2 = document.getElementById('item2');
var item3 = document.getElementById('item3');
var item4 = document.getElementById('item4');
var item5 = document.getElementById('item5');
var item6 = document.getElementById('item6');
fetch("http://ddragon.leagueoflegends.com/cdn/12.8.1/data/en_US/item.json")
    .then(res => res.json())
    .then(data => data.data)
    .then(data => {
        for (var key in data) {
            if (data[key].name != "<rarityLegendary>Fire at Will</rarityLegendary><br><subtitleLeft><silver>500 Silver Serpents</silver></subtitleLeft>") {
                if (data[key].name != "<rarityLegendary>Death's Daughter</rarityLegendary><br><subtitleLeft><silver>500 Silver Serpents</silver></subtitleLeft>") {
                    if (data[key].name !="<rarityLegendary>Raise Morale</rarityLegendary><br><subtitleLeft><silver>500 Silver Serpents</silver></subtitleLeft>"){
                        item1.innerHTML = item1.innerHTML +
                        "<option value='" + data[key].image.full + "'>" + data[key].name + "</option>";
                    item2.innerHTML = item2.innerHTML +
                        "<option value='" + data[key].image.full  + "'>" + data[key].name + "</option>";
                    item3.innerHTML = item3.innerHTML +
                        "<option value='" + data[key].image.full  + "'>" + data[key].name + "</option>";
                    item4.innerHTML = item4.innerHTML +
                        "<option value='" + data[key].image.full  + "'>" + data[key].name + "</option>";
                    item5.innerHTML = item5.innerHTML +
                        "<option value='" + data[key].image.full  + "'>" + data[key].name + "</option>";
                    item6.innerHTML = item6.innerHTML +
                        "<option value='" + data[key].image.full  + "'>" + data[key].name + "</option>";  
                    }   
                }
            }
        }
    })