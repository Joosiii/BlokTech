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

    fetch('https://restcountries.com/v3.1/all').then(res => {
        return res.json();
    }).then(countries => {
        let output = "";
        countries.forEach(country => {
            output += `<option>${country.name.common}</option>`;
            console.log(country.name);
        });

        CountryDropdown.innerHTML = output;
    }).catch(err => {
        console.log(err);
    })
});