var filter = document.getElementById('filterButton');

fetch("http://ddragon.leagueoflegends.com/cdn/12.8.1/data/en_US/champion.json")
    .then(res => res.json())
    .then(data => data.data)
    .then(data => {
        for (var key in data) {
            listOptions2.innerHTML = listOptions2.innerHTML +
                "<li onclick='select(this)'>" + data[key].name + "</li>"
        }
    })
filter.addEventListener("click", function () {
    if (listOptions2.style.display === "block") {
        listOptions2.style.display = "none";
    } else {
        listOptions2.style.display = "block";
    }
})