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

let Fighter = ["Trinity Force", "Deaths Dance", "Sterak's Gage"]
let Marskman = ["Infinity Edge", "LDR", "Rapid Firecannon"]
let Assassin = ["The Collector", "Duskblade of Draktharr", "LDR"]
let Tank = ["Thornmail", "Winters Approach", "Randuin's Omen"]
let Mage = ["Zhonya's Hourglass", "Rabadon's Deathcap", "Liandry's Anguish"]
let Support = ["Chemtech Putrifier", "Ardent Censer", "Redemption"]

searchButton.onclick = async function () {
    searchValue = champSearch.value;
    champHeader.textContent = searchValue;
    if (searchValue == "Nunu & Willump") { searchValue = "Nunu"; }
    if (searchValue == "Renata Glasc") { searchValue = "Renata"; }
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
                r1.textContent = Fighter[0]
                r2.textContent = Fighter[1]
                r3.textContent = Fighter[2]
            }
            if (data[key].tags[0] == "Marksman") {
                r1.textContent = Marskman[0]
                r2.textContent = Marskman[1]
                r3.textContent = Marskman[2]
            }
            if (data[key].tags[0] == "Assassin") {
                r1.textContent = Assassin[0]
                r2.textContent = Assassin[1]
                r3.textContent = Assassin[2]
            }
            if (data[key].tags[0] == "Tank") {
                r1.textContent = Tank[0]
                r2.textContent = Tank[1]
                r3.textContent = Tank[2]
            }
            if (data[key].tags[0] == "Mage") {
                r1.textContent = Mage[0]
                r2.textContent = Mage[1]
                r3.textContent = Mage[2]
            }
            if (data[key].tags[0] == "Support") {
                r1.textContent = Support[0]
                r2.textContent = Support[1]
                r3.textContent = Support[2]
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