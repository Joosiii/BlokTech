const divhuman = document.getElementById("humanprofile");
const divanimal = document.getElementById("animalprofile");

HumanProfile();

function HumanProfile() {
    divhuman.style.display = "block";
    divanimal.style.display = "none";
}

function AnimalProfile() {
    divhuman.style.display = "none";
    divanimal.style.display = "block";
}

const selectedCountry = document.getElementById('selected').innerText;

localStorage.setItem('selectedCountry', selectedCountry);




const ul = document.getElementById("interestlist");
const children = ul.children;
let interestarray = [];

Array.from(children).forEach(li => {
    interestarray.push(li.innerText);
});

localStorage.setItem('myArray', JSON.stringify(interestarray));
