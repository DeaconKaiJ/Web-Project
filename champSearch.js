var champSearch = document.getElementById('sChamp_txt');
var listOptions = document.getElementById('listOptions');
var champImg = document.getElementById('modalImg');

fetch("http://ddragon.leagueoflegends.com/cdn/12.8.1/data/en_US/champion.json")
    .then(res => res.json())
    .then(data => data.data)
    .then(data => {
        for (var key in data) {
            listOptions.innerHTML = listOptions.innerHTML +
                "<li onclick='select(this)'>" + data[key].name + "</li>"
        }
    })
champSearch.addEventListener("click", function () {
    if (listOptions.style.display === "block") {
        listOptions.style.display = "none";
    } else {
        listOptions.style.display = "block";
    }
})
function select(element) {
    let selectData = element.textContent;
    champSearch.value = selectData;
}
var searchButton = document.getElementById("sChampSearchBTN");
var modalChamp = document.getElementById("modalChamp");
var spanChamp = document.getElementById("closeChamp");
var champHeader = document.getElementById("headerChamp")
var AD = document.getElementById("AD")
var AS = document.getElementById("AS")
var AR = document.getElementById("AR")
var MS = document.getElementById("MS")
var HP = document.getElementById("HP")
var ARM = document.getElementById("ARM")
var MR = document.getElementById("MR")
var MN = document.getElementById("MN")
var passive = document.getElementById("P")
var qab = document.getElementById("Q")
var wab = document.getElementById("W")
var eab = document.getElementById("E")
var rab = document.getElementById("R")
var r1 = document.getElementById("r1")
var r2 = document.getElementById("r2")
var r3 = document.getElementById("r3")

let Fighter = ["3078", "6333", "3053"]
let Marskman = ["3031", "3036", "3094"]
let Assassin = ["6676", "6691", "3036"]
let Tank = ["3075", "3119", "3143"]
let Mage = ["3157", "3089", "6653"]
let Support = ["3011", "3504", "3107"]

searchButton.onclick = async function () {
    searchValue = champSearch.value;
    champHeader.textContent = searchValue;
    searchValue = searchValue.toLowerCase();
    if (searchValue == "nunu & willump") { searchValue = "Nunu"; }
    if (searchValue == "renata glasc") { searchValue = "Renata"; }
    searchValue = searchValue.replace(/\s+/g, '');
    searchValue = searchValue.replace('.', '')
    searchValue = searchValue.replace("'", '');
    searchValue = searchValue.toLowerCase();
    searchValue = searchValue.charAt(0).toUpperCase() + searchValue.slice(1);
    if (searchValue == "Jarvaniv"){searchValue ="JarvanIV";}
    if (searchValue == "Kogmaw"){searchValue ="KogMaw";}
    if (searchValue == "Leesin"){searchValue ="LeeSin";}
    if (searchValue == "Drmundo"){searchValue ="DrMundo";}
    if(searchValue == "Aurelionsol"){searchValue ="AurelionSol";}
    if(searchValue == "Masteryi"){searchValue ="MasterYi";}
    if(searchValue == "Reksai"){searchValue ="RekSai";}   
    if(searchValue == "Tahmkench"){searchValue ="TahmKench";}
    if(searchValue == "Twistedfate"){searchValue ="TwistedFate";}
    if(searchValue == "Xinzhao"){searchValue ="XinZhao";}
    modalChamp.style.display = "block";
    champLink = "http://ddragon.leagueoflegends.com/cdn/12.8.1/data/en_US/champion/" + searchValue + ".json"
    imgLink = "http://ddragon.leagueoflegends.com/cdn/img/champion/loading/"+searchValue+"_0.jpg"
    imgHeight = "700px"
    imgWidth = "auto"
    champImg.innerHTML =  "<img src='" + imgLink + "'" + " " + "height='" + imgHeight + "'" + " " + "width='" + imgWidth + "'>";
    champImg.style.display ="block";
    fetch(champLink)
        .then(res => res.json())
        .then(data => data.data)
        .then(data => {
            for (var key in data)

            AD.textContent = "AD:" + data[key].stats.attackdamage
            AS.textContent = "AS:" + data[key].stats.attackspeed
            AR.textContent = "AR:" + data[key].stats.attackrange
            MS.textContent = "MS:" + data[key].stats.movespeed
            HP.textContent = "HP:" + data[key].stats.hp
            ARM.textContent = "ARM:" + data[key].stats.armor
            MR.textContent = "MR:" + data[key].stats.spellblock
            MN.textContent = "MN:" + data[key].stats.mp
            passiveDesc = data[key].passive.description
            passiveDesc = passiveDesc.replaceAll("<br>", " ")
            passiveDesc = passiveDesc.replaceAll("<br><br>", " ")
            passive.textContent = "Passive: " + data[key].passive.name + ": " + passiveDesc
            qDesc = data[key].spells[0].description
            qDesc = qDesc.replaceAll("<br>", " ")
            qDesc = qDesc.replaceAll("<br><br>", " ")
            qab.textContent = "Q: " + data[key].spells[0].name + ": " + qDesc
            wDesc = data[key].spells[1].description
            wDesc = wDesc.replaceAll("<br>", " ")
            wDesc = wDesc.replaceAll("<br><br>", " ")
            wab.textContent = "W: " + data[key].spells[1].name + ": " + wDesc
            eDesc = data[key].spells[2].description
            eDesc = eDesc.replaceAll("<br>", " ")
            eDesc = eDesc.replaceAll("<br><br>", " ")
            eab.textContent = "E: " + data[key].spells[2].name + ": " + eDesc
            rDesc = data[key].spells[3].description
            rDesc = rDesc.replaceAll("<br>", " ")
            rDesc = rDesc.replaceAll("<br><br>", " ")
            rab.textContent = "R: " + data[key].spells[3].name + ": " + rDesc
            if (data[key].tags[0] == "Fighter") {
                r1.innerHTML = "<img src='http://ddragon.leagueoflegends.com/cdn/12.8.1/img/item/"+Fighter[0] + ".png' style=width:50px;height:50px;>"
                r2.innerHTML = "<img src='http://ddragon.leagueoflegends.com/cdn/12.8.1/img/item/"+Fighter[1] + ".png' style=width:50px;height:50px;>"
                r3.innerHTML = "<img src='http://ddragon.leagueoflegends.com/cdn/12.8.1/img/item/"+Fighter[2] + ".png' style=width:50px;height:50px;>"
            }
            if (data[key].tags[0] == "Marksman") {
                r1.innerHTML = "<img src='http://ddragon.leagueoflegends.com/cdn/12.8.1/img/item/"+Marskman[0] + ".png' style=width:50px;height:50px;>"
                r2.innerHTML = "<img src='http://ddragon.leagueoflegends.com/cdn/12.8.1/img/item/"+Marskman[1] + ".png' style=width:50px;height:50px;>"
                r3.innerHTML = "<img src='http://ddragon.leagueoflegends.com/cdn/12.8.1/img/item/"+Marskman[2] + ".png' style=width:50px;height:50px;>"
            }
            if (data[key].tags[0] == "Assassin") {
                r1.innerHTML = "<img src='http://ddragon.leagueoflegends.com/cdn/12.8.1/img/item/"+Assassin[0] + ".png' style=width:50px;height:50px;>"
                r2.innerHTML = "<img src='http://ddragon.leagueoflegends.com/cdn/12.8.1/img/item/"+Assassin[1] + ".png' style=width:50px;height:50px;>"
                r3.innerHTML = "<img src='http://ddragon.leagueoflegends.com/cdn/12.8.1/img/item/"+Assassin[2] + ".png' style=width:50px;height:50px;>"
            }
            if (data[key].tags[0] == "Tank") {
                r1.innerHTML = "<img src='http://ddragon.leagueoflegends.com/cdn/12.8.1/img/item/"+Tank[0] + ".png' style=width:50px;height:50px;>"
                r2.innerHTML = "<img src='http://ddragon.leagueoflegends.com/cdn/12.8.1/img/item/"+Tank[1] + ".png' style=width:50px;height:50px;>"
                r3.innerHTML = "<img src='http://ddragon.leagueoflegends.com/cdn/12.8.1/img/item/"+Tank[2] + ".png' style=width:50px;height:50px;>"
            }
            if (data[key].tags[0] == "Mage") {
                r1.innerHTML = "<img src='http://ddragon.leagueoflegends.com/cdn/12.8.1/img/item/"+Mage[0] + ".png' style=width:50px;height:50px;>"
                r2.innerHTML = "<img src='http://ddragon.leagueoflegends.com/cdn/12.8.1/img/item/"+Mage[1] + ".png' style=width:50px;height:50px;>"
                r3.innerHTML = "<img src='http://ddragon.leagueoflegends.com/cdn/12.8.1/img/item/"+Mage[2] + ".png' style=width:50px;height:50px;>"
            }
            if (data[key].tags[0] == "Support") {
                r1.innerHTML = "<img src='http://ddragon.leagueoflegends.com/cdn/12.8.1/img/item/"+Support[0] + ".png' style=width:50px;height:50px;>"
                r2.innerHTML = "<img src='http://ddragon.leagueoflegends.com/cdn/12.8.1/img/item/"+Support[1] + ".png' style=width:50px;height:50px;>"
                r3.innerHTML = "<img src='http://ddragon.leagueoflegends.com/cdn/12.8.1/img/item/"+Support[2] + ".png' style=width:50px;height:50px;>"
            }
        })
}
spanChamp.onclick = function () {
    modalChamp.style.display = "none";
    champImg.style.display = "none"
}
window.onclick = function (event) {
    if (event.target == modalChamp) {
        modalChamp.style.display = "none";
        champImg.style.display = "none"
    }
}