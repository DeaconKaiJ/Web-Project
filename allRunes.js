var mainKeystone = document.getElementById('mainKeystone')
var mainRune = document.getElementById('mainRune')
var mainRune1 = document.getElementById('mainRune2')
var mainRune2 = document.getElementById('mainRune3')
var mainRune3 = document.getElementById('mainRune4')
var subKeystone = document.getElementById('subKeystone')
var subRune1 = document.getElementById('subRune1')
var subRune2 = document.getElementById('subRune2')
var addRune1 = document.getElementById('addRune1')
var addRune2 = document.getElementById('addRune2')
var addRune3 = document.getElementById('addRune3')
fetch("http://ddragon.leagueoflegends.com/cdn/12.8.1/data/en_US/runesReforged.json")
    .then(res => res.json())
    .then(data => {
        for (var key in data) {
            mainKeystone.innerHTML = mainKeystone.innerHTML +
                "<option value='" + data[key].icon + "'>" + data[key].key + "</option>";
            subKeystone.innerHTML = subKeystone.innerHTML +
                "<option value='" + data[key].icon + "'>" + data[key].key + "</option>";
        }
        for (let i = 0; i < 4; i++) {
            mainRune.innerHTML = mainRune.innerHTML +
                "<option value='" + data[0].slots[0].runes[i].icon + "'>" + data[0].slots[0].runes[i].key + "</option>";
            mainRune3.innerHTML = mainRune3.innerHTML +
                "<option value='" + data[0].slots[3].runes[i].icon + "'>" + data[0].slots[3].runes[i].key + "</option>";
        }
        for (let i = 0; i < 3; i++) {

            mainRune1.innerHTML = mainRune1.innerHTML +
                "<option value='" + data[0].slots[1].runes[i].icon + "'>" + data[0].slots[1].runes[i].key + "</option>";
            mainRune2.innerHTML = mainRune2.innerHTML +
                "<option value='" + data[0].slots[2].runes[i].icon + "'>" + data[0].slots[2].runes[i].key + "</option>";
        }
        for (let i = 0; i < 4; i++) {
            subRune1.innerHTML = subRune1.innerHTML +
                "<option value='" + data[0].slots[3].runes[i].icon + "'>" + data[0].slots[3].runes[i].key + "</option>";
            subRune2.innerHTML = subRune2.innerHTML +
                "<option value='" + data[0].slots[3].runes[i].icon + "'>" + data[0].slots[3].runes[i].key + "</option>";
        }
        for (let i = 0; i < 3; i++) {

            subRune1.innerHTML = subRune1.innerHTML +
                "<option value='" + data[0].slots[2].runes[i].icon + "'>" + data[0].slots[2].runes[i].key + "</option>";
            subRune2.innerHTML = subRune2.innerHTML +
                "<option value='" + data[0].slots[2].runes[i].icon + "'>" + data[0].slots[2].runes[i].key + "</option>";
            subRune1.innerHTML = subRune1.innerHTML +
                "<option value='" + data[0].slots[1].runes[i].icon + "'>" + data[0].slots[1].runes[i].key + "</option>";
            subRune2.innerHTML = subRune2.innerHTML +
                "<option value='" + data[0].slots[1].runes[i].icon + "'>" + data[0].slots[1].runes[i].key + "</option>";
        }
    })

mainKeystone.onchange = function () {
    while (mainRune.hasChildNodes()) {
        mainRune.removeChild(mainRune.firstChild);
    }
    while (mainRune1.hasChildNodes()) {
        mainRune1.removeChild(mainRune1.firstChild);
    }
    while (mainRune2.hasChildNodes()) {
        mainRune2.removeChild(mainRune2.firstChild);
    }
    while (mainRune3.hasChildNodes()) {
        mainRune3.removeChild(mainRune3.firstChild);
    }
    switch (mainKeystone.value) {
        case 'perk-images/Styles/7200_Domination.png':
            fetch("http://ddragon.leagueoflegends.com/cdn/12.8.1/data/en_US/runesReforged.json")
                .then(res => res.json())
                .then(data => {
                    for (let i = 0; i < 4; i++) {
                        mainRune.innerHTML = mainRune.innerHTML +
                            "<option value='" + data[0].slots[0].runes[i].icon + "'>" + data[0].slots[0].runes[i].key + "</option>";
                        mainRune3.innerHTML = mainRune3.innerHTML +
                            "<option value='" + data[0].slots[3].runes[i].icon + "'>" + data[0].slots[3].runes[i].key + "</option>";
                    }
                    for (let i = 0; i < 3; i++) {

                        mainRune1.innerHTML = mainRune1.innerHTML +
                            "<option value='" + data[0].slots[1].runes[i].icon + "'>" + data[0].slots[1].runes[i].key + "</option>";
                        mainRune2.innerHTML = mainRune2.innerHTML +
                            "<option value='" + data[0].slots[2].runes[i].icon + "'>" + data[0].slots[2].runes[i].key + "</option>";
                    }
                })
            break;
        case 'perk-images/Styles/7203_Whimsy.png':
            fetch("http://ddragon.leagueoflegends.com/cdn/12.8.1/data/en_US/runesReforged.json")
                .then(res => res.json())
                .then(data => {
                    for (let i = 0; i < 3; i++) {
                        mainRune.innerHTML = mainRune.innerHTML +
                            "<option value='" + data[1].slots[0].runes[i].icon + "'>" + data[1].slots[0].runes[i].key + "</option>";
                        mainRune3.innerHTML = mainRune3.innerHTML +
                            "<option value='" + data[1].slots[3].runes[i].icon + "'>" + data[1].slots[3].runes[i].key + "</option>";
                        mainRune1.innerHTML = mainRune1.innerHTML +
                            "<option value='" + data[1].slots[1].runes[i].icon + "'>" + data[1].slots[1].runes[i].key + "</option>";
                        mainRune2.innerHTML = mainRune2.innerHTML +
                            "<option value='" + data[1].slots[2].runes[i].icon + "'>" + data[1].slots[2].runes[i].key + "</option>";
                    }
                })
            break;
        case 'perk-images/Styles/7201_Precision.png':
            fetch("http://ddragon.leagueoflegends.com/cdn/12.8.1/data/en_US/runesReforged.json")
                .then(res => res.json())
                .then(data => {
                    for (let i = 0; i < 4; i++) {
                        mainRune.innerHTML = mainRune.innerHTML +
                            "<option value='" + data[2].slots[0].runes[i].icon + "'>" + data[2].slots[0].runes[i].key + "</option>";
                    }
                    for (let i = 0; i < 3; i++) {
                        mainRune3.innerHTML = mainRune3.innerHTML +
                            "<option value='" + data[2].slots[3].runes[i].icon + "'>" + data[2].slots[3].runes[i].key + "</option>";
                        mainRune1.innerHTML = mainRune1.innerHTML +
                            "<option value='" + data[2].slots[1].runes[i].icon + "'>" + data[2].slots[1].runes[i].key + "</option>";
                        mainRune2.innerHTML = mainRune2.innerHTML +
                            "<option value='" + data[2].slots[2].runes[i].icon + "'>" + data[2].slots[2].runes[i].key + "</option>";
                    }
                })
            break;
        case 'perk-images/Styles/7204_Resolve.png':
            fetch("http://ddragon.leagueoflegends.com/cdn/12.8.1/data/en_US/runesReforged.json")
                .then(res => res.json())
                .then(data => {
                    for (let i = 0; i < 3; i++) {
                        mainRune.innerHTML = mainRune.innerHTML +
                            "<option value='" + data[3].slots[0].runes[i].icon + "'>" + data[3].slots[0].runes[i].key + "</option>";
                        mainRune3.innerHTML = mainRune3.innerHTML +
                            "<option value='" + data[3].slots[3].runes[i].icon + "'>" + data[3].slots[3].runes[i].key + "</option>";
                        mainRune1.innerHTML = mainRune1.innerHTML +
                            "<option value='" + data[3].slots[1].runes[i].icon + "'>" + data[3].slots[1].runes[i].key + "</option>";
                        mainRune2.innerHTML = mainRune2.innerHTML +
                            "<option value='" + data[3].slots[2].runes[i].icon + "'>" + data[3].slots[2].runes[i].key + "</option>";
                    }
                })
            break;
        case 'perk-images/Styles/7202_Sorcery.png':
            fetch("http://ddragon.leagueoflegends.com/cdn/12.8.1/data/en_US/runesReforged.json")
                .then(res => res.json())
                .then(data => {
                    for (let i = 0; i < 3; i++) {
                        mainRune.innerHTML = mainRune.innerHTML +
                            "<option value='" + data[4].slots[0].runes[i].icon + "'>" + data[4].slots[0].runes[i].key + "</option>";
                        mainRune3.innerHTML = mainRune3.innerHTML +
                            "<option value='" + data[4].slots[3].runes[i].icon + "'>" + data[4].slots[3].runes[i].key + "</option>";
                        mainRune1.innerHTML = mainRune1.innerHTML +
                            "<option value='" + data[4].slots[1].runes[i].icon + "'>" + data[4].slots[1].runes[i].key + "</option>";
                        mainRune2.innerHTML = mainRune2.innerHTML +
                            "<option value='" + data[4].slots[2].runes[i].icon + "'>" + data[4].slots[2].runes[i].key + "</option>";
                    }
                })
            break;
    }
}
subKeystone.onchange = function () {

    while (subRune1.hasChildNodes()) {
        subRune1.removeChild(subRune1.firstChild);
    }
    while (subRune2.hasChildNodes()) {
        subRune2.removeChild(subRune2.firstChild);
    }
    switch (subKeystone.value) {
        case 'perk-images/Styles/7200_Domination.png':
            fetch("http://ddragon.leagueoflegends.com/cdn/12.8.1/data/en_US/runesReforged.json")
                .then(res => res.json())
                .then(data => {
                    for (let i = 0; i < 4; i++) {
                        subRune1.innerHTML = subRune1.innerHTML +
                            "<option value='" + data[0].slots[3].runes[i].icon + "'>" + data[0].slots[3].runes[i].key + "</option>";
                        subRune2.innerHTML = subRune2.innerHTML +
                            "<option value='" + data[0].slots[3].runes[i].icon + "'>" + data[0].slots[3].runes[i].key + "</option>";
                    }
                    for (let i = 0; i < 3; i++) {

                        subRune1.innerHTML = subRune1.innerHTML +
                            "<option value='" + data[0].slots[2].runes[i].icon + "'>" + data[0].slots[2].runes[i].key + "</option>";
                        subRune2.innerHTML = subRune2.innerHTML +
                            "<option value='" + data[0].slots[2].runes[i].icon + "'>" + data[0].slots[2].runes[i].key + "</option>";
                        subRune1.innerHTML = subRune1.innerHTML +
                            "<option value='" + data[0].slots[1].runes[i].icon + "'>" + data[0].slots[1].runes[i].key + "</option>";
                        subRune2.innerHTML = subRune2.innerHTML +
                            "<option value='" + data[0].slots[1].runes[i].icon + "'>" + data[0].slots[1].runes[i].key + "</option>";
                    }
                })
            break;
        case 'perk-images/Styles/7203_Whimsy.png':
            fetch("http://ddragon.leagueoflegends.com/cdn/12.8.1/data/en_US/runesReforged.json")
                .then(res => res.json())
                .then(data => {
                    for (let i = 0; i < 3; i++) {
                        subRune1.innerHTML = subRune1.innerHTML +
                            "<option value='" + data[1].slots[3].runes[i].icon + "'>" + data[1].slots[3].runes[i].key + "</option>";
                        subRune2.innerHTML = subRune2.innerHTML +
                            "<option value='" + data[1].slots[3].runes[i].icon + "'>" + data[1].slots[3].runes[i].key + "</option>";
                        subRune1.innerHTML = subRune1.innerHTML +
                            "<option value='" + data[1].slots[2].runes[i].icon + "'>" + data[1].slots[2].runes[i].key + "</option>";
                        subRune2.innerHTML = subRune2.innerHTML +
                            "<option value='" + data[1].slots[2].runes[i].icon + "'>" + data[1].slots[2].runes[i].key + "</option>";
                        subRune1.innerHTML = subRune1.innerHTML +
                            "<option value='" + data[1].slots[1].runes[i].icon + "'>" + data[1].slots[1].runes[i].key + "</option>";
                        subRune2.innerHTML = subRune2.innerHTML +
                            "<option value='" + data[1].slots[1].runes[i].icon + "'>" + data[1].slots[1].runes[i].key + "</option>";
                    }
                })
            break;
        case 'perk-images/Styles/7201_Precision.png':
            fetch("http://ddragon.leagueoflegends.com/cdn/12.8.1/data/en_US/runesReforged.json")
                .then(res => res.json())
                .then(data => {
                    for (let i = 0; i < 3; i++) {
                        subRune1.innerHTML = subRune1.innerHTML +
                            "<option value='" + data[2].slots[3].runes[i].icon + "'>" + data[2].slots[3].runes[i].key + "</option>";
                        subRune2.innerHTML = subRune2.innerHTML +
                            "<option value='" + data[2].slots[3].runes[i].icon + "'>" + data[2].slots[3].runes[i].key + "</option>";
                        subRune1.innerHTML = subRune1.innerHTML +
                            "<option value='" + data[2].slots[2].runes[i].icon + "'>" + data[2].slots[2].runes[i].key + "</option>";
                        subRune2.innerHTML = subRune2.innerHTML +
                            "<option value='" + data[2].slots[2].runes[i].icon + "'>" + data[2].slots[2].runes[i].key + "</option>";
                        subRune1.innerHTML = subRune1.innerHTML +
                            "<option value='" + data[2].slots[1].runes[i].icon + "'>" + data[2].slots[1].runes[i].key + "</option>";
                        subRune2.innerHTML = subRune2.innerHTML +
                            "<option value='" + data[2].slots[1].runes[i].icon + "'>" + data[2].slots[1].runes[i].key + "</option>";
                    }
                })
            break;
        case 'perk-images/Styles/7204_Resolve.png':
            fetch("http://ddragon.leagueoflegends.com/cdn/12.8.1/data/en_US/runesReforged.json")
                .then(res => res.json())
                .then(data => {
                    for (let i = 0; i < 3; i++) {
                        subRune1.innerHTML = subRune1.innerHTML +
                            "<option value='" + data[3].slots[3].runes[i].icon + "'>" + data[3].slots[3].runes[i].key + "</option>";
                        subRune2.innerHTML = subRune2.innerHTML +
                            "<option value='" + data[3].slots[3].runes[i].icon + "'>" + data[3].slots[3].runes[i].key + "</option>";
                        subRune1.innerHTML = subRune1.innerHTML +
                            "<option value='" + data[3].slots[2].runes[i].icon + "'>" + data[3].slots[2].runes[i].key + "</option>";
                        subRune2.innerHTML = subRune2.innerHTML +
                            "<option value='" + data[3].slots[2].runes[i].icon + "'>" + data[3].slots[2].runes[i].key + "</option>";
                        subRune1.innerHTML = subRune1.innerHTML +
                            "<option value='" + data[3].slots[1].runes[i].icon + "'>" + data[3].slots[1].runes[i].key + "</option>";
                        subRune2.innerHTML = subRune2.innerHTML +
                            "<option value='" + data[3].slots[1].runes[i].icon + "'>" + data[3].slots[1].runes[i].key + "</option>";
                    }
                })
            break;
        case 'perk-images/Styles/7202_Sorcery.png':
            fetch("http://ddragon.leagueoflegends.com/cdn/12.8.1/data/en_US/runesReforged.json")
                .then(res => res.json())
                .then(data => {
                    for (let i = 0; i < 3; i++) {
                        subRune1.innerHTML = subRune1.innerHTML +
                            "<option value='" + data[4].slots[3].runes[i].icon + "'>" + data[4].slots[3].runes[i].key + "</option>";
                        subRune2.innerHTML = subRune2.innerHTML +
                            "<option value='" + data[4].slots[3].runes[i].icon + "'>" + data[4].slots[3].runes[i].key + "</option>";
                        subRune1.innerHTML = subRune1.innerHTML +
                            "<option value='" + data[4].slots[2].runes[i].icon + "'>" + data[4].slots[2].runes[i].key + "</option>";
                        subRune2.innerHTML = subRune2.innerHTML +
                            "<option value='" + data[4].slots[2].runes[i].icon + "'>" + data[4].slots[2].runes[i].key + "</option>";
                        subRune1.innerHTML = subRune1.innerHTML +
                            "<option value='" + data[4].slots[1].runes[i].icon + "'>" + data[4].slots[1].runes[i].key + "</option>";
                        subRune2.innerHTML = subRune2.innerHTML +
                            "<option value='" + data[4].slots[1].runes[i].icon   + "'>" + data[4].slots[1].runes[i].key + "</option>";
                    }
                })
            break;
    }
}