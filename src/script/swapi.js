const characters = [
    {
        name: "Luke Skywalker",
		height: 172,
		mass: 77,
		hair_color: "blond",
		skin_color: "fair",
		eye_color: "blue",
		birth_year: "19BBY",
		gender: "Male",
    },
    {
        name: "C-3PO",
		height: 167,
		mass: 75,
		hair_color: "N/A",
		skin_color: "Gold",
		eye_color: "Yellow",
		birth_year: "112BBY",
		gender: "N/A",
    },
    {
        name: "R2-D2",
		height: 96,
		mass: 32,
		hair_color: "N/A",
		skin_color: "White, Blue",
		eye_color: "Red",
		birth_year: "33BBY",
		gender: "N/A",
    },
    {
        name: "Darth Vader",
		height: 202,
		mass: 136,
		hair_color: "N/A",
		skin_color: "White",
		eye_color: "Yellow",
		birth_year: "41.9BBY",
		gender: "Male",
    },
    {
        name: "Leia Organa",
		height: 150,
		mass: 49,
		hair_color: "Brown",
		skin_color: "Light",
		eye_color: "Brown",
		birth_year: "19BBY",
		gender: "Female",
    },
    {
        name: "Owen Lars",
		height: 178,
		mass: 120,
		hair_color: "Brown, Grey",
		skin_color: "Light",
		eye_color: "Blue",
		birth_year: "52BBY",
		gender: "Male",
    },
    {
        name: "Bery Whitesun Lars",
		height: 165,
		mass: 75,
		hair_color: "Brown",
		skin_color: "Light",
		eye_color: "Blue",
		birth_year: "47BBY",
		gender: "Female",
    },
    {
        name: "R5-D4",
		height: 97,
		mass: 32,
		hair_color: "N/A",
		skin_color: "White, Red",
		eye_color: "Red",
		birth_year: "unknown",
		gender: "N/A",
    },
    {
        name: "Biggs Darklighter",
		height: 183,
		mass: 84,
		hair_color: "Black",
		skin_color: "Light",
		eye_color: "Brown",
		birth_year: "24BBY",
		gender: "Male",
    },
    {
        name: "Obi-Wan Kenobi",
		height: 182,
		mass: 77,
		hair_color: "Auburn, White",
		skin_color: "Fair",
		eye_color: "Blue-gray",
		birth_year: "57BBY",
		gender: "Male",

    }
]
function search() {
    var input, filter, table, tr, td, i;
    input = document.getElementById('userInput');
    filter = input.value.toUpperCase();
    table = document.getElementById('mainTable');
    tr = table.getElementsByTagName('tr');
    for (i = 0; i < tr.length; i++) {
        td = tr[i].getElementsByTagName('td')[0];
        if (td) {
            txtValue = td.textContent || td.innerText;
            if (txtValue.toUpperCase().indexOf(filter) > -1) {
                tr[i].style.display = "";
            } else {
                tr[i].style.display = "none";
            }
        }
    }
}

function sort(n) {
    var table, rows, switching, i, x, y, shouldSwitch, dir, switchcount = 0;
    table = document.getElementById("mainTable");
    switching = true;
    dir = "asc";
    while (switching) {
        switching = false;
        rows = table.getElementsByTagName('tr');
        for (i = 1; i < (rows.length - 1); i++) {
            shouldSwitch = false;
            x = rows[i].getElementsByTagName("td")[n];
            y = rows[i + 1].getElementsByTagName("td")[n];
            var cmpX = isNaN(parseInt(x.innerHTML)) ? x.innerHTML.toLowerCase() : parseInt(x.innerHTML);
            var cmpY = isNaN(parseInt(y.innerHTML)) ? y.innerHTML.toLowerCase() : parseInt(y.innerHTML);
            cmpX = (cmpX == '-') ? 0 : cmpX;
            cmpY = (cmpY == '-') ? 0 : cmpY;
            if (dir == "asc") {
                if (cmpX > cmpY) {
                    shouldSwitch = true;
                    break;
                }
            } else if (dir == "desc") {
                if (cmpX < cmpY) {
                    shouldSwitch = true;
                    break;
                }
            }
        }
        if (shouldSwitch) {
            rows[i].parentNode.insertBefore(rows[i + 1], rows[i]);
            switching = true;
            switchcount++;
        }
        else {
            if (switchcount == 0 && dir == "asc") {
                dir = "desc";
                switching = true;
            }

        }
    }
}

text = "";
for (var i = 0; i < characters.length; i++) {
    name = characters[i].name;
    height = characters[i].height;
    mass = characters[i].mass;
    hair_color = characters[i].hair_color;
    skin_color = characters[i].skin_color;
    eye_color = characters[i].eye_color;
    birth_year = characters[i].birth_year;
    gender = characters[i].gender;
    text += '<tr>'
    text += '<td>' + name + '</td>'
    text += '<td>' + height + '</td>'
    text += '<td>' + mass + '</td>'
    text += '<td>' + hair_color + '</td>'
    text += '<td>' + skin_color + '</td>'
    text += '<td>' + eye_color + '</td>'
    text += '<td>' + birth_year + '</td>'
    text += '<td>' + gender + '</td>'
    text += '</tr>'
}
document.querySelector('tbody#table').innerHTML = text