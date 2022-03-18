const divhumanedit = document.getElementById("humanprofileedit");
const divanimaledit = document.getElementById("animalprofileedit");

HumanProfileEdit();

function HumanProfileEdit() {
    divhumanedit.style.display = "block";
    divanimaledit.style.display = "none";
}

function AnimalProfileEdit() {
    divhumanedit.style.display = "none";
    divanimaledit.style.display = "block";
}

const loadFile = function(event) {
	const image = document.getElementById('previewphoto');
	image.src = URL.createObjectURL(event.target.files[0]);
};
// Bron gebruikt: https://www.webtrickshome.com/forum/how-to-display-uploaded-image-in-html-using-javascript



document.addEventListener('DOMContentLoaded', () => {
    const CountryDropdown = document.getElementById('country');

    fetch('https://restcountries.com/v2/all').then(res => {
        return res.json();
    }).then(countries => {
        let output = "";
        countries.forEach(country => {
            output += `<option>${country.name}</option>`;
        });

        CountryDropdown.innerHTML = output;
    }).catch(err => {
        console.log(err);
    })
});

// Bron: https://www.youtube.com/watch?v=iw4lvZGBuvA&ab_channel=OstonCodeCypher

const selectedCountry = localStorage.getItem('selectedCountry');

document.getElementById('country').value = selectedCountry;



const array = localStorage.getItem('myArray');
const interestarray = JSON.parse(array);

// Bron: https://gist.github.com/nrojas13/68b79e21d0c81aa22ad762c9a4db38d0

const interests = ["Travel", "Dogs", "Cooking", "Surfing", "Politics", "Cats", "Fitness", "Reading", "Netflix", "Partying"];

interests.forEach((i) => {
    if (interestarray.includes(i) == true) {
    document.getElementById(i).checked = true;
    } else {
    document.getElementById(i).checked = false;
    }
});

// Bron https://www.w3schools.com/jsref/jsref_includes_array.asp





